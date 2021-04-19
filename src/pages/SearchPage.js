import React from "react";
import "./SearchPage.css";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__headerTop">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__headerLogo"
          />
        </Link>
        <div className="searchPage__headerSearch">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__headerBottom">
        <div className="searchPage__optionsLeft">
          <div className="searchPage__option">
            <SearchIcon fontSize="small" />
            <Link to="/all">All</Link>
          </div>

          <div className="searchPage__option">
            <Description fontSize="small" />
            <Link to="/news">News</Link>
          </div>

          <div className="searchPage__option">
            <Image fontSize="small" />
            <Link to="/images">Images</Link>
          </div>

          <div className="searchPage__option">
            <LocalOffer fontSize="small" />
            <Link to="/shopping">shopping</Link>
          </div>

          <div className="searchPage__option">
            <Room fontSize="small" />
            <Link to="/maps">maps</Link>
          </div>

          <div className="searchPage__option">
            <MoreVert fontSize="small" />
            <Link to="/more">more</Link>
          </div>
        </div>
        <div className="searchPage__optionsRight">
          <div className="searchPage__option">
            <Link to="/setting">Setting</Link>
          </div>
          <div className="searchPage__option">
            <Link to="/tools">Tools</Link>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <div className="searchPage__resultCount">
            About {data?.searchInformation.totalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </div>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      className="searchPage__resultimage"
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="Snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
