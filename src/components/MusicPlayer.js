const MusicPlayer = ({ play, setPlay, song, handlePlay }) => {
  return (
    <div className="fixed bottom-10 right-0 text-red-800 bg-white">
      <button className="rounded-full" onClick={() => handlePlay("music")}>
        {play ? "pause" : "play"}
      </button>
      ;
      <audio ref={song} src={"/music1.mp3"} loop />
    </div>
  );
};
export default MusicPlayer;
