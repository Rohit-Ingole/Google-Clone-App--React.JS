import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";

import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home__headerMain">
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
          </div>
          <div className="home__headerRight">
            <div className="home__headerRightApps">
              <Apps />
            </div>
            <Avatar />
          </div>
        </div>
      </div>
      <div className="home__body">
        <div className="home__bodyImage">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
