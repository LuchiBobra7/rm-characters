import React from "react";
import Layout from "../../layout";
import { NO_MATCH_IMG } from "../../../api";

const NoMatch = () => (
  <Layout>
    <div className="container text-center">
      <h2 className="title">404, Page not found</h2>
      <img alt="no results" src={NO_MATCH_IMG} />
    </div>
  </Layout>
);

export default NoMatch;