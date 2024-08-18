import React from "react";
import { FiPlus } from "react-icons/fi";
import "./main.css";

function TodoForm() {
  return (
    <form className="todo-form">
      <input
        className="todo-form__input"
        type="text"
        placeholder="Add new Task"
        id="input"
      />
      <label className="todo-form__label" htmlFor="input"></label>
      <button className="todo-form__button">
        <FiPlus />
      </button>
    </form>
  );
}

export default TodoForm;
