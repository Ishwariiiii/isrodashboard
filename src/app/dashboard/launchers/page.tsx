"use client"
import React, { useState } from 'react';
import { useDataContext } from '../dataProvider';

const Page: React.FC = () => {
  const { data } = useDataContext();
  const [searchData, setSearchData] = useState('');
  
  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const filteredData = searchData 
    ? data?.filter((item: { id: number }) => 
        item.id.toString().includes(searchData)
      ) 
    : data;

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Launchers Data</h1>
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchData}
          onChange={handleSearchData}
          className="p-2 rounded border border-gray-300 h-[40px] text-black w-full max-w-[300px] ml-4"
        />
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr className='bg-yellow-800 text-xl'>
            <th className="border border-gray-300 h-[10vh] px-4 py-2 text-center">ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item: { id: number }) => (
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
