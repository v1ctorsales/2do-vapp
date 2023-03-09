import React, {useState} from 'react'


function App() {

  const [list, setList,] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo)=> {  
  
    var newTodo = {
      id: Math.random(),
      todo: todo,
    };

    if(todo!=""){
      setList([...list, newTodo])
    }
    else{
      alert("Sua tarefa está vazia!")
    }

    setInput("");
  };

  const deleteTodo = (id) =>{
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  const concluiTodo = (id, todo) =>{
    document.querySelectorAll("[value="+ CSS.escape(id)+"]")[0].classList.toggle("feito")
    document.querySelectorAll("[value="+ CSS.escape(id)+"]")[0].querySelectorAll('button')[0].classList.toggle("check")
  }

  return (
    <div>
      <h1>Túdo.vapp</h1>
        <div name="search">
          <input onKeyDown={(ev) => {
    console.log(`Pressed keyCode ${ev.key}`);
    if (ev.key === 'Enter') {
      addTodo(input)
      ev.preventDefault();
    }
  }}type="" id="ipt" placeholder='O quê eu ia fazer mesmo?' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='btn-add' onClick={() => addTodo(input)}>+</button>
      </div>
      <div class="container">
        {list.map((todo) => (
          <div class="item" value={todo.id}>
            <tr>
            <th><button class="btn-ok" onClick={() => concluiTodo(todo.id)}></button></th>
            <td class="todo-text"><li key={todo.id}>{todo.todo}</li></td>
            <td><button class="btn-remove" onClick={() => deleteTodo(todo.id)}>&times;</button></td>
            </tr>
          </div>
        ))}
      </div>
      
      <script>
        
      </script>
      </div>// Preciso linkar o enter pra enviar o todo.

        
  )
  
  
 
}

export default App 