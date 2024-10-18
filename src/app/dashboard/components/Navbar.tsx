import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between">
                <button
                    className=" text-blue-500 rounded-md lg:hidden"
                >
                </button>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <div>
                    <button className=" rounded-md text-white">Logout</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

