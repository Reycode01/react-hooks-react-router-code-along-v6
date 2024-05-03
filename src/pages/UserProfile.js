// UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return <h1>User Profile for ID: {id}</h1>;
};

export default UserProfile;
