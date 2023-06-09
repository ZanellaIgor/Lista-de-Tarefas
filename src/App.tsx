import { useState } from "react"

//css
import styles from "./App.module.css"

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//Interface
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    } else{
      modal!.classList.add("hide")
    }
  }
const editTask = ():void => {
  hideOrShowModal(true);

}

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Oque você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
