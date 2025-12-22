import { TextField, Button } from "@mui/material";

function Lobby({ styles, username, setUsername, connect, localVideoref }) {
  return (
    <div className={styles.lobbyContainer}>
      <h2 style={{ color: "white" }}>Enter InTo Lobby</h2>

      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
      />

      <Button
        variant="contained"
        onClick={connect}
        sx={{
          mt: 2,
          backgroundColor: "#3300ffff",
          "&:hover": { backgroundColor: "#115293" },
        }}
      >
        Submit
      </Button>

      <video
        ref={localVideoref}
        autoPlay
        muted
        className="my-5"
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
}

export default Lobby;
