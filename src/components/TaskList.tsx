import React from 'react'
class Props{
    changetab:any;
    activeTab2!:string;
    setIsOpen:any;
    allTask:any
}
function TaskList({allTask, setIsOpen, changetab, activeTab2 }:Props) {
    return (
        <div className=" m-auto " >

            <div className=" justify-around flex items-center  p-4">
                {/* <!-- Section de gauche --> */}
                <div>
                    <h1 className="text-xl font-semibold text-black">Today's Task</h1>
                    <p className="text-sm text-gray-500">Wednesday, 11 May</p>
                </div>

                {/* <!-- Bouton "New Task" --> */}
                <button onClick={()=>setIsOpen(true)} className="flex items-center gap-1 px-4 py-2 text-blue-500 bg-blue-100 rounded-lg hover:bg-blue-200">
                    <span className="text-lg font-semibold">+</span>
                    <span>New Task</span>
                </button>
            </div>
            <div className=" flex m-auto w-4/6 ">
                <div className="flex  mt-5 justify-around  w-full space-x-4 text-sm font-medium">
                    {/* <!-- Onglet All --> */}
                    <div className="flex items-center space-x-1">
                        <button onClick={() => changetab("All")} className={`${activeTab2 === "All" ? "text-blue-500" : "text-gray-500 hover:text-gray-800"}`}>All</button>
                        <span className={`px-2 py-0.5 bg-blue-100 ${activeTab2 === "All" ? "text-blue-500" : "text-gray-500"} rounded-full text-xs`}>{allTask.length}</span>
                    </div>

                    {/* <!-- Séparateur --> */}
                    <span className="text-gray-300">|</span>

                    {/* <!-- Onglet Open --> */}
                    <div className="flex items-center space-x-1">
                        <button onClick={() => changetab("Open")} className={`${activeTab2 === "Open" ? "text-blue-500" : "text-gray-500 hover:text-gray-800"}`}>Open</button>
                        <span className={`px-2 py-0.5 bg-gray-200 ${activeTab2 === "Open" ? "text-blue-500" : "text-gray-500"}  rounded-full text-xs`}>{allTask.filter((item:any)=>item.status==="Open").length}</span>
                    </div>

                    {/* <!-- Onglet Closed --> */}
                    <div className="flex items-center space-x-1">
                        <button onClick={() => changetab("Close")} className={`${activeTab2 === "Close" ? "text-blue-500" : "text-gray-500 hover:text-gray-800"}`}>Closed</button>
                        <span className={`px-2 py-0.5 bg-gray-200 ${activeTab2 === "Closed" ? "text-blue-500" : "text-gray-500"} rounded-full text-xs`}>{allTask.filter((item:any)=>item.status==="Close").length}</span>
                    </div>

                    {/* <!-- Onglet Archived --> */}
                    <div className="flex items-center space-x-1">
                        <button onClick={() => changetab("Archive")} className={`${activeTab2 === "Archive" ? "text-blue-500" : "text-gray-500 hover:text-gray-800"}`}>Archived</button>
                        <span className={`px-2 py-0.5 bg-gray-200 ${activeTab2 === "Archived" ? "text-blue-500" : "text-gray-500"} rounded-full text-xs`}>{allTask.filter((item:any)=>item.status==="Archive").length}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskList
