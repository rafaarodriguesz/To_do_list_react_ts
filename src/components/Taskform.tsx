import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

//CSS
import styles from "./TaskForm.module.css"

// Interface
import { ITask } from "../interfaces/Task"


interface Props {
    btnText: string;
}

const Taskform = ({btnText}: Props) => {


  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {}

  const handleChange = () => {}


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