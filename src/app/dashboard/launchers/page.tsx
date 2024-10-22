"use client"
import React from 'react'
import { useDataContext } from '../dataProvider'

const Page: React.FC = () => {
  const { data } = useDataContext()
  
  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Launchers Data</h1>
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr className='bg-yellow-800 text-xl'>
            <th className="border border-gray-300 h-[10vh] px-4 py-2 text-center">ID</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: { id: number }) => (
            <tr key={item.id} className='h-[10vh]'>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Page;

