import { useState, useCallback } from "react";
import CallBack from "./CallBack";

const MainOne = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);


  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New Todo"]);
  }, [todos]);

  return (
    <>
      <CallBack todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}{" "}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default MainOne;