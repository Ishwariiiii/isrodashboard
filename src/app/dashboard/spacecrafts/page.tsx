"use client"

import React, { useState } from 'react'
import { useDataContext } from '../dataProvider';
// interface Spacecraft {
//   id: string;
//   name: string;
// }

const page: React.FC = () => {
  const {data} = useDataContext()
  console.log(data, "spacecraft data")
  return (
    <div className="w-full">
      {
        data?.map((item:{name: string})=>{
          return <li>{item.name}</li>
        })
      }
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        {/* <div>
          <table className="table  border shadow-md rounded-lg w-[100%]">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Name</th>
              </tr>
            </thead>
            <tbody>
              {spaceData.map((item, index) => (
                <tr key={index} className="hover:bg-orange-600">
                  <td className="px-4 py-2 border-b">{item.id}</td>
                  <td className="px-4 py-2 border-b">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      {/* )} */}
    </div>


  )
}

export default page



