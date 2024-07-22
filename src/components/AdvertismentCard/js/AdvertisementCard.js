import React from "react";
import "../css/AdvertismentCard.css";
import advertismentIcon from "../../../assets/fighter.avif";

export default function AdvertisementCard() {
  return (
    <div className="col-12">
      <img src={advertismentIcon} className="col-12 advertismentIcon" />
    </div>
  );
}
