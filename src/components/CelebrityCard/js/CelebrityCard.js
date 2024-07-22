import React from "react";
import "../css/celebrityCard.css";
import actor from "../../../assets/randeep.webp";

export default function CelebrityCard() {
  return (
    <div className="celebrityCardContainer col-2">
      <img src={actor} alt="celebrity" className="col-10" />
      <span>Randeep Hooda</span>
    </div>
  );
}
