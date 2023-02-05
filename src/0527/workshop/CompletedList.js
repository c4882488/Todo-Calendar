import React, { useState } from "react";
import CompletedItem from "./CompletedItem";
import { Grid } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FloatingActionButtonExtendedSize from "./FloatingActionButtonExtendedSize";
import AddTodos from "./AddTodos";

export default function CompletedList(props) {
  const [alignment, setAlignment] = useState("all");

  const handleAlignment = (event) => {
    // console.log(event.target.attributes.value.value);
    setAlignment(event.target.attributes.value.value);
  };

  const GroupButton = () => {
    return (
      <>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{ mb: 2 }}
        >
          <ToggleButton value="all">全部</ToggleButton>
          <ToggleButton value="Completed">已完成</ToggleButton>
          <ToggleButton value="unCompleted">未完成</ToggleButton>
        </ToggleButtonGroup>
      </>
    );
  };

  const TodosData =
    (alignment === "all" && props.todos) ||
    (alignment === "Completed" &&
      props.todos.filter((todo) => todo.completed === true)) ||
    (alignment === "unCompleted" &&
      props.todos.filter((todo) => todo.completed === false));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddTodos
        open={open}
        handleClose={handleClose}
        handleAddTodo={props.handleAddTodo}
      />
      <Grid container alignItems="center">
        <Grid item xs>
          <GroupButton />
        </Grid>
        <Grid item>
          <FloatingActionButtonExtendedSize handleOpen={handleOpen} />
        </Grid>
      </Grid>

      <Masonry
        columns={3}
        spacing={2}
        defaultHeight={500}
        defaultColumns={3}
        defaultSpacing={1}
      >
        {TodosData.map((todo) => (
          <CompletedItem key={todo.id} todo={todo} onClick={props.onClick} />
        ))}
      </Masonry>

      {/* <UnCompletedList /> */}
    </div>
  );
}
