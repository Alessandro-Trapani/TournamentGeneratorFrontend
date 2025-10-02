import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

export default function Home() {
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
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Tournament Generator
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.8)" gutterBottom>
            Organize, manage, and track your tournaments with ease 🎮🏆
          </Typography>
          <Button

            variant="contained"
            component={Link}
            to="/tournaments/create" 
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#ff9800",
              "&:hover": { backgroundColor: "#e68900" },
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Create Tournament
          </Button>
        </Box>

        {/* Features */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white" }}>
              <CardContent sx={{ textAlign: "center", py: 5 }}>
                <SportsEsportsIcon sx={{ fontSize: 50, mb: 2, color: "#ff9800" }} />
                <Typography variant="h5" fontWeight="bold">
                  Custom Matches
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Create personalized brackets and game modes for your tournaments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white" }}>
              <CardContent sx={{ textAlign: "center", py: 5 }}>
                <GroupIcon sx={{ fontSize: 50, mb: 2, color: "#4caf50" }} />
                <Typography variant="h5" fontWeight="bold">
                  Team Management
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Easily add players, manage teams, and assign matches.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white" }}>
              <CardContent sx={{ textAlign: "center", py: 5 }}>
                <EmojiEventsIcon sx={{ fontSize: 50, mb: 2, color: "#fdd835" }} />
                <Typography variant="h5" fontWeight="bold">
                  Track Progress
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Follow live brackets and see who will become the champion.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
