import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButtonExtendedSize(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        onClick={() => {
          props.handleOpen();
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add Todos
      </Fab>
    </Box>
  );
}
