"use client"
import React from 'react'
import { useDataContext } from '../dataProvider';
interface CentersData {
  id: number
  name: string
  Place: string
  State: string
}

const page: React.FC = () => {
  const { data } = useDataContext()
  // console.log(data, "centres data")

  return (
    <div className="w-full p-4 flex justify-center text-white">
      <h1>Centers Data</h1>

      <table className="min-w-full table-auto ">
        <thead>
          <tr className='bg-yellow-800 text-xl border-gray-300 border h-[10vh] px-4 py-2 text-center '>
            <th>ID</th>
            <th>Name</th>
            <th>Place</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody >
          {data?.map((item: CentersData) => (
            <tr key={item.id} className='h-[10vh] border-gray-300 border px-4 py-2 text-center '>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.Place}</td>
              <td>{item.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default page