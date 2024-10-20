"use client";

import { useRouter } from 'next/navigation'
import React from 'react'
import { useDataContext } from '../dataProvider'

const Sidebar = () => {
    const router = useRouter()
    const { centers, launchers, satellites, spacecraft } = useDataContext()

    const spacecraftData = () => {
        router.push("/dashboard/spacecrafts")
        spacecraft()

    }
    const launchersData = () => {
        router.push("/dashboard/launchers")
        launchers()
    }
    const satellitesData = () => {
        router.push("/dashboard/satellites")
        satellites()
    }
    const centerData = () => {
        router.push("/dashboard/centers")
        centers()
    }

    return (
        <div className="h-[100%] flex items-center justify-center">
            <div>
                <ul className="flex flex-col justify-center items-center space-y-2">
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={spacecraftData}
                    >
                        Spacecrafts
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={satellitesData}
                    >
                        Satellites
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={launchersData}

                    >
                        Launchers
                    </button>

                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={centerData}
                    >
                        Centers
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
