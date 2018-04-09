export const UPDATE_TODO = 'UPDATE_TODO'

export function updateTodo(text) {
  return { type: UPDATE_TODO, text }
}
