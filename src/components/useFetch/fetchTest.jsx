import React, { useState } from "react";
import useFetch from "./useFetch";

const API_URL = "http://localhost:8000";

const FetchTest = () => {
  const [input, setInput] = useState("");

  const { loading, error, data: todos, refetch } = useFetch(`${API_URL}/todos`);

  function handleChange(e) {
    setInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        body: JSON.stringify({
          todo: input,
          completed: false,
          userId: 25,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        setInput("");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (error) return <div>{`Error occured! ${error}`}</div>;

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          value={input}
          placeholder="Enter your todo"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos && todos.length > 0 ? (
          todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)
        ) : (
          <div>No todos found.</div>
        )}
      </ul>
    </div>
  );
};

export default FetchTest;
