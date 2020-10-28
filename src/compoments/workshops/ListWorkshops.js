import React, { useEffect, useState } from "react";
import Workshop from "./Workshop";

const ListWorkshop = () => {
  const [workshops, setWorkshop] = useState([]);

  useEffect(() => {
    const action = async () => {
      const workshops = await getWorkshops();
      setWorkshop(workshops);

    }
    action();
    
  }, [])

  return (
    <div style={{display: "flex",flexDirection: "column", alignItems:"center", gap:20,}}>
      {workshops.map((workshop) => (
           < Workshop 
           key = {
             `workshop-${workshop._id}`
           }
           name = {
             workshop.name
           }
           motto = {
             workshop.motto
           }
           description = {
             workshop.description
           }
           avatarURL = {
             workshop.avatarURL
           }
           imageURL = {
             workshop.imageURL
           }
           locationURL = {
             workshop.locationURL
           }
           
           />
        ))}
    </div>
  )
}

export default ListWorkshop;

const getWorkshops = async () => {
  const api = "http://localhost:5000/api/v1/workshops";

  const workshops = await fetch(api).then(response => response.json());

  console.log("works", workshops);
  return workshops;
}