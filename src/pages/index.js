import React from "react";
import { Layout, SEO } from "components/common";
import { IntroVideo, Skills, Contact, Examples, Benefits } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <IntroVideo />
    <Benefits />
    <Examples />
    <Skills />
    <Contact />
  </Layout>
);
