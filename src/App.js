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
      <h1>2do</h1>
        <div name="search">
          <input onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  addTodo(input)
                  ev.preventDefault();
                }
              }}
              
              contentEditable="true" placeholder='O quê eu ia fazer mesmo?' value={input} onChange={(e) => setInput(e.target.value)} />

            <input class="mobile" onKeyDown={(ev) => {

                if (ev.key === 'Enter') {
                  addTodo(input)
                  ev.preventDefault();
                }

              }}
              
              placeholder='...' value={input} onChange={(e) => setInput(e.target.value)} />

      </div>
      <div class="container">
        {list.map((todo) => (

          <div class="item" value={todo.id}>
            <tr>
            <th><button class="btn-ok" onClick={() => concluiTodo(todo.id)}></button></th>
            <td contentEditable="true" class="todo-text"><li key={todo.id}>{todo.todo}</li></td>
            <td><button class="btn-remove" onClick={() => deleteTodo(todo.id)}>&times;</button></td>
            </tr>
          </div>
          
        ))
        }

      </div>
      
      </div>// Enter linkado para enviar o todo.

        
  )
  
  
 
}

export default App 

//verificar se o 'contentEditable="true"' é a melhor solução...

//talvez adicionar a funçao de mover os to-dos dps.