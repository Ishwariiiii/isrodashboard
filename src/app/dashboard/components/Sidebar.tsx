import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <ul className="space-y-2">
                <li className="px-4 py-2 hover:bg-gray-700">Spacecrafts</li>
                <li className="px-4 py-2 hover:bg-gray-700">Launchers</li>
                <li className="px-4 py-2 hover:bg-gray-700">Satellites</li>
                <li className="px-4 py-2 hover:bg-gray-700">Centres</li>
            </ul>
        </div>
    )
}

export default Sidebar