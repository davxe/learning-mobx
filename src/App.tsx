import React from 'react';
import { TodoList } from './component';
import { TodoStore } from './component/TodoStore';


function App() {
  return (
    <div className="App">
      <TodoList todoStore={TodoStore}/>
    </div>
  );
}

export default App;
