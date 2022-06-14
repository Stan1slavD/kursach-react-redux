import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function SingleCard({ data }) {
  let salaryString = "";
  if (data.salary !== null) {
    salaryString = ` ${data.salary.from}-${data.salary.to}`;
  }

  if (data.employer.logo_urls !== null)
    return (
      <>
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 350, minWidth: 350, maxHeight: 350, minWidth: 350 }}
          >
            <Box sx={{ width: 350, height: 150 }}>
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 350,
                }}
                alt="The house from the offer."
                src={Object.values(data.employer.logo_urls)[2]}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="test"
              >
                {data.name}
              </Typography>
              <Box className="test">
                <Typography className="test">{salaryString}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  else
    return (
      <>
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 350, minWidth: 350, maxHeight: 350, minWidth: 350 }}
          >
            <Box sx={{ width: 350, height: 150, border: 1 }}>
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 200,
                }}
                src="https://img.icons8.com/ios/344/no-image.png"
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography>Вакансий открыто: {data.open_vacancies}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
}

export default SingleCard;
