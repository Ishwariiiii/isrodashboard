"use client";
import React, { useState, useEffect } from "react";
import { useDataContext } from "../dataProvider";

interface SpacecraftData {
  id: number;
  name: string;
}

const Page: React.FC = () => {
  const { data } = useDataContext();
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState<SpacecraftData[]>([]);

  useEffect(() => {
    if (searchData) {
      setFilteredData(
        data?.filter((item: SpacecraftData) =>
          item.name.toLowerCase().includes(searchData.toLowerCase()) ||
          item.id.toString().includes(searchData)
        )
      )
    } else {
      setFilteredData(data);
    }
  }, [searchData, data]);

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Spacecrafts Data</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 text-black"
        />
      </div>

      <table className="min-w-full table-auto mt-4 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-yellow-800 text-xl border-gray-300 border h-[10vh] px-4 py-2 text-center">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item: SpacecraftData) => (
            <tr key={item.id} className="h-[10vh] border-gray-300 border px-4 py-2 text-center">
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