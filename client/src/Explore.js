import React ,{useState}from "react";
import HeaderM from "./Map/HeaderM/HeaderM";
import List from "./Map/List/List";
import { CssBaseline, Grid } from "@mui/material";
import Maps from "./Map/Maps/Maps";
import ListPlace from "./Map/List/List";
const Explore = () => {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "50vw", height: "100%" }}>
        <Maps selectPosition={selectPosition} />
      </div>
      <div style={{ width: "50vw" }}>
        <ListPlace selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
  );
};

export default Explore;