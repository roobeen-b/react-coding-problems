import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUsersData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  function handleChange(e) {
    const searchQuery = e.target.value.toLowerCase();
    setSearchParam(searchQuery);

    if (searchQuery.length > 0) {
      const filteredUsers =
        users && users.length > 0
          ? users.filter((item) => item.toLowerCase().indexOf(searchQuery) > -1)
          : [];

      setFilteredUsers(filteredUsers);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  function handleClick(e) {
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  if (error && error != "") return <div>Error occured! {error}</div>;
  if (loading) return <div>Loading! Please wait...</div>;

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Enter a name"
        onChange={handleChange}
        value={searchParam}
      />
      {showSuggestions && (
        <Suggestions filteredUsers={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
