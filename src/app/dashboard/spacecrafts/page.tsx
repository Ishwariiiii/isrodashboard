"use client"
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../dataProvider'

const Page: React.FC = () => {
  const { data } = useDataContext()
  const [searchData, setSearchData] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // console.log(data, "spacecraft data")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }
  useEffect(() => {
    if (searchData) {
      setFilteredData(data?.filter((item: { name: string }) =>
        item.name.toLowerCase().includes(searchData.toLowerCase())
      ))
    }
    else {
      setFilteredData(data)
    }
  }, [searchData, data, filteredData])

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <h1>Spacecrafts data</h1>
      <input
        type="text"
        placeholder="Search here....."
        value={searchData}
        onChange={handleSearch}
        className="mb-4 p-2 rounded border border-gray-300 w-full max-w-[400px] h-[40px] text-black"
      />

      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr className='bg-yellow-800 text-xl border-gray-300 border h-[10vh]  px-4 py-2 text-center'>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item: { id: string, name: string }) => (
            <tr key={item.id} className='h-[10vh] border-gray-300 border px-4 py-2 text-center'>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Page