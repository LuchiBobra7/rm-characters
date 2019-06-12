import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import Context from "../../../Context";

const ResetFiltersBtn = () => {
    const {  setFilters } = useContext(Context);
    const resetFilters = () => {
        setFilters({})
      }
    return (
        <Button size="small"  variant="contained" onClick={()=> resetFilters()}>
            Reset filters
        </Button>
    );
};

export default ResetFiltersBtn;