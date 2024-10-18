import React, { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

interface DashboardChildren {
    children: ReactNode
}

const layout: React.FC<DashboardChildren> = ({ children }) => {
    return (
        <div className=" h-[100vh] w-[100wh] bg-gray-400">
            <div className="h-[10%] bg-blue-950">
                <Navbar />
            </div>
            <div className="flex h-[90%] ">
                <div className="w-[20%] bg-blue-800 text-white">
                    <Sidebar />
                </div>
                <div className="w-[80%] bg-gray-800 text-white" >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout

