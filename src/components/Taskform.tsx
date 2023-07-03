import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

//CSS
import styles from "./TaskForm.module.css"

// Interface
import { ITask } from "../interfaces/Task"
import Tasklist from './Tasklist';


interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Taskform = ({btnText, taskList, setTaskList}: Props) => {


  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {id, title, difficulty}

    setTaskList!([...taskList, newTask])

    setTitle("");
    setDifficulty(0)

    console.log(taskList)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }

  }


  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="Title">Titulo:</label>
            <input type="text" name='title' placeholder='Titulo da tarefa' onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="Title">Dificuldade:</label>
            <input type="text" name='dificulty' placeholder='Dificuldade da tarefa' onChange={handleChange}/>
        </div>
        <input type="submit" value={btnText} />

    </form>
  )
}

export default Taskform