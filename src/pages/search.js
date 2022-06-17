import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addValueAction } from "../redux/filterReducer";
import { fetchRegions } from "../asynkActions/regions";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { regs } from "../regs";
import Filter from "../components/filter";
import { findVacancies } from "../asynkActions/vacancies";
import { addVacanciesAction } from "../redux/searchReducer";
import AppBar from "../components/appBar";
import SingleCard from "../components/SingleCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { addTextAction } from "../redux/filterReducer";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Search() {
  useEffect(() => {});
  const dispatch = useDispatch();
  const rID = useSelector((state) => state.filterReducer.regionID);
  const cID = useSelector((state) => state.filterReducer.cityID);
  const vac = useSelector((state) => state.searchReducer.vacancies);
  const text = useSelector((state) => state.filterReducer.text);

  function findBtnClick() {
    console.log(1)
    console.log('')
    console.log(1)

    dispatch(
      findVacancies(
        rID,
        cID,
        text
      )
    );
  }

  return (
    <Container>
      <div className="filter p-3 mt-5">
        <FormControl
          type="search"
          placeholder="Искать..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => {dispatch(addTextAction(e.target.value))}}
        />
        <Row>
          <Col>
            <Filter></Filter>
          </Col>
          <Col className="text-end">
            <Button variant="outline-success" className="mt-3" onClick={findBtnClick}>
              Найти
            </Button>
          </Col>
        </Row>

        <hr className="mt-5"></hr>
      </div>
      <Row>
        {vac.map((item) => {
          return (
            <Col xs={6} className="text-center">
              <SingleCard key={item.id} data={item}></SingleCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Search;
