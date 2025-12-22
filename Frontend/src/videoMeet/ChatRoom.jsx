import { TextField, Button } from "@mui/material";

function ChatRoom({
  styles,
  messages,
  message,
  setMessage,
  sendMessage,
}) {
  return (
    <div className={styles.chatRoom}>
      <div className={styles.chatContainer}>
        <h1>Chat</h1>

        <div className={styles.chattingDisplay}>
          {messages.length !== 0 ? (
            messages.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "bold", color: "blue" }}>
                  {item.sender}
                </p>
                <p>{item.data}</p>
              </div>
            ))
          ) : (
            <p>No Messages Yet</p>
          )}
        </div>

        <div className={styles.chattingArea}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            label="Enter Your chat"
          />
          <Button variant="contained" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
