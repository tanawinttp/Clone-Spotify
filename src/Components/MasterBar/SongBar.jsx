import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { MdScreenshotMonitor } from "react-icons/md";
import { BiRepeat, BiShuffle } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiMicrophoneStageDuotone, PiQueueLight } from "react-icons/pi";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsArrowsAngleContract, BsSpeakerFill } from "react-icons/bs";
import { pauseMaster, playMaster } from "../../States/Actors/SongActor";
import { useGlobalContext } from "../../States/Contet";

const SongBar = () => {
  const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
  const {
    progress,
    setProgress,
    resetEverything,
    currTime,
    setCurrTime,
    duration,
    setDuration,
  } = useGlobalContext();
  const dispatch = useDispatch();
  const handleMaster = () => {
    if (isPlaying) {
      dispatch(pauseMaster());
    } else {
      dispatch(playMaster());
    }
  };

  useEffect(() => {
    if (masterSong.mp3) {
      setDuration(formatTime(masterSong?.mp3?.duration));
      if (isPlaying) {
        masterSong.mp3.play();
        masterSong?.mp3?.play();
      } else {
        masterSong?.mp3?.pause();
      }
    }
    if (isPlaying) {
      setInterval(() => {
        if (progress === 100) {
          dispatch(pauseMaster());
          resetEverything();
        } else {
          setProgress(
            (masterSong.mp3.currentTime / masterSong.mp3.duration) * 100
          );
          setCurrTime(formatTime(masterSong.mp3.currentTime));
        }
      }, 1000);
    }
  }, [masterSong, isPlaying]);

  const changeProgress = (e) => {
    setProgress(e.target.value);
    masterSong.mp3.currentTime = e.target.value;
    console.log(progress);
  };

  const formatTime = (durationInSeconds) => {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.round(durationInSeconds % 60);
    let formattedDuration = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 9 ? "0" + seconds : seconds
    }`;

    return formattedDuration;
  };

  return (
    <div className="fixed w-full flex items-center justify-between bottom-0 left-0 h-20 bg-black">
      <div className="w-2/12">
        <div className="flex items-center gap-2">
          <img className="h-12" src="/src/assets/card.jpg" alt="" />
          <div>
            <h3 className="text-xs font-semibold mb-1">
              {masterSong?.title || "Arijit Singh"}
            </h3>
            <span className="text-[10px]">
              {masterSong.artist || "Arijit Singh"}
            </span>
          </div>
          <AiOutlineHeart className="ml-3" />
          <MdScreenshotMonitor className="ml-3" />
        </div>
      </div>
      <div className="w-5/12">
        <div className="flex justify-center items-center mb-2 gap-4">
          <BiShuffle />
          <IoMdSkipBackward />
          {isPlaying ? (
            <button
              onClick={handleMaster}
              className="flex items-center rounded-[50%] bg-white justify-center p-2"
            >
              <FaPause className="text-black text-lg" />
            </button>
          ) : (
            <button
              onClick={handleMaster}
              className="flex items-center rounded-[50%] bg-white justify-center p-2"
            >
              <FaPlay className="text-black text-lg" />
            </button>
          )}
          <IoMdSkipForward />
          <BiRepeat />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">{currTime}</span>
          <input
            className="w-full block"
            type="range"
            name=""
            value={progress}
            disabled={!masterSong.mp3}
            onChange={changeProgress}
            min={0}
            max={100}
          />
          <span className="text-xs">{duration}</span>
        </div>
      </div>
      <div className="w-2/12 flex items-center gap-2">
        <AiOutlinePlaySquare className="text-2xl" />
        <PiMicrophoneStageDuotone className="text-2xl" />
        <PiQueueLight className="text-2xl" />
        <BsSpeakerFill className="text-2xl" />
        <HiSpeakerXMark className="text-2xl" />
        <HiSpeakerWave className="text-2xl" />
        <input
          className="w-full block"
          type="range"
          name=""
          min={0}
          max={100}
        />
        <BsArrowsAngleContract />
      </div>
    </div>
  );
};

export default SongBar;
