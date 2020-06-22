import React from "react";

const Todos = ({ todos, removeTask }) => {
  console.log("Length", todos.length);
  const todoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          <div className="center collection-item " key={todo.id}>
            <span>{todo.task}</span>
            <span
              className="right material-icons"
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeTask(todo.id);
              }}
            >
              delete
            </span>
          </div>
        );
      })
    ) : (
      <h6 className="center"> To-Do List is Empty </h6>
    );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
