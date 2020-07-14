import React from "react";
import FeaturedPost from "./FeaturedPost";

const mainFeaturedPost = {
  title: "Reserver un cours dès aujourd'hui",
  description:
    "Un chèque pour les frais d’inscriptions de 350$ pour 30 séances d’entraînement pour 10 jours l’été et 30 séances par mois en hiver.",
  image: "../img/banner.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const BookCourse = () => {
  return (
    <div>
      <FeaturedPost post={mainFeaturedPost} />
    </div>
  );
};
export default BookCourse;
