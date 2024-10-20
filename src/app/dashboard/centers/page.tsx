"use client"

import React from 'react'
import { useDataContext } from '../dataProvider';
interface satellitesData{
  id:number;
 name:string;
}

const page: React.FC = () => {
  const {data} = useDataContext()
  console.log(data, "center  data")
  return (
    <div className="w-full">
      {
        data?.map((item:satellitesData)=>{
          return <ul>
            <li>{item.id}</li>
            <li>{item.name}</li>
       
            </ul>

        })
      }

    </div>


  )
}

export default page



