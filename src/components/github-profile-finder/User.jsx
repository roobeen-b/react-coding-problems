import React from "react";

const User = ({ userData }) => {
  const createdDate = new Date(userData.created_at);
  return (
    <div className="user-card">
      <div className="avatar-img">
        <img src={userData.avatar_url} alt="User Avatar" srcset="" />
      </div>
      <h2>{userData.name || userData.login}</h2>
      <div className="avatar-follow">
        <h3>Followers: {userData.followers}</h3>
        <h3>Following: {userData.following}</h3>
      </div>
      <div className="avatar-repos">
        <h4>Public Repos: {userData.public_repos}</h4>
        <h4>Private Repos: {userData.private_repos}</h4>
      </div>

      <h5>
        User joined on:{" "}
        {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
          month: "short",
        })} ${createdDate.getFullYear()}`}
      </h5>
    </div>
  );
};

export default User;
