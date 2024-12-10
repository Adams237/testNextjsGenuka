import React from 'react'

class Props {
    task: any;
    changeStatusTask: any;
    
}
function TaskCard({ task, changeStatusTask }: Props) {
    // console.log(task)
    const date = new Date()
    const dateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    const date2 = new Date(task.date)
    const date2String = `${date2.getFullYear()}/${date2.getMonth()}/${date2.getDate()}`
    console.log(dateString === date2String)
    return (

        <div className="w-11/12 mx-auto mt-10 bg-white shadow-md rounded-lg p-4">
            {/* <!-- Titre et Bouton de validation --> */}
            <div className="flex items-center justify-between">
                <div>
                    <div className={`text-lg font-semibold text-gray-900 ${task.status === "Close" && "line-through"}`}>
                        {task.titre}
                    </div>
                    <div className="text-sm text-gray-500">{task.projet}</div>
                </div>
                <div onClick={() => changeStatusTask(task.id)} className={`w-8 h-8 ${task.status === "Close" ? "bg-blue-500" : "bg-white"} cursor-pointer border-2 border-gray-300 rounded-full flex items-center justify-center`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {/* <!-- Ligne de séparation --> */}
            <hr className="my-3 border-gray-200" />

            {/* <!-- Informations supplémentaires --> */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    { dateString === date2String ? <div>Aujourd'hui</div>: <div>{task.date}</div>}
                    <div className="font-medium text-gray-800">{task.heureDebut} - {task.heureFin}</div>
                </div>
                <div className="flex -space-x-2">
                    {
                        task.membres.map((item: any, index: number) => {
                            return (
                                <img key={index}
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    src={item.image}
                                    alt={item.alt}
                                />
                            )
                        })
                    }

                  
                </div>
            </div>
        </div>

    )
}

export default TaskCard
