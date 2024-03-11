import React from "react";
import "../css/VideoPlayer.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function VideoPlayer() {
  return (
    <div className="VideoPlayerContainer mt-3 mx-3">
      <div className="d-flex justify-content-between align-items-center sliderBtn">
        <div className="changerBtnleft ">
          <ChevronLeftIcon />
        </div>
        <div className="changerBtnright ">
          <ChevronRightIcon />
        </div>
      </div>
      <div className="bookmarkContainer mx-2">
        <BookmarkAddIcon className="m-2" color="primary" fontSize="large" />
      </div>
      <div className="d-flex align-items-center justify-content-end px-3 py-2 videoInfo">
        <div className="d-flex">
          <PlayCircleOutlineIcon color="secondary" fontSize="large" />
          <div className="mx-2">
            <p className="movieName">
              Inside Out 2' Makes Us Feel Every Emotion
            </p>
            <span className="movieDEsc">Inside Out 2' Makes Us </span>
          </div>
        </div>
        <div>
          <span className="movieDEsc">2:04</span>
        </div>
      </div>
    </div>
  );
}
