export const addTodo = (message) => {
  return {
    type: "ADD_TODO",
    message,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
export const updateTodo = ({ message, id }) => {
  return {
    type: "UPDATE_TODO",
    message,
    id,
  };
};
// export const updateNumber = (data) => {
//   return {
//     type: "UPDATE",
//     payload: {
//       data: data,
//     },
//   };
// };
export const clearNumber = () => {
  return {
    type: "CLEAR",
  };
};
