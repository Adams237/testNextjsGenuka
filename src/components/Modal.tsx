import React, { useState } from 'react'

class Props {
    closeModal: any;
    addTask:any
}
function Modal({addTask, closeModal }: Props) {
    const [task,setTask] = useState({})
    const handleChange=  (e:any)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        addTask(task)
        closeModal(false)
    }
    return (
        <div className="flex items-center justify-center h-screen">


            {/* Modal */}

            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h3 className="text-lg font-semibold">Ajouter une nouvelle Tâche</h3>
                        <button
                            onClick={() => closeModal(false)}
                            className="text-gray-500 hover:text-gray-800"
                        >
                            x
                        </button>
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={() => { }} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Titre de la tâche
                            </label>
                            <input
                                type="text"
                                onChange={(e)=>handleChange(e)}
                                name='titre'
                                className="mt-1 block w-full rounded-md px-2 bg-slate-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nom du projet
                            </label>
                            <input
                                type="text"
                                onChange={(e)=>handleChange(e)}
                                name='projet'
                                className="mt-1 block w-full rounded-md px-2 bg-slate-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                onChange={(e)=>handleChange(e)}
                                name='date'
                                className="mt-1 block w-full rounded-md px-2 bg-slate-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                             heure de debut
                            </label>
                            <input
                                type="text"
                                onChange={(e)=>handleChange(e)}
                                name='heureDebut'
                                className="mt-1 block w-full rounded-md px-2 bg-slate-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                             heure de fin
                            </label>
                            <input
                                type="text"
                                onChange={(e)=>handleChange(e)}
                                name='heureFin'
                                className="mt-1 block w-full rounded-md px-2 bg-slate-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Boutons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => closeModal(false)}
                                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                onClick={(e)=>handleSubmit(e)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Modal
