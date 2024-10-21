"use client";
import { useEffect, useState } from "react";

interface SearchDataProps {
  data:{ name: string }[];
  setFilteredData: (filteredData: { name: string }[]) => void; 
}

const SearchData: React.FC<SearchDataProps> = ({ data, setFilteredData }) => {
  const [searchData, setSearchData] = useState<string>(''); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (searchData) {
      setFilteredData(
        data?.filter((item) =>
          item.name.toLowerCase().includes(searchData.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [searchData, data, setFilteredData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here....."
        value={searchData}
        onChange={handleSearch}
        className="mb-4 p-2 rounded border border-gray-300 w-full max-w-[400px] h-[40px] text-black"
      />
    </div>
  );
};

export default SearchData;
