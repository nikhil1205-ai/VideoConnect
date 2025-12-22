import {
  IconButton,
  Badge
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import ChatIcon from "@mui/icons-material/Chat";

function Controls({
  styles,
  video,
  audio,
  screen,
  screenAvailable,
  newMessages,
  handleVideo,
  handleAudio,
  handleScreen,
  handleEndCall,
  toggleChat,
}) {
  return (
    <div className={styles.buttonContainers}>
      <IconButton onClick={handleVideo} style={{ color: "white" }}>
        {video ? <VideocamIcon /> : <VideocamOffIcon />}
      </IconButton>

      <IconButton onClick={handleEndCall} style={{ color: "red" }}>
        <CallEndIcon />
      </IconButton>

      <IconButton onClick={handleAudio} style={{ color: "white" }}>
        {audio ? <MicIcon /> : <MicOffIcon />}
      </IconButton>

      {screenAvailable && (
        <IconButton onClick={handleScreen} style={{ color: "white" }}>
          {screen ? <ScreenShareIcon /> : <StopScreenShareIcon />}
        </IconButton>
      )}

      <Badge badgeContent={newMessages} max={999} color="orange">
        <IconButton onClick={toggleChat} style={{ color: "white" }}>
          <ChatIcon />
        </IconButton>
      </Badge>
    </div>
  );
}

export default Controls;
