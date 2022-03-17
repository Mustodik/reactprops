import React from 'react';
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
function App() {
  let title="My First React App";
  
  return (
    <div>
         <NavBar title={title} />
         <main>
          <Todo title="Learning React" datetime= "23th March, 2022" />
          <Todo title="Premest Training" datetime= "23th March, 2022" />
          <Todo title="Going To Market" datetime= "23th March, 2022"/>
          <Todo title="writing exams" datetime= "23th March, 2022"/>
          <Todo title="Going Home" datetime= "23th March, 2022"/>
         </main>
    </div>
  )
}

export default App