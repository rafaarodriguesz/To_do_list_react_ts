import React from 'react'

interface Props {
    btnText: string;
}

const Taskform = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="Title">Titulo:</label>
            <input type="text" name='title' placeholder='Titulo da tarefa'/>
        </div>
        <div>
            <label htmlFor="Title">Dificuldade:</label>
            <input type="text" name='dificulty' placeholder='Dificuldade da tarefa'/>
        </div>
        <input type="submit" value={btnText} />

    </form>
  )
}

export default Taskform