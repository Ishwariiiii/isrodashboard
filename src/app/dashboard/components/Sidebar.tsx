"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { useDataContext } from '../dataProvider';

const Sidebar = () => {
    const router = useRouter();
    const { centers, launchers, satellites, spacecraft } = useDataContext()

    const handleData = () => {
        router.push("/dashboard/spacecrafts");
        spacecraft()

    };

    return (
        <div className="h-[100%] flex items-center justify-center">
            <div>
                <ul className="flex flex-col justify-center items-center space-y-2">
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={handleData}
                    >
                        Spacecrafts
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"
                        onClick={() => {
                            router.push("/dashboard/launchers")
                            // debugger
                            // launchers()
                        }
                        }
                    >
                        Launchers
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"

                    >
                        Satellites
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-orange-600 text-white"

                    >
                        Centers
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
