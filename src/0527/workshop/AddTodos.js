import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddTodo from "./AddTodo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  outline: 0,
};

export default function BasicModal(props) {
  const { open, handleClose, handleAddTodo } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ mb: 2 }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            新增待辦
          </Typography>

          <AddTodo handleClose={handleClose} handleAddTodo={handleAddTodo} />
        </Box>
      </Modal>
    </div>
  );
}
