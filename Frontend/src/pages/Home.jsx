import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import "../style/Home.css"
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { AuthContext } from '../contexts/AuthContext';


function Home() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
      const code = meetingCode || "abcd";
      if (!meetingCode) {
        setMeetingCode(code);
      }
      await addToUserHistory(code);
      navigate(`/${code}`);
};

  return (
    <>
      {/* NAVBAR */}
      <div className="navBar">
        <Typography variant="h6" fontWeight={700}>
           <VideoCameraBackIcon style={{color:"blue",fontSize:"35px"}}/> VideoConnect
        </Typography>

        <div className="navActions">
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon/><Typography variant="body2">History</Typography>
          </IconButton>
          

          <Button
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="meetContainer">
        {/* LEFT */}
        <div className="leftPanel">
          <Paper elevation={8} className="joinCard">
            <VideoCallIcon sx={{ fontSize: 48, color: "#4f46e5" }} />

            <Typography variant="h5" fontWeight={700} mt={2}>
              Join a Video Meeting
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Enter a meeting code to start or join instantly
            </Typography>

            <div className="joinActions">
              <TextField
                fullWidth
                label="Meeting Code"
                variant="outlined"
                value={meetingCode}
                onChange={e => setMeetingCode(e.target.value)}
              />
              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={handleJoinVideoCall}
                sx={{ mt: 2 }}
              >
                Join Meeting
              </Button>
            </div>
          </Paper>
        </div>

        {/* RIGHT */}
        <div className="rightPanel instructions">
            <h2>How to Join</h2>

            <ol>
                <li>Enter the meeting code shared by the host</li>
                <li>Click <strong>Join Meeting</strong></li>
                <li>Allow camera & microphone permissions</li>
                <li>Wait for the connection</li>
                <li>Start your video call 🎉</li>
            </ol>

            <p className="note">
                If no code is entered then will be treated as guest.
            </p>
        </div>
      </div>
    </>
  );
}

export default withAuth(Home);
