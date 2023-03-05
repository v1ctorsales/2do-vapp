import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo= (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo])

    setInput("");
  };

  const deleteTodo = (id) =>{
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }
  return (
    <div>

      <h1>Túdo.vapp</h1>
        <div name="search">
          <input className='input' placeholder='O quê eu ia fazer mesmo?' value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className='btn-add' onClick={() => addTodo(input)}>+</button>
      </div>
      <div class="container">
        {list.map((todo) => (
          <div class="item">
            <tr>
            <th><button class="btn-ok" onClick={() => deleteTodo(todo.id)}></button></th>
            <td class="todo-text"><li key={todo.id}>{todo.todo}</li></td>
            <td><button class="btn-remove" onClick={() => deleteTodo(todo.id)}>&times;</button></td>
            </tr>
          </div>
        ))}
      </div>
      </div>

      
  )

}

export default App