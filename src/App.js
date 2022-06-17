import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Routes,Route, Link} from "react-router-dom";
import Search from "./pages/search";
import Main from "./pages/home";
import Favorites from "./pages/favorites";
import  AppBar from "./components/appBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <div  className="grad">
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      </div>
      </>

    // <div className="App">
    //   <Container fixed>
    //   <div className="SearchBar">
    //     <AppBar></AppBar>
    //   </div>
    //   <h1 className="gg">Регион: {rID}</h1>
    //   <h1>Город: {cID}</h1>

    //   <button onClick={() => console.log(1)}>добавить</button>

    //   <button
    //     onClick={() => {
    //       dispatch(
    //         findVacancies(
    //           "https://api.hh.ru/vacancies?area=1806&specialization=1",
    //           rID,
    //           cID,
    //           text
    //         )
    //       );
    //     }}
    //   >
    //     FIND
    //   </button>

    //   <div>
    //     <button
    //       onClick={() =>
    //         fetch(`https://api.hh.ru/vacancies?area=${rID}&specialization=1`)
    //           .then((res) => res.json())
    //           .then((data) => console.log(data))
    //       }
    //     >
    //       ?
    //     </button>
    //   </div>
    //   <Filter />
    //   <div className="cardContainer">
    //     <Box sx={{ flexGrow: 1 }}>
    //       <Grid container spacing={2}  >
           
    //         {vac.map((item) => {
    //       return  <Grid item xs={6} justify="center" alignItems="center" sx={{border:1}}><SingleCard key={item.id} data={item}></SingleCard> </Grid>;
    //     })}
           
    //       </Grid>
    //     </Box>
    //   </div>
    //   </Container>
    // </div>
  );
}

export default App;
