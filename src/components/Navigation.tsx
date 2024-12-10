import React from 'react'
class Props{
    handleTabClick:any;
    activeTab!:string;
}
export default function Navigation({handleTabClick,activeTab }:Props) {
    return (
        <div className="flex items-center justify-between border-b bg-white border-gray-200">
            {/* <!-- Onglet Messages --> */}
            <button onClick={() => handleTabClick("Messages")} className={`flex-1 py-2 text-center ${activeTab === "Messages"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-500 hover:text-gray-800"
                }`}>Messages</button>

            {/* <!-- Onglet Today's Task (actif) --> */}
            <button onClick={() => handleTabClick("Today's Task")} className={`flex-1 py-2 text-center ${activeTab === "Today's Task"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-500 hover:text-gray-800"
                }`}>Today's Task</button>

            {/* <!-- Onglet Last Activity --> */}
            <button onClick={() => handleTabClick("Last Activity")} className={`flex-1 py-2 text-center ${activeTab === "Last Activity"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-500 hover:text-gray-800"
                }`}>Last Activity</button>
        </div>
    )
}
