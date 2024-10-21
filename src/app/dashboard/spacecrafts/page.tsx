"use client"
import React, { useState } from 'react';
import { useDataContext } from '../dataProvider';
import SearchData from '../components/SearchData';

const Page: React.FC = () => {
  const { data } = useDataContext(); 
  const [filteredData, setFilteredData] = useState(data || []); // State to hold filtered data

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Spacecrafts Data</h1>
        <SearchData data={data} setFilteredData={setFilteredData} />
      </div>

      <table className="min-w-full table-auto mt-4 bg-gray-800 shadow-lg rounded-lg">
        <thead>
          <tr className='bg-yellow-800 text-xl border-gray-300 border h-[10vh] px-4 py-2 text-center'>
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
  );
};

export default Page;
