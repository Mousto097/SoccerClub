import React from "react";
import FeaturedPost from "./FeaturedPost";
import SignUpForm from "./SignUp";

const mainFeaturedPost = {
  title: "Inscrivez-vous au Soccer À VOS CRAMPONS OTTAWA",
  description:
    "Un chèque pour les frais d’inscriptions de 350$ pour 30 séances d’entraînement pour 10 jours l’été et 30 séances par mois en hiver.",
  image: "../img/banner.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const EnrollCourse = () => {
  return (
    <div>
      <div>
        <FeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};
export default EnrollCourse;
