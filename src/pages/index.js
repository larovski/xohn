import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact, Examples, Benefits } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Benefits />
    <Examples />
    <Skills />
    <Contact />
  </Layout>
);
