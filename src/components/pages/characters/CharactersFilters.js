import React, { Fragment, useContext } from "react";
import { uid } from "react-uid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Context from "../../../Context";

const filtersList = [
  {
    label: "Gender",
    name: "gender",
    defaultValue: "",
    values: [
      {
        value: "male",
        label: "Male"
      },
      {
        value: "female",
        label: "Female"
      }
    ]
  },
  {
    label: "Status",
    name: "status",
    defaultValue: "",
    values: [
      {
        value: "alive",
        label: "Alive"
      },
      {
        value: "dead",
        label: "Dead"
      },
      {
        value: "unknown",
        label: "Unknown"
      }
    ]
  },
  {
    label: "Species",
    name: "species",
    defaultValue: "",
    values: [
      {
        value: "human",
        label: "Human"
      },
      {
        value: "alien",
        label: "Alien"
      },
      {
        value: "robot",
        label: "Robot"
      },
      {
        value: "animal",
        label: "Animal"
      },
      {
        value: "unknown",
        label: "Unknown"
      }
    ]
  }
];
const CharactersFilters = ({ classes }) => {
  
  const { filters, fetchFilteredData } = useContext(Context);

  const onFilterChange = (e, offset, page) => {
    fetchFilteredData(e, offset, page);
  };

  return (
    <Fragment>
      {filtersList.map(item => (
        <Fragment key={uid(item.name)}>
          <h3 className="title">{item.label}</h3>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={item.label}
              name={item.name}
              value={filters[item.name] || ""}
              className="mb"
              onChange={onFilterChange}
            >
              <FormControlLabel
                value=""
                defaultValue={item.value}
                control={<Radio color="primary" />}
                label="All"
              />
              {item.values.map((item, i) => (
                <FormControlLabel
                  key={uid(i)}
                  value={item.value}
                  control={<Radio color="primary" />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default CharactersFilters;