import React from "react";
import "../css/CelebrityTab.css";
import { ArrowForwardIos } from "@mui/icons-material";
import CelebrityCard from "../../../components/CelebrityCard/js/CelebrityCard";
export default function CelebrityTab() {
  let x = new Array(7);

  return (
    <div className="">
      <div className="celebrity-tab col-12">
        <div className="celebrity-tab-title">
          <div className="divider"></div>

          <span>Most popular celebrities</span>
          <ArrowForwardIos color="primary" />
        </div>
      </div>
      <div className="d-flex flex-row celebrity-tab-container">
        {Array.from({ length: 10 }, (_, index) => (
          <CelebrityCard key={index} />
        ))}
      </div>
    </div>
  );
}
