import React from "react";

import CourseBanner from "./CourseBanner";
import Learn from "./Learn";
import Featured from "./Featured";
import Instructor from "./Instructor";
import Ratings from "./Ratings";
import Accordion from "./Accordion";
const CoursePage = () => {
  return (
    <>
      <CourseBanner />
      <Learn />
      <Featured />
      <Accordion />
      <Instructor />
      <Ratings />
    </>
  );
};

export default CoursePage;
