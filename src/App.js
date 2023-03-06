import React, {useState} from 'react'

function App() {

  const [list, setList, , oklist , setListOk] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo)=> {  

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
  const concluiTodo = (id, todo) =>{
    
    //var controle = 0;

    //document.querySelector(".item2").classList.add("visivel");
    //var newid = id +1;
    //console.log(id)

   // id.deleteTodo();


    //const concList = oklist.filter((todo) => todo.id > 1);
    //setList(concList);

    //setInput("");

   // controle++;
  }



const bazuka = () =>{


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
          <div class="item">
            <tr>
            <th><button class="btn-ok" onClick={() => concluiTodo(todo.id)}></button></th>
            <td class="todo-text"><li key={todo.id}>{todo.todo}</li></td>
            <td><button class="btn-remove" onClick={() => deleteTodo(todo.id)}>&times;</button></td>
            </tr>
          </div>
        ))}
      </div>
      <div class="container2" id="ctn2">
      {list.map((todo) => ( 
      <div class="item2">
        <tr>
        <th><button class="none"></button></th>
        <td class="todo-text"><li key={todo.newid}>{todo.todo}</li></td>
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