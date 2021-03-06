import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCityID, addRegionID, addValueAction } from "../redux/filterReducer";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { regs } from "../regs";
import { Row } from "react-bootstrap";

function Filter() {
  const [regID, setRegID] = useState(0);
  const [citID, setCitID] = useState(0);
  const [cities, setCities] = useState([]);
  const [ivalue, setiValue] = useState("");

  const dispatch = useDispatch();
  const value = useSelector((state) => state.filterReducer.value);
  const reg = useSelector((state) => state.filterReducer.regions);
  const cit = useSelector((state) => state.filterReducer.cities);
  const findCities = (e) => {
    const regionID = regs.find((data) => e.target.value == data.label).id;
    dispatch(addRegionID(regionID));
    return regs.find((data) => e.target.value == data.label).areas;
  };

  const findCityID = (e) => {
    const cityID = cities.find((data) => e.target.value == data.label).id;
    dispatch(addCityID(cityID));
  };

  //add ids for city and region from filter
  return (
    <Row className="mt-3">
      <Autocomplete
        disablePortal
        options={regs}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} {...params.id} label="Регион" />
        )}
        onBlur={(e) => {
          setCities(findCities(e));
          setiValue("");
        }}
        onChange={(e) => setiValue("")}
      />

      <Autocomplete
        disablePortal
        options={cities}
        sx={{ width: 300 }}
        value={ivalue}
        renderInput={(params) => <TextField {...params} label="Город" />}
        onBlur={(e) => {
          findCityID(e);
          setiValue(e.target.value);
        }}
      />
    </Row>
  );
}

export default Filter;
