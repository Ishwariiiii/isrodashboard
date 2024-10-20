"use client"

import React from 'react'
import { useDataContext } from '../dataProvider';
interface launchersData {
  id: number
}

const page: React.FC = () => {
  const { data } = useDataContext()
  // console.log(data, "lunchers data")
  return (
    <div className="w-full p-4 flex justify-center text-white">
      <table className="min-w-full table-auto ">
        <thead>
          <tr className='bg-yellow-800 text-xl'>
            <th className="border border-gray-300 h-[10vh]  px-4 py-2 text-center">ID</th>

          </tr>
        </thead>
        <tbody >
          {data?.map((item: launchersData) => (
            <tr key={item.id} className='h-[10vh]'>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )
}

export default page


