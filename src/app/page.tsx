"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router=useRouter()
  return (
    <div className='bg-blue-900 h-[100vh] w-[100vw] flex items-center justify-center'>
      <button className="text-3xl font-bold underline text-white" onClick={()=>router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  )
}

export default Page
