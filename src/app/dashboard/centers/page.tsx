"use client"
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../dataProvider';

interface CentersData {
  id: number
  name: string
  Place: string
  State: string
}

const Page: React.FC = () => {
  const { data, loading } = useDataContext()
  const [searchData, setSearchData] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }

  useEffect(() => {
    if (searchData) {
      setFilteredData(
        data?.filter((item: CentersData) =>
          item.Place.toLowerCase().includes(searchData.toLowerCase()) ||
          item.name.toLowerCase().includes(searchData.toLowerCase()) ||
          item.State.toLowerCase().includes(searchData.toLowerCase())||
          item.id.toString().includes(searchData)
        )
      )
    } else {
      setFilteredData(data)
    }
  }, [searchData, data])

  if (loading) {
    return <p className="text-white">Loading...</p>
  }

  return (
    <div className="w-full p-6 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-6">
        <h1 className="text-4xl font-bold text-yellow-500"> Centers Data</h1>
        <input
          type="text"
          placeholder="Search here..."
          value={searchData}
          onChange={handleSearchData}
          className="p-2 rounded border border-gray-300 h-[40px] text-black w-full max-w-[300px] ml-4"
        />
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto  shadow-lg rounded-lg">
          <thead>
            <tr className="bg-yellow-600 text-xl text-white border-gray-300 border">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Place</th>
              <th className="px-6 py-4">State</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item: CentersData) => (
              <tr key={item.id} className="text-center border-b border-gray-500 hover:bg-gray-600">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.Place}</td>
                <td className="px-6 py-4">{item.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page;