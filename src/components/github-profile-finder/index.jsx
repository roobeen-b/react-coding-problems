import React, { useEffect, useState } from "react";
import User from "./User";
import "./github.css";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("roobeen-b");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setUserName("");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  function handleSubmit() {
    fetchUserData();
  }

  if (loading) return <div>Loading!!! Please wait...</div>;

  return (
    <div className="container">
      <div>Enter your Github username: </div>
      <input
        type="text"
        placeholder="Your Github username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={handleSubmit}>Submit</button>

      {userData != null && <User userData={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
