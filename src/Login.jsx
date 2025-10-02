import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();

      // Save JWT to localStorage
      localStorage.setItem("token", data.token);

      alert("Logged in successfully! 🎉");

      // Redirect to home or tournaments page
      navigate("/tournaments");
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "white",
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ py: 6 }}>
            <Box textAlign="center" mb={4}>
              <EmojiEventsIcon sx={{ fontSize: 60, color: "#ff9800" }} />
              <Typography variant="h4" fontWeight="bold">
                Tournament Generator
              </Typography>
              <Typography variant="subtitle1" color="rgba(255,255,255,0.8)">
                Log in to manage tournaments
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mb: 3,
                  input: { color: "white" },
                  label: { color: "rgba(255,255,255,0.7)" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": { borderColor: "#ff9800" },
                    "&.Mui-focused fieldset": { borderColor: "#ff9800" },
                  },
                }}
                required
              />

              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  mb: 3,
                  input: { color: "white" },
                  label: { color: "rgba(255,255,255,0.7)" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": { borderColor: "#ff9800" },
                    "&.Mui-focused fieldset": { borderColor: "#ff9800" },
                  },
                }}
                required
              />

             

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": { backgroundColor: "#e68900" },
                  borderRadius: "30px",
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Log In
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
