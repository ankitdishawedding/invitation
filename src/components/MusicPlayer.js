import music from "../assets/AajSajeya.mp3";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const MusicPlayer = ({ play, setPlay, song, handlePlay }) => {
  return (
    <div className="fixed bottom-20 right-7 md:bottom-8 md:right-8">
      <button
        className="rounded-full h-3 w-3 p-3 flex justify-center items-center bg-white text-red-900"
        onClick={() => handlePlay("music")}
      >
        {play ? <MusicOffIcon /> : <MusicNoteIcon />}
      </button>
      <audio ref={song} src={music} loop />
    </div>
  );
};
export default MusicPlayer;
