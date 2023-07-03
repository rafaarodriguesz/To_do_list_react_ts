import React from 'react'

// interface
import {ITask} from "../interfaces/Task"

//CSS
import styles from "./TaskList.module.css"

interface Props{
  taskList: ITask[];
}


const Tasklist = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.difficulty}</p>
          </div>
        ))

      ):(
        <p>Não há tarefas cadastradas</p>
      )
    }
    </>
  )
};

export default Tasklist