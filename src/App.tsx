import React, {useState} from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Modal from './components/Modal';

// CSS
import styles from './App.module.css'

// Interface
import {ITask} from "./interfaces/Task"
import { idText } from 'typescript';


function App() {

  const [taskList,setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState <ITask | null >(null);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide");
    }else{
      modal!.classList.add("hide")
    }
  };

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task)
  };

  const updateTask = (id:number, title: string, difficulty:number) => {
    const updateTask: ITask = {id, title, difficulty}

    const updatedItens = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask: task
    })
    setTaskList(updatedItens)

    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal 
      children={<Taskform 
      btnText={'Editar tarfefa'} 
      taskList={taskList}
      task={taskToUpdate}
      handleUpdate={updateTask}
      />}
      />
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform 
          btnText="Criar tarefa" 
          taskList={taskList} 
          setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <Tasklist taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
