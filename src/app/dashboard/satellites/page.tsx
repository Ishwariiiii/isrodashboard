"use client"

import React from 'react'
import { useDataContext } from '../dataProvider';
interface satellitesData{
  id:number;
 country:string;
 launch_date:number;
 mass:number;
 launcher:string
}

const page: React.FC = () => {
  const {data} = useDataContext()
  console.log(data, "satellites data")
  return (
    <div className="w-full p-4 flex justify-center text-white">
    <table className="min-w-full table-auto ">
      <thead>
        <tr className='bg-yellow-800 text-xl'>
          <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">ID</th>
          <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">Country</th>
          <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">Launch_Data</th>
          <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">Mass</th>
          <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">Launcher</th>

        </tr>
      </thead>
      <tbody >
        {data?.map((item: satellitesData) => (
          <tr key={item.id} className='h-[10vh]'>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.country}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.launch_date}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.mass}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{item.launcher}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  )
}

export default page



