import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Tournament() {
  const [expanded, setExpanded] = useState({}); // track expanded cards

  const tournaments = [
    {
      id: 1,
      name: "Summer Valorant Cup",
      game: "Valorant",
      type: "Direct Elimination",
      participants: ["Alice", "Bob", "Charlie", "David"],
    },
    {
      id: 2,
      name: "League Showdown",
      game: "League of Legends",
      type: "Round Robin",
      participants: ["Eve", "Frank"],
    },
  ];

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleJoin = (id) => {
    alert(`Joined tournament with ID: ${id}`);
  };

  const TournamentCard = ({ tournament }) => (
    <Card
      sx={{
        bgcolor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        color: "white",
        mb: 4,
        pt: 2,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Grid container alignItems="center" spacing={6}>
          <Grid item>
            {tournament.game === "Valorant" && (
              <SportsEsportsIcon sx={{ fontSize: 70, color: "#ff9800" }} />
            )}
            {tournament.game === "League of Legends" && (
              <GroupsIcon sx={{ fontSize: 70, color: "#4caf50" }} />
            )}
            {tournament.game === "CS:GO" && (
              <EmojiEventsIcon sx={{ fontSize: 70, color: "#fdd835" }} />
            )}
          </Grid>

          <Grid item xs>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {tournament.name}
            </Typography>
            <Typography variant="subtitle1" color="rgba(255,255,255,0.7)">
              {tournament.type} | {tournament.game}
            </Typography>
          </Grid>

          <Grid ml={25} item>
            <Box display="flex" alignItems="center" gap={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": { backgroundColor: "#e68900" },
                  borderRadius: 3,
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
                onClick={() => handleJoin(tournament.id)}
              >
                Join
              </Button>
              <IconButton
                sx={{ color: "white" }}
                onClick={() => handleExpandClick(tournament.id)}
              >
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Collapse in={expanded[tournament.id]} timeout="auto" unmountOnExit>
          <Box mt={3}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Participants:
            </Typography>
            {tournament.participants && tournament.participants.length > 0 ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {tournament.participants.map((p) => (
                  <Chip
                    key={p}
                    label={p}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                    }}
                  />
                ))}
              </Box>
            ) : (
              <Typography variant="body2" color="rgba(255,255,255,0.7)">
                No participants yet
              </Typography>
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "white",
        pt: 6, // padding top to pin to top
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" pt={4} gutterBottom>
            Tournaments
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.8)">
            Join a tournament or see details below
          </Typography>
        </Box>

        {tournaments.map((t) => (
          <TournamentCard key={t.id} tournament={t} />
        ))}
      </Container>
    </Box>
  );
}
