import React, { useState } from "react";
import "../css/LandingPage.css";
import sideBanner from "../../../assets/sideBanner.jpg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VideoPlayer from "../../../components/VideoPlayer/js/VideoPlayer";
import FeaturedCard from "../../../components/FeaturedCard/js/FeaturedCard";

const newData = [
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
  {
    img: sideBanner,
    time: "3:21",
    title: "Inside Out 2' Makes Us Feel Every Emotion",
    description: "Watch the new trailer",
  },
];
export default function LandingPage() {
  const [sideData, setSideData] = useState(newData);
  return (
    <div className="container d-flex" style={{ maxWidth: "1200px" }}>
      <div className="col-8">
        <VideoPlayer />
        <FeaturedCard />
      </div>
      <div className="col-4 pt-2">
        <span className="upNextText">Up Next</span>
        <div className="mt-2">
          {sideData.map((item, index) => {
            return (
              <div className="d-flex sideContainer p-3 " key={index}>
                <div className="me-2">
                  <img
                    src={item.img}
                    alt="sideBanner"
                    loading="lazy"
                    className="sieBanner"
                  />
                </div>
                <div>
                  <div className="d-flex mb-1">
                    <PlayCircleOutlineIcon color="info" />
                    <span className="sideTime mx-1">{item.time}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="sideTitle">{item.title}</span>
                    <span className="sideDesc">{item.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <p className="browseText mt-2">
            Browse trailers <ChevronRightIcon />
          </p>
        </div>
      </div>
    </div>
  );
}
