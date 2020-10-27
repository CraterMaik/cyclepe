import React from "react";
import Workshop from "./Workshop";

const ListWorkshop = () => {
  return (
    <div style={{display: "flex",flexDirection: "column", alignItems:"center", gap:20,}}>
      <Workshop />
      <Workshop />
      <Workshop />
    </div>
  )
}

export default ListWorkshop;