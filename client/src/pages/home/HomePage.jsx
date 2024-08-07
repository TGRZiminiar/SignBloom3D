import { useState, useEffect } from "react";
import Navbaruser from '../../components/Navbaruser';
import SearchBar from '../../components/Searchbar';

export const HomePage = () => {
  const [message, setMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]); // hold search results
  const [selectedSearch, setSelectedSearch] = useState(null); // hold the selected item
  const [query, setQuery] = useState(''); // hold the search query

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await api.get("/search"); // Replace with your API endpoint
        if (response.data.vocabularySuggestions.length() !== 0){
          setSearchResults(response.vocabularySuggestions);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchSearchResults();
  }, []);

  // Filter the search results based on the query
  const filteredSearchResults =
  query === ''
    ? searchResults
    : searchResults.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbaruser/>
      <div className="flex-grow flex items-center justify-center">
        <SearchBar />
      </div>
    </div>
  )
};