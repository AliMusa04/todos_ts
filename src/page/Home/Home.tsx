import React from "react";
import Content from "../../components/Content/Content";
import ContentFoot from "../../components/ContentFoot/ContentFoot";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <section className="todoapp">
        <Header />

        <Content />

        <ContentFoot />
      </section>

      <Footer />
    </>
  );
};

export default Home;
