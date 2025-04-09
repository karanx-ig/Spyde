import React from "react";
import vitelogo from './assets/spidey.png';

const ProfileCard = ({profileLst}) => {
  console.log(profileLst,"sdfhesy")
  return (
    <div 
    style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh", 
      margin: 0,
    }}
  >
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        border: "2px solid blue",
        borderRadius: "10px",
        width: "250px", 
        backgroundColor: "aquamarine",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      
        <img
          style={{
            backgroundColor: "black",
            border: "2px solid blue",
            borderRadius: "50%",
            margin: "10px",
            padding: "10px",
            width: "100px",
            height: "100px",
          }}
          src={vitelogo}
        />
        <h3>Name: {profileLst.name}</h3>
        <h4>Department: {profileLst.Department}</h4>
        <h4>Year: {profileLst.year}</h4>
        <h4>Mobile: {profileLst.mobile}</h4>
        <h4>Address: {profileLst.address}</h4>
        <a href="https://www.linkedin.com" target="_blank">
        <h4><i>Linkedln Profile</i></h4>
      </a>
      </div>
    </div>
  );
};

export default ProfileCard;
