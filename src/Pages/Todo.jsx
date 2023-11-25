import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {

    input.trim() === "" ? alert("Empty Input") : setTodos([...todos, input]);
    setInput("")
    // if (input !== ""){
    // setTodos([...todos, input]);
    // setInput('')} else{
    //     alert("Pls input Value")
    // }
  };

  const deletTodo = (id) => {
    const filteredTodo = todos.filter((todo, index) => index !== id);
    setTodos(filteredTodo)
  };

  return (
    <div class="flex justify-center items-center bg-gray-300 min-h-screen">
      <div class="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
        <div class="input_text relative">
          <input
            value={input}
            onChange={inputHandle}
            class="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
            type="text"
            placeholder="Write a new task"
          />
          <button
            onClick={addTodo}
            class="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
          >
            Add task
          </button>
          <i class="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
        </div>
        <ul class="all_tasks">
          {todos.map((todo, index) => (
            <li id="1">
              <hr class="mt-2" />
              <div class="my-4 flex justify-between px-1">
                <div class="flex items-center gap-2">
                  <span
                    onclick="tick(1)"
                    class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                  >
                    <i
                      id="checked1"
                      class="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
                    ></i>
                  </span>
                  <p class="md:max-w-[375px] truncate max-w-[280px] ">
                    <strike
                      id="strike1"
                      class="text-gray-600 text-sm no-underline "
            Add task
            >       {todo}
                    </strike>
                  </p>
                </div>
                <span
                  onclick="trash(1)"
                  class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i class="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                </span>
                <span
                onClick={()=>deletTodo(index)}
                  onclick="trash(1)"
                  class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i class="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
