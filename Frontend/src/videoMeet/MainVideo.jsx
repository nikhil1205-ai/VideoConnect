import Lobby from "./Lobby";
import ChatRoom from "./ChatRoom";
import VideoStage from "./VideoStage";
import Controls from "./Controls";
import styles from "../style/VideoMeet.module.css";

function MainVideo(props) {
  const {
    askForUsername,
    showModal,
    setModal,
    ...rest
  } = props;

  return (
    <>
      {askForUsername ? (
        <Lobby {...rest} styles={styles} />
      ) : (
        <div className={styles.meetVideoContainer}>
          {showModal && <ChatRoom {...rest} styles={styles} />}
          <Controls {...rest} styles={styles} toggleChat={() => setModal(!showModal)} />
          <VideoStage {...rest} styles={styles} />
        </div>
      )}
    </>
  );
}

export default MainVideo;
