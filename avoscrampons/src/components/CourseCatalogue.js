import React from "react";
import FeaturedPost from "./FeaturedPost";
import Catalogue from "./Catalogue";

const mainFeaturedPost = {
  title: "Consulter le catalogue de cours et les terrains disponibles",
  description:
    "Id nostrud voluptate tempor qui minim officia duis velit non aliquip consequat. Qui reprehenderit laboris nisi fugiat quis mollit. Pariatur occaecat ex ut aliqua incididunt dolor magna anim in qui consectetur laborum esse.",
  image: "../img/banner.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const CourseCatalogueAndFieldAvailability = () => {
  return (
    <div>
      <div>
        <FeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <Catalogue />
      </div>
    </div>
  );
};
export default CourseCatalogueAndFieldAvailability;
