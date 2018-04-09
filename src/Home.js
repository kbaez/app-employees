import React, { Component } from 'react';
import './App.css';
import {OverlayTrigger, Button, Form, Table, Modal, FormGroup, ControlLabel,FormControl, HelpBlock} from 'react-bootstrap';
import data from './employees.json';
import Header from './Header.js';
import PropTypes from 'prop-types'
import store from './store.js';

class Home extends Component{
  constructor(){
		super()

		this.state = {
	    show: false,
      requiredItem: 0,
      data: store.getState().data,
      employee:{}
	  };

    store.subscribe(()=>{
      this.setState({
        data: store.getState().data
      });
    });

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  onOpenModal = () => {
    this.setState({ show: true });
    console.log('open modal')
  };

  onCloseModal = () => {
    this.setState({ show: false });
    console.log('close modal')
  };

 handleChange(e) {
    console.log(e)
    const field = e.target.id;
    const value = e.target.value;
    const employee = this.state.employee;
    employee[field] = value;
    this.setState({employee});
 }

 saveEmployee(){

   store.dispatch({
     type: "SAVE_EMPLOYEE",
     employee: this.state.employee
   })

   this.onCloseModal();
 }

 editEmployee(data){

   this.setState({
     employee: {...data}
   });

   this.onOpenModal();
 }

	render(){
    const {children} = this.props;

		return(
			<div className="Home container">
				<h1>Información de Empleados 2</h1>
				<Table striped bordered condensed hover>
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Nombre</th>
				      <th>Apellido</th>
				      <th>Edad</th>
				      <th>Puesto</th>
							<th>Acción</th>
				    </tr>
				  </thead>
				  <tbody>
						{
							this.state.data.map((row,key) =>(
									<tr key={key}>
										<td>{row.id}</td>
										<td>{row.name}</td>
										<td>{row.lastname}</td>
										<td>{row.age}</td>
										<td>{row.role}</td>
										<td>
                      <Button type="button" onClick={() => {this.editEmployee(row)
                      }}>Editar</Button>
                    </td>
									</tr>
							))
						}
				  </tbody>
				</Table>

				<Modal show={this.state.show} onHide={this.onCloseModal}>
           <Modal.Header closeButton>
            <Modal.Title>Empleado</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <FormGroup controlId="name">
               <ControlLabel>Nombre</ControlLabel>
               <FormControl
                 type="text"
                 value={this.state.employee.name}
                 placeholder="Enter text"
                 onChange={this.handleChange}
               />
             </FormGroup>

             <FormGroup controlId="lastname">
               <ControlLabel>Apellido</ControlLabel>
               <FormControl
                 type="text"
                 value={this.state.employee.lastname}
                 placeholder="Enter text"
                 onChange={this.handleChange}
               />
             </FormGroup>

             <FormGroup controlId="age">
               <ControlLabel>Edad</ControlLabel>
               <FormControl
                 type="text"
                 value={this.state.employee.age}
                 placeholder="Enter text"
                 onChange={this.handleChange}
               />
             </FormGroup>

             <FormGroup controlId="role">
               <ControlLabel>Puesto</ControlLabel>
               <FormControl
                 type="text"
                 value={this.state.employee.role}
                 placeholder="Enter text"
                 onChange={this.handleChange}
               />
             </FormGroup>
           </Modal.Body>
           <Modal.Footer>
             <Button bsStyle="primary" onClick={() => {this.saveEmployee()
             }}>Save</Button>
             <Button onClick={this.onCloseModal}>Close</Button>
           </Modal.Footer>
        </Modal>
			</div>
		);
	}
}

export default Home;
