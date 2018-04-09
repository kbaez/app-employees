const logIn = user =>{
  return{
    type: "LOG_IN",
    user
  };
};

const saveEmployee = employee =>{
  return{
    type: "SAVE_EMPLOYEE",
    employee
  };
};

export {logIn, saveEmployee};
