import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/AboutHero/AboutHero";
import MegaSell from "../components/common/MegaSell";
import Option from "../components/common/Option";
import ProvideBest from "../components/ProvideBest/ProvideBest";

const About = () => {
  return (
    <>
       {/* head title */}
       <Helmet>
        <title>About</title>
      </Helmet>
      {/* head title */}
      <AboutHero />
      {/* mega sale */}
      <MegaSell/>
      {/* provide the best */}
      <ProvideBest/>
      {/* Option part */}
      <Option/>
      {/* Option part */}
    </>
  );
};

export default About;
