import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import M from "materialize-css";

const UpdateUserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/users/update`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        name: name,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({
          html: "okey your profile succcesfully updated",
          classes: "#4caf50 green",
        });
        // handle success case
      })
      .catch((error) => {
        console.error(error);
        M.toast({
          html: "some error occured...",
          classes: "#red",
        });
        // handle error case
      });

    fetch(`/users/simpledata`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        phone: phone,
        address: address,
        pincode: pincode,
      }),
    }) // add closing parenthesis here
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({
          html: "Your profile has been successfully updated",
          classes: "#4caf50 green",
        });
        // handle success case
      })
      .catch((error) => {
        console.error(error);
        M.toast({
          html: "Some error occurred...",
          classes: "#red",
        });
        // handle
      });
  };
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mt: 5,
          }}
        >
          <Typography variant="h4">Update Profile</Typography>
          {message && ( // render the message if it exists
            <Box sx={{ mt: 2 }}>
              <Typography color="textPrimary">{message}</Typography>
            </Box>
          )}
          <Box sx={{ mt: 5 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />{" "}
              <TextField
                label="Address"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
              />{" "}
              <TextField
                label="Pincode"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Update
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UpdateUserProfile;
