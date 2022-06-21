import { Box, Typography } from "@mui/material";
import { useState } from "react";

export function Error404(props: any) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 15 }}
    >
      {props.PAGE_NAME ? (
        <>
          {" "}
          <Typography variant="h5" sx={{ align: "center" }}>
            This is {props.PAGE_NAME} page.
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h5" sx={{ alignContent: "center" }}>
            Page not found 404
          </Typography>
        </>
      )}
    </Box>
  );
}
export default Error404;
