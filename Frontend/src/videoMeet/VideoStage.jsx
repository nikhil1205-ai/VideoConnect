function VideoStage({ styles, localVideoref, videos }) {
  return (
    <>
      <video
        className={styles.meetUserVideo}
        ref={localVideoref}
        autoPlay
        muted
      />

      <div className={styles.conferenceView}>
        {videos.map((video) => (
          <video
            key={video.socketId}
            ref={(ref) => {
              if (ref && video.stream) {
                ref.srcObject = video.stream;
              }
            }}
            autoPlay
          />
        ))}
      </div>
    </>
  );
}

export default VideoStage;
