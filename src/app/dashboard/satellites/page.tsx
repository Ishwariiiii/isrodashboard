"use client";
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../dataProvider'

interface satellitesData {
  id: number
  country: string
  launch_date: number
  mass: number
  launcher: string
}

const Page: React.FC = () => {
  const { data, loading } = useDataContext()
  const [searchData, setSearchData] = useState('')
  const [filteredData, setFilteredData] = useState([])
  // console.log(data,"satellites data")

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }



  useEffect(() => {
    if (searchData) {
      setFilteredData(data?.filter((item: { country: string }) =>
        item.country.toLowerCase().includes(searchData.toLowerCase())
      )
      )
    } else {
      setFilteredData(data)
    }
  }, [searchData, data, filteredData])

  const showMoreData=()=>{

  }


  if (loading) { return <p className='text-white'>Loading...</p> }

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <h1>Satellites data</h1>
      <input
        type="text"
        placeholder="Search here..."
        value={searchData}
        onChange={handleSearchData}
        className="mb-4 p-2 rounded border border-gray-300 w-full max-w-[400px] h-[40px] text-black" />

<div className="flex flex-wrap justify-around">
  {filteredData?.map((item: satellitesData) => (
    <div className="card flex flex-col w-1/4 m-4">
      <hr className="line" />
      <ul className="card__list flex flex-col">
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">{item.id}</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">{item.country}</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="list_text">{item.launch_date}</span>
        </li>
      </ul>
      <button className="button" onClick={showMoreData}>Show More</button>
    </div>
  ))}
</div>

    </div>
  )
}

export default Page
