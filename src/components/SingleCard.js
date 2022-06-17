// import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// function SingleCard({ data }) {
//   //console.log(data)
//   let salaryString = "";
//   if (data.salary !== null) {
//     salaryString = ` ${data.salary.from}-${data.salary.to}`;
//   }

//   if (data.employer.logo_urls !== null)
//     return (
//       <>
//         <Grid item xs={4}>
//           <Card
//             sx={{ maxWidth: 350, minWidth: 350, maxHeight: 350, minWidth: 350 }}
//           >
//             <Box sx={{ width: 350, height: 150 }}>
//               <Box
//                 component="img"
//                 sx={{
//                   height: 150,
//                   width: 350,
//                 }}

//                 src={Object.values(data.employer.logo_urls)[2]}
//               />
//             </Box>
//             <CardContent>
//               <Typography
//                 gutterBottom
//                 variant="h5"
//                 component="h2"
//                 className="test"
//               >
//                 {data.name}
//               </Typography>
//               <Box className="test">
//                 <Typography className="test">{salaryString}</Typography>
//               </Box>
//             </CardContent>
//             <CardActions>
//               <Button size="small" color="primary">
//                 View
//               </Button>
//               <Button size="small" color="primary">
//                 Edit
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       </>
//     );
//   else
//     return (
//       <>
//         <Grid item xs={4}>
//           <Card
//             sx={{ maxWidth: 350, minWidth: 350, maxHeight: 350, minWidth: 350 }}
//           >
//             <Box sx={{ width: 350, height: 150, border: 1 }}>
//               <Box
//                 component="img"
//                 sx={{
//                   height: 150,
//                   width: 200,
//                 }}
//                 src="https://img.icons8.com/ios/344/no-image.png"
//               />
//             </Box>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {data.name}
//               </Typography>
//               <Typography>Вакансий открыто: {data.open_vacancies}</Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small" color="primary">
//                 View
//               </Button>
//               <Button size="small" color="primary">
//                 Edit
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       </>
//     );
// }

// export default SingleCard;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";
import {
  addFavoriteAction,
  deleteFavoriteAction,
} from "../redux/favoriteReducer";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  FormControl,
  Pagination,
  Card,
} from "react-bootstrap";

function SingleCard({ data }) {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  let salaryString = "ЗП не указана";
  if (data.salary !== null) {
    if (data.salary.from === null) {
      salaryString = `до ${data.salary.to} ${data.salary.currency}`;
    } else if (data.salary.to === null) {
      salaryString = `от ${data.salary.from} ${data.salary.currency}`;
    } else {
      salaryString = `${data.salary.from}-${data.salary.to} ${data.salary.currency}`;
    }
  }

  if (data.employer.logo_urls !== null) {
    return (
      <Card
        style={{ width: "25rem", height: "600px", position: "relative" }}
        className="border-dark p-2"
      >
        <Card.Img
          variant="top"
          src={Object.values(data.employer.logo_urls)[2]}
        />
        <Card.Body
          style={{
            position: "absolute",
            bottom: "30px",
            margin: " 0 auto",
            width: "24rem",
          }}
        >
          <Card.Title className="text " style={{}}>
            {data.name}
          </Card.Title>
          <Card.Text className="text  " style={{}}>
            {data.employer.name}
          </Card.Text>
          <Card.Text className="text ">{salaryString}</Card.Text>
          <Row>
            <Col xs={4}></Col>
            <Col xs={4} className="text-end ">
              <Button clsassName="w-100" variant="primary">
                Подробнее..
              </Button>
            </Col>
            <Col xs={2}></Col>
            <Col xs={1} className="text-end p-2">
              <Col xs={1}></Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={color}
                className="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
                onClick={() => {
                  if (color === "black") {
                    setColor("red");
                    dispatch(addFavoriteAction(data));
                  } else if (color === "red") {
                    setColor("black");
                    dispatch(deleteFavoriteAction(data));
                  }
                }}
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card
        style={{ width: "25rem", height: "600px" }}
        className="border-dark  p-2"
      >
        <Card.Img
          variant="top"
          src="https://img.icons8.com/ios/344/no-image.png"
        />
        <Card.Body className="align-bottom ">
          <Card.Title className="text ">{data.name}</Card.Title>
          <Card.Text className="text ">{data.employer.name}</Card.Text>
          <Card.Text className="text ">{salaryString}</Card.Text>
          <Row>
            <Col xs={4}></Col>
            <Col xs={4} className="text-end ">
              <Button clsassName="w-100" variant="primary">
                Подробнее..
              </Button>
            </Col>
            <Col xs={2}></Col>
            <Col xs={1} className="text-end p-2">
              <Col xs={1}></Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={color}
                className="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
                onClick={() => {
                  if (color === "black") {
                    setColor("red");
                  } else if (color === "red") setColor("black");
                }}
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleCard;
