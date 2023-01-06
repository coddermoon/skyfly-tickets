const Video = () => {
  return (
    <div>
      {/* <video controls autoplay> */}
      <video
        className="w-4/5 mx-auto  my-16"
        loop="true"
        autoplay="autoplay"
        controls="controls"
        id="vid"
        muted
      >
        <source
          src="https://v.ftcdn.net/05/08/77/10/240_F_508771046_qHFcRJyP0BjFEv9ietRanLh8SHMFb8Wh_ST.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
