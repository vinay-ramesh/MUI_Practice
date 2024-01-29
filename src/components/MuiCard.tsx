import React from "react";
import {
  Box,
  CardContent,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

function MuiCard() {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          component={"img"}
          height={140}
          image="https://source.unsplash.com/random"
          alt="unspalsh image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body1" color={"text.primary"}>
            React is a JS library helps to build FE single page web applications
            and also to build mobile applications
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
