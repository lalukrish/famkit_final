import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Button } from "@material-ui/core";
import pic from "/home/lalkrishna/personalProjects/project/famkkt/client/src/Map/Maps/placeholder.png";
import ListItem from "@mui/material/ListItem";

const ListPlace = (props) => {
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
  };

  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <List aria-label="main mailbox folders">
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={pic}
                      alt="Placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default ListPlace;
