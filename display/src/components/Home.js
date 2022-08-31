import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import did from "../logo.svg";
import { Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="App">
      <section id="about">
        <h1 className="heading" style={{ "background-color": "blue" }}>
          About Us
        </h1>
        <div id="pic">
          <img src={did} alt="Logo" />
          <div
            id="intro"
            style={{ "background-color": "light-gray", width: "55%", margin: "auto" }}
          >
            <h2>Feydo Top Clothing</h2>
            <div className="show">
              <Button className="btn btn-primary" style={{ width: 150 }}>
                HOME
              </Button>
              <Button
                className="btn btn-warning"
                style={{ width: 150 }}
                onclick={() => {
                  <Home />;
                }}
              >
                warning
              </Button>
              <Button
                className="btn btn-danger"
                style={{ width: 150 }}
                onclick={() => {
                  <Home />;
                }}
              >
                danger
              </Button>
              <Button
                className="btn btn-info"
                style={{ width: 150 }}
                onclick={() => {
                  <Home />;
                }}
              >
                info
              </Button>
              <Button
                className="btn btn-Success"
                style={{ width: 150 }}
                onclick={() => {
                  <Home />;
                }}
              >
                Success
              </Button>
            </div>
            <p>
              A woman's brands are typically two-piece (a crop top and a high
              waist shorts or a hoodie with a v-shape shorts) with a
              long-sleeved top. The ensemble was traditionally paired with a
              headpiece and special footwear, but now a smartphone and running
              shoes are more common accessories. man brands also feature
              t-shirts and shorts or track pants also with a hoodie or a base
              ball jacket Our brands designs are still largely bespoke and
              picking one out typically begins at a fabric store. Drawing
              inspiration from the clothes of the Chosun dynasty, which ran from
              2010 to 2022, Ricky RIck told reporters after the show that he
              "loved traditional south african clothes, materials and patterns"
              and that the timing of the show, Chanel's first in South Africa,
              was just "the right moment to do it." Many will be familiar with
              South African Hip Hop music, or at least the term Ghetto-Music,
              with gangster love (still the most-viewed video on YouTube ever)
              representing South Africa's latest musical mass export. Makeup is
              another. South Africa's skin-care market, collectively known as
              "African-beauty" in Central Africa, is already well-established
              and highly profitable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
