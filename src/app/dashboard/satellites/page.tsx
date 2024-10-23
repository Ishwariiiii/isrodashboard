"use client"
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../dataProvider'

interface SatelliteData {
  id: number;
  country: string;
  launch_date: number;
  mass: number;
  launcher: string;
}

const Page: React.FC = () => {
  const { data, loading } = useDataContext()
  const [searchData, setSearchData] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  useEffect(() => {
    if (searchData) {
      const filtered = data.filter((item: SatelliteData) =>
        item.country.toLowerCase().includes(searchData.toLowerCase()) ||
        item.launcher.toLowerCase().includes(searchData.toLowerCase()) ||
        item.mass.toString().includes(searchData.toLowerCase()) ||
        item.id.toString().includes(searchData.toLowerCase()) ||
        item.launch_date.toString().includes(searchData.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [searchData, data])

  const showMoreData = (id: number) => {
    setExpandedIds(expandedIds.includes(id) ? expandedIds.filter((ids) => ids !== id) : [...expandedIds, id]);
  }

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Satellites Data</h1>
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Search satellites..."
          className="p-2 rounded bg-gray-700  focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
        />
      </div>

      <div className="flex flex-wrap justify-around">
        {filteredData?.map((item: SatelliteData) => (
          <div key={item.id} className="card flex flex-col w-1/4 m-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <hr className="line" />
            <ul className="card__list flex flex-col">
              <li className="card__list_item">
                <span className="list_text">ID : {item.id}</span>
              </li>
              <li className="card__list_item">
                <span className="list_text">Country : {item.country}</span>
              </li>
              <li className="card__list_item">
                <span className="list_text">Launch Date : {item.launch_date}</span>
              </li>
              {expandedIds.includes(item.id) ? (
                <>
                  <li className="card__list_item">
                    <span className="list_text">Mass : {item.mass}</span>
                  </li>
                  <li className="card__list_item">
                    <span className="list_text">Launcher : {item.launcher}</span>
                  </li>
                </>
              ) : null}
            </ul>
            <button
              className="button mt-2 bg-yellow-500 text-black rounded px-4 py-2"
              onClick={() => showMoreData(item.id)}
            >
              {expandedIds.includes(item.id) ? 'Show less' : 'Show more'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Page