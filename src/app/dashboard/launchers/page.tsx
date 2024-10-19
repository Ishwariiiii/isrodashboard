"use client"

import React, { useEffect } from 'react'
import { useDataContext } from "../dataProvider"

const page = () => {

  const { data,launchers } = useDataContext()

  useEffect(()=>{
    launchers()
    console.log(data)
  },[])
 
  console.log(data, "spacecraft data")
  return (
    <div>launchers</div>
  )
}

export default page