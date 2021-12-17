import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./redux/action";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const textRef = useRef(null);
  const dispatch = useDispatch();

  const editSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  };
  const renderForm = () => {
    return (
      <form onSubmit={editSubmit}>
        <input
          ref={textRef}
          type="text"
          name=""
          id=""
          defaultValue={task.task}
        />
        <button type="submit">Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button onClick={() => setIsUpdate(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
      </>
    );
  };

  return (
    <>
      <div>{isUpdate ? renderForm() : renderItem()}</div>{" "}
    </>
  );
};

export default TodoItem;
