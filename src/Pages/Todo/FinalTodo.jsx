import { useState } from "react";
// import "./Todos.css";

export default function FinalTodo() {
  let [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [updateInput, setUpdateInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    input.trim() === "" ? alert("Empty Input") : setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo, index) => index !== id);
    setTodos(filteredTodo);
  };

  const getTodo = (id) => {
    setUpdateId(id);
    setIsEdit(true);
    setUpdateInput(todos[id]);
  };

  const updateTodoInput = (e) => {
    setUpdateInput(e.target.value);
  };

  const updateTodo = (id, e) => {
    e.preventDefault();
    todos[id] = updateInput;
    setTodos(todos);
    setIsEdit(false);
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen">
      <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
        <div className="input_text relative">
          <input
            className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Write a new task"
          />
          <button
            onClick={addTodo}
            className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
          >
            Add Todo
          </button>
          <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
        </div>
        <ul className="all_tasks">
          {todos.map((todo, index) => (
            <li key={index}>
              <hr className="mt-2" />
              <div className="my-4 flex justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    onClick="tick(1)"
                    className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full"
                  >
                    <i
                      id="checked1"
                      className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
                    ></i>
                  </span>

                  {isEdit && updateId === index ? (
                    <form action="" onSubmit={(e) => updateTodo(index, e)}>
                      <input
                        onChange={updateTodoInput}
                        type="text"
                        className="update__input"
                        value={updateInput}
                      />
                    </form>
                  ) : (
                    <p className="md:max-w-[375px] truncate max-w-[280px] ">
                      <strike
                        id="strike1"
                        className="text-gray-600 text-sm no-underline "
                      >
                        {todo}
                      </strike>
                    </p>
                  )}
                </div>

                {isEdit && updateId === index ? (
                  <span
                    onClick={(e) => updateTodo(index, e)}
                    className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                  >
                    <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-check"></i>
                  </span>
                ) : (
                  <span
                    onClick={() => getTodo(index)}
                    className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                  >
                    <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                  </span>
                )}

                <span
                  onClick={() => deleteTodo(index)}
                  className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full"
                >
                  <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
