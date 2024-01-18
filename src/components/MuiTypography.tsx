import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      {/* Change semantic element into component prop - use component */}
      <Typography variant="h4" component={"h1"}>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6" gutterBottom>
        h6 heading
      </Typography>

      {/*2 variants of h6 tag  */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      {/* p tag of text - body1 - 16px and defualt, body2 is smaller */}
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        voluptates dolores nam optio facere quae porro suscipit! Quo,
        reiciendis. Soluta dicta ratione a non debitis magnam error laudantium,
        in cum.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        voluptates dolores nam optio facere quae porro suscipit! Quo,
        reiciendis. Soluta dicta ratione a non debitis magnam error laudantium,
        in cum.
      </Typography>
    </div>
  );
};
