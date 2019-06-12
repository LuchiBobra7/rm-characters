import { createContext } from "react";

export default createContext({
  list: [],
  filters: {},
  setFilters: () => {},
  fetchFilteredData: () => {}
});
