import React, {useState} from 'react'

  var controle = 0;

function App() {


  const [list, setList,] = useState([]);
  const [list2, setList2,] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo)=> {  
    

    var newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList2([...list2, newTodo])
    setList([...list, newTodo])


    setInput("");

    controle++;
  };

  const deleteTodo = (id) =>{

    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);

  }
  const concluiTodo = (id, todo) =>{

    document.querySelectorAll("[value="+ CSS.escape(id)+"]")[0].classList.add("feito");


  }
  return (
    <div>
      <h1>Túdo.vapp</h1>
        <div name="search">
          <input type="" placeholder='O quê eu ia fazer mesmo?' value={input} onChange={(e) => setInput(e.target.value)} />
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
      </div>// Preciso criar uma lista secundaria para os items concluidos

        
  )
 
}

export default App 