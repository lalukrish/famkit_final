import React, { useState } from "react";
import M from "materialize-css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";

const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return M.toast({
        html: "invalid email or not completed",
        classes: "#f4511e deep-orange darken-1",
      });
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#ffd600 yellow accent-4 ",
          });
        } else {
          console.log("User details:", data.user); // log the user data to the console
          M.toast({
            html: data.message,
            classes: "#33691e light-green darken-4",
          });
          history("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box
        component=""
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 10 }}>
              <Typography color="textPrimary" variant="h4">
                sign up
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="full_name"
              margin="normal"
              name="full_name"
              type="text"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></TextField>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></TextField>

            <Box sx={{ py: 2 }}>
              {" "}
              <Button
                color="primary"
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                onClick={(e) => PostData(e.preventDefault())}
              >
                signup
              </Button>
            </Box>

            <p>
              already have an account ? <a href="/signin"> signin</a>
            </p>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
