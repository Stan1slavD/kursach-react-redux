import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addValueAction } from "./redux/filterReducer";
import { fetchRegions } from "./asynkActions/regions";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { regs } from "./regs";
import Filter from "./components/filter";
import { findVacancies } from "./asynkActions/vacancies";
import { addVacanciesAction } from "./redux/searchReducer";
import AppBar from "./components/appBar";
import SingleCard from "./components/SingleCard";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  useEffect(() => {});
  const dispatch = useDispatch();
  const rID = useSelector((state) => state.filterReducer.regionID);
  const cID = useSelector((state) => state.filterReducer.cityID);
  const vac = useSelector((state) => state.searchReducer.vacancies);
  const text = useSelector((state) => state.searchReducer.text);
  // const addRegion = (region) => {
  //   const reg = {
  //     id: region.id,
  //     name: region.name,
  //   };
  //   dispatch({ type: "ADDREGION", payload: reg });
  // };

  return (
    <div className="App">
      <div className="SearchBar">
        <AppBar></AppBar>
      </div>
      <h1 className="gg">Регион: {rID}</h1>
      <h1>Город: {cID}</h1>

      <button onClick={() => console.log(1)}>добавить</button>

      <button
        onClick={() => {
          dispatch(
            findVacancies(
              "https://api.hh.ru/vacancies?area=1806&specialization=1",
              rID,
              cID,
              text
            )
          );
        }}
      >
        FIND
      </button>

      <div>
        <button
          onClick={() =>
            fetch(`https://api.hh.ru/vacancies?area=${rID}&specialization=1`)
              .then((res) => res.json())
              .then((data) => console.log(data))
          }
        >
          ?
        </button>
      </div>
      <Filter />
      <div className="cardContainer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Item>Filter</Item>
            </Grid>
            <Grid item xs={8}>
            {vac.map((item) => {
          return <SingleCard key={item.id} data={item}></SingleCard>;
        })}
            </Grid>
            <Grid item xs={2}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
