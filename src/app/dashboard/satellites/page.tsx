"use client";
import React, { useEffect, useState } from 'react';
import { useDataContext } from '../dataProvider';

interface satellitesData {
  id: number;
  country: string;
  launch_date: number;
  mass: number;
  launcher: string;
}

const Page: React.FC = () => {
  const { data, loading } = useDataContext();
  const [searchData, setSearchData] = useState('');
  const [filteredData, setFilteredData] = useState<satellitesData[]>([]);
  const [expandedIds, setExpandedIds] = useState<number[]>([]); 

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const toggleExpand = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id)); // Collapse
    } else {
      setExpandedIds([...expandedIds, id]); // Expand
    }
  };

  useEffect(() => {
    if (searchData) {
      setFilteredData(
        data?.filter((item: satellitesData) =>
          item.country.toLowerCase().includes(searchData.toLowerCase())
        ) || []
      );
    } else {
      setFilteredData(data || []);
    }
  }, [searchData, data]);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="w-full p-4 flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full max-w-[800px] mb-4">
        <h1 className="text-4xl font-bold text-yellow-500">Satellites Data</h1>
        <input
          type="text"
          placeholder="Search here..."
          value={searchData}
          onChange={handleSearchData}
          className="p-2 rounded border border-gray-300 h-[40px] text-black w-full max-w-[300px] ml-4"
        />
      </div>

      <div className="flex flex-wrap justify-around">
        {filteredData?.map((item: satellitesData) => (
          <div key={item.id} className="card flex flex-col w-1/4 m-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <hr className="line" />
            <ul className="card__list flex flex-col">
              <li className="card__list_item">
                <span className="list_text">ID: {item.id}</span>
              </li>
              <li className="card__list_item">
                <span className="list_text">Country: {item.country}</span>
              </li>
              <li className="card__list_item">
                <span className="list_text">Launch Date: {item.launch_date}</span>
              </li>
            </ul>
            
            {expandedIds.includes(item.id) && (
              <ul className="card__extra_list mt-2">
                <li className="card__list_item">
                  <span className="list_text">Mass: {item.mass} kg</span>
                </li>
                <li className="card__list_item">
                  <span className="list_text">Launcher: {item.launcher}</span>
                </li>
              </ul>
            )}
            
            <button
              className="button mt-2 bg-yellow-500 text-black rounded px-4 py-2"
              onClick={() => toggleExpand(item.id)}
            >
              {expandedIds.includes(item.id) ? 'Show Less' : 'Show More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
