import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

export default function TournamentCreation() {
  const [step, setStep] = useState(1);
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [teams, setTeams] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const payload = {
      game: selectedGame,
      type: selectedType,
      name: tournamentName,
      description,
      teams,
    };

    // API call placeholder
    fetch("/api/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Tournament Created:", data);
        alert("Tournament Created! 🎉");
        // optionally reset form
      })
      .catch((err) => console.error(err));
  };

  const OptionCard = ({ label, icon, selected, onClick }) => (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        bgcolor: selected ? "rgba(255,152,0,0.3)" : "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        color: "white",
        border: selected ? "2px solid #ff9800" : "2px solid transparent",
        "&:hover": { border: "2px solid #ff9800" },
        minHeight: 400,
        minWidth: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ textAlign: "center", py: 6 }}>
  {React.cloneElement(icon, { sx: { fontSize: 90, mb: 3 } })} 
  <Typography variant="h4" fontWeight="bold" mt={2} sx={{ fontSize: '1.8rem' }}>
    {label}
  </Typography>
</CardContent>

    </Card>
  );

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
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Create Tournament
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.8)">
            Step {step} of 3
          </Typography>
        </Box>

        {/* Step 1: Select Game */}
        {step === 1 && (
          <Grid container spacing={3} justifyContent="center">
            <Grid item xl={12} md={4}>
              <OptionCard
                label="Valorant"
                icon={<SportsEsportsIcon sx={{ fontSize: 50, color: "#ff9800" }} />}
                selected={selectedGame === "Valorant"}
                onClick={() => setSelectedGame("Valorant")}
              />
            </Grid>
            <Grid item xl={12} md={4}>
              <OptionCard
                label="League of Legends"
                icon={<GroupsIcon sx={{ fontSize: 50, color: "#4caf50" }} />}
                selected={selectedGame === "League of Legends"}
                onClick={() => setSelectedGame("League of Legends")}
              />
            </Grid>
            <Grid item x={12} md={4}>
              <OptionCard
                label="CS:GO"
                icon={<EmojiEventsIcon sx={{ fontSize: 50, color: "#fdd835" }} />}
                selected={selectedGame === "CS:GO"}
                onClick={() => setSelectedGame("CS:GO")}
              />
            </Grid>
          </Grid>
        )}

        {/* Step 2: Tournament Type */}
        {step === 2 && (
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <OptionCard
                label="Direct Elimination"
                icon={<EmojiEventsIcon sx={{ fontSize: 50, color: "#ff9800" }} />}
                selected={selectedType === "Direct Elimination"}
                onClick={() => setSelectedType("Direct Elimination")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OptionCard
                label="Round Robin"
                icon={<GroupsIcon sx={{ fontSize: 50, color: "#4caf50" }} />}
                selected={selectedType === "Round Robin"}
                onClick={() => setSelectedType("Round Robin")}
              />
            </Grid>
            
          </Grid>
          
        )}

        {/* Step 3: Tournament Details */}
        {step === 3 && (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Tournament Name"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
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

           

            {/* Number of Teams Select */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel sx={{ color: "rgba(255,255,255,0.7)" }}>
                Number of Teams/Players
              </InputLabel>
              <Select
                value={teams}
                onChange={(e) => setTeams(e.target.value)}
                label="Number of Teams/Players"
                required
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.3)" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#ff9800" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ff9800" },
                }}
              >
                {[4, 8, 10, 12, 14, 16].map((n) => (
                  <MenuItem key={n} value={n}>
                    {n}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box mt={4} textAlign="center">
              <Button
                onClick={handleBack}
                sx={{
                  mr: 2,
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "20px",
                  px: 3,
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": { backgroundColor: "#e68900" },
                  borderRadius: "30px",
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Create Tournament
              </Button>
            </Box>
          </Box>
        )}

        {/* Navigation Buttons */}
        {step < 3 && (
         <Box mt={4} textAlign="center">
  {step > 1 && (
    <Button
      onClick={handleBack}
      sx={{
        mr: 2,
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "20px",
        px: 3,
      }}
    >
      Back
    </Button>
  )}

  {step < 3 && (
    <Button
      onClick={handleNext}
      disabled={(step === 1 && !selectedGame) || (step === 2 && !selectedType)}
      variant="contained"
      sx={{
        backgroundColor: "#ff9800",
        "&:hover": { backgroundColor: "#e68900" },
        borderRadius: "20px",
        px: 4,
        fontWeight: "bold",
      }}
    >
      Next
    </Button>
  )}

  {step === 3 && (
    <Button
      type="submit" // inside the form
      variant="contained"
      sx={{
        backgroundColor: "#ff9800",
        "&:hover": { backgroundColor: "#e68900" },
        borderRadius: "30px",
        px: 5,
        py: 1.5,
        fontWeight: "bold",
        fontSize: "1.1rem",
      }}
    >
      Create Tournament
    </Button>
  )}
</Box>
        )}
      </Container>
    </Box>
  );
}
