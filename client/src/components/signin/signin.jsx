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

const Signin = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninData = () => {
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
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#f44336 red" });
        } else {
          console.log("user data:", data.user); // Access user data directly from 'data' object
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user._id); // Use 'userId' instead of 'token' to store user ID

          // localStorage.setItem("user", JSON.stringify(data.user));
          // localStorage.setItem("id", JSON.stringify(data.user._id));
          M.toast({
            html: "okey your succcesfully logged in",
            classes: "#4caf50 green",
          });
          history("/userupdate");
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
                sign In
              </Typography>
            </Box>

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
                onClick={(e) => SigninData(e.preventDefault())}
              >
                signin
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signin;
