import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import styles from "./TaskForm.module.css"

//Interface
import {ITask} from "../interfaces/Task";


interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList,setTaskList}: Props) => {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, difficulty}

        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)

        console.log(taskList)
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.id==="inputTitle"){
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }


    return (
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
            <label>
                Título:
                <input type="text" id="inputTitle" placeholder='Título da Tarefa' onChange={handleChange} value={title}/>
                </label>
            </div>
            <div className={styles.input_container}>
            <label>
                Dificuldade:
                <input type="number" placeholder='Título da Tareda' onChange={handleChange} value={difficulty}/>
                </label>
            </div>
            <input type="submit" value={btnText}/>
        </form>
    )
}

export default TaskForm