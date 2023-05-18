import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
  // const [deleteTodos, setDeleteTodos] = useState(false)    
  const data = todos;

  const handleDelete = (index)=>{
    data.splice(index, 1)
    setTodos([...data])
    console.log(data);
  }
  return (
    <>
      <TodoCount todos={todos} />
      <TodoList handleDelete={handleDelete} todos={todos} />
      <AddTodo setTodos={setTodos} />
      {/* <DeleteTodo /> */}
    </>
  );
}

function TodoCount({ todos }) {
  return <div>Total Todos: {todos.length}</div>;
}

// const removeMe = (index) => {
//   if(index > -1) {
//     todo.slice(index, 1);
//   }
//   return todo;
// }



function TodoList({ todos,handleDelete }) {
  
  return (
    <ul>
      {todos.map((todo,index) => (
        <li key={todo}>{todo} <button onClick={()=>handleDelete(index)}>Delete</button></li>
      ))}
    </ul>
  );
}


function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos(prevTodos => [...prevTodos, todo]);
  }

// function DeleteTodo(){
//   function handle
// } 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}