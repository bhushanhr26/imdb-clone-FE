import React from "react";
import "../css/FeaturedCard.css";
import fighter from "../../../assets/fighter.avif";
import CollectionsIcon from "@mui/icons-material/Collections";

export default function FeaturedCard() {
  return (
    <>
      <span className="featureText">Featured today</span>
      <div className="mb-2 d-flex flex-wrap justify-content-evenly align-items-center flex-wrap pe-3">
        <div className="position-relative col-6 my-3 pe-3">
          <div>
            <img
              src={fighter}
              alt="Fighter Image"
              loading="lazy"
              className="img-fluid pointer"
            />
            <div className="d-flex align-items-center galleryContainer pointer mx-2">
              <CollectionsIcon color="primary" fontSize="large" />
              <span className="photoText mx-2 pointer">Photos</span>
            </div>
            <div className="my-4">
              <p className="galleryDesc pb-1 pointer">
                cars 2024: Photos We Love
              </p>
              <span className="seeGalleryP my-1 pointer">See the gallery</span>
            </div>
          </div>
        </div>
        <div className="position-relative col-6 my-3 ps-3">
          <div>
            <img
              src={fighter}
              alt="Fighter Image"
              loading="lazy"
              className="img-fluid pointer"
            />
            <div className="d-flex align-items-center galleryContainer pointer mx-2">
              <CollectionsIcon color="primary" fontSize="large" />
              <span className="photoText mx-2 pointer">Photos</span>
            </div>
            <div className="my-4">
              <p className="galleryDesc pb-1 pointer">
                cars 2024: Photos We Love
              </p>
              <span className="seeGalleryP my-1 pointer">See the gallery</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
