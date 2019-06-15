import React, { useState, Fragment, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../../layout";
import CharactersList from "./CharactersList";
import CharactersFilters from "./CharactersFilters";
import { getCharacters } from "../../../api";
import Context from "../../../Context";
import Pagination from "material-ui-flat-pagination";
import ResetFiltersBtn from "../../ui/buttons/ResetFiltersBtn";
import { NO_RESULTS_IMG } from "../../../api";
import PropTypes from "prop-types";

const styles = theme => ({
  aside: {
    position: "sticky",
    top: "70px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  }
});

const CharactersPage = ({ classes }) => {
  const [list, setList] = useState([]);
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [pagesLength, setPagesLength] = useState(25);
  const [err, setErrMessage] = useState("");

  // Fetch data after filters select
  const fetchFilteredData = async (e, offset, page) => {
    const newFilters = { ...filters };
    newFilters[e.target.name] = e.target.value;
    await setFilters(newFilters);
  };

  //Fetch data//¯\_(ツ)_/¯//
  const fetchData = async (e, offset, page) => {
    try {
      await setOffset(offset);
      await setPage(page);
      const { gender, status, species, name } = filters;
      const request = await getCharacters(page, gender, status, species, name);
      await setErrMessage("");
      await setList(request.data.results);
      await setPagesLength(request.data.info.pages);
    } catch (error) {
      setList([]);
      setPagesLength(0);
      setErrMessage(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <Context.Provider value={{ list, filters, setFilters, fetchFilteredData }}>
      <Layout>
        <div className="container container-grid">
          <main>
            {err && (
              <Fragment>
                <h2 className="title">No results</h2>
                <img
                  alt="no results"
                  className="img-fluid"
                  src={NO_RESULTS_IMG}
                />
              </Fragment>
            )}
            <CharactersList />
            {!!list.length && pagesLength > 1 && (
              <Pagination
                limit={limit}
                page={page}
                offset={offset}
                total={limit * pagesLength}
                onClick={(e, offset, page) => fetchData(e, offset, page)}
              />
            )}
          </main>
          <aside>
            <div className={classes.aside}>
              <CharactersFilters />
              <ResetFiltersBtn />
            </div>
          </aside>
        </div>
      </Layout>
    </Context.Provider>
  );
};

CharactersPage.propTypes = {
  list: PropTypes.array,
  filters: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(CharactersPage);