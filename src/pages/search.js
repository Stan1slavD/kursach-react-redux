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
  Container,
  Nav,
  Row,
  Col,
  FormControl,
  Pagination,
} from "react-bootstrap";


function Search() {
  useEffect(() => {});
  const dispatch = useDispatch();
  const rID = useSelector((state) => state.filterReducer.regionID);
  const cID = useSelector((state) => state.filterReducer.cityID);
  const vac = useSelector((state) => state.searchReducer.vacancies);
  const text = useSelector((state) => state.filterReducer.text);
  const [page, setPage]=useState(1);
  const [maxPages, setMaxPages]=useState(1)

  function findBtnClick() {
    dispatch(findVacancies(rID, cID, text, page-1));
  }

  return (
    
    <Container >
      <div className="filter p-3 mt-5">
        <FormControl
          type="search"
          placeholder="Искать..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            dispatch(addTextAction(e.target.value));
          }}
        />
        <Row>
          <Col>
            <Filter></Filter>
          </Col>
          <Col className="text-end">
            <Button
              //variant="outline-success"
              className="mt-3 btn"
              onClick={findBtnClick}
            >
              Найти
            </Button>
          </Col>
        </Row>

        <hr className="mt-5"></hr>
      </div>
      <Row className="justify-content-center">
        {vac.map((item) => {
          return (
            <Col xs={4} className="text-center m-3">
              <SingleCard key={item.id} data={item}></SingleCard>
            </Col>
          );
        })}
      </Row>
     <Row className="justify-content-center">
        <Col xs={6} >
      <Pagination>
        <Pagination.First onClick={()=>{setPage(1)}} />
        <Pagination.Prev onClick={()=>{if(page!==1)setPage(page-1)}}/>
        {[1, 2, 3, 4, 5,6].map((item) => {
          return <Pagination.Item active={item === page}  onClick={()=>{setPage(item);dispatch(findVacancies(rID, cID, text, page-1));setTimeout(()=>window.scrollTo({ top: 0, behavior: 'smooth' }), 500);}} >{item}</Pagination.Item>;
        })}
        <Pagination.Next onClick={()=>{setPage(page+1)}}/>
        <Pagination.Last onClick={()=>{setPage(page-1)}}/>
      </Pagination>
      </Col>
      </Row>
    </Container>
  );
}

export default Search;
