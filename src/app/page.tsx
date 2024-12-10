
'use client'

import { useState } from "react";
import Navigation from "../components/Navigation";
import TaskList from "../components/TaskList";
import TaskCard from "../components/TaskCard";
import { Task } from "../../constents/Task";
import Modal from "@/components/Modal";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Today's Task");
  const [activeTab2, setActiveTab2] = useState("All")
  const [task, setTask] = useState(Task)
  const [allTask, setAllTask] = useState(task)
  const [isOpen, setIsOpen] = useState(false)

  const addTask = (newTask: any) => {
    const tmpNewTask = {
      ...newTask,
      id: task.length,
      status:"Open",
      membres: [
        {
          image: "https://via.placeholder.com/32",
          alt: "Avatar1"
        },
        {
          image: "https://via.placeholder.com/32",
          alt: "Avatar2"
        },
      ]
    }
    console.log(tmpNewTask)
    setTask([...task,tmpNewTask])
    setAllTask([...task,tmpNewTask])
  }
  const changetab = (tab: string) => {
    if (tab !== "All") {
      setTask(allTask.filter((item: any) => item.status === tab))
    }
    else {
      setTask(allTask)
    }
    setActiveTab2(tab)
  }
  // Fonction pour changer l'onglet actif
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const changeStatusTask = (id: number) => {
    console.log(id)
    const tmpTask = allTask.map((item) => {
      if (item.id === id) {
        if (item.status === "Close") {
          item.status = "Open"
        } else if (item.status === "Open") {
          item.status = "Close"
        }
      }
      return item
    })
    setAllTask(tmpTask)
    changetab(activeTab2)

  }

  const handleDragStart = (e: any, index: any) => {
    console.log("lad")
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e: any, dropIndex: any) => {
    console.log("looo")
    const dragIndex = e.dataTransfer.getData("dragIndex");
    console.log(dragIndex)
    if (dragIndex === null || dragIndex === dropIndex) return;

    const updatedItems = [...allTask];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    // console.log(updatedItems)
    setTask(updatedItems);
  };

  const handleDragOver = (e: any) => e.preventDefault();
  return (
    <div className="mt-5 items-center rounded-xl w-11/12 ">
      <Navigation handleTabClick={handleTabClick} activeTab={activeTab} />
      {activeTab === "Today's Task" &&
        <div className=" w-full  ">
          <TaskList allTask={allTask} setIsOpen={setIsOpen} changetab={changetab} activeTab2={activeTab2} />
          {
            isOpen && <Modal addTask={addTask} closeModal={setIsOpen} />
          }
          <div className=" mt-5 m-auto" >
            {
              task.map((item: any, index: number) => {
                return <div className=" cursor-grab " key={index} draggable onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}>
                  <TaskCard changeStatusTask={changeStatusTask} task={item} />
                </div>

              })
            }
          </div>

        </div>


      }
    </div>
  );
}
