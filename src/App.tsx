import React, {useState} from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

// CSS
import styles from './App.module.css'

// Interface
import {ITask} from "./interfaces/Task"


function App() {

  const [taskList,setTaskList] = useState<ITask[]>([]);

  return (
    <div>+
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <Tasklist taskList={taskList} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
