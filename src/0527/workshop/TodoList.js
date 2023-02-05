import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import CompletedList from "./CompletedList";
// import AddTodo from "./AddTodo";
// , Route, Switch, Link
import StyledTreeItem from "./StyledTreeItem";
import { BrowserRouter } from "react-router-dom";
import CustomizedSnackbars from "./CustomizedSnackbars";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: true,
      date: "2020-05-27",
      class: "School",
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: false,
      date: "2020-05-27",
      class: "Work",
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: false,
      date: "2020-05-27",
      class: "School",
    },
    {
      id: 4,
      title: "et porro tempora",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: true,
      date: "2020-05-27",
      class: "School",
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: false,
      date: "2020-05-27",
      class: "Tag",
    },
    {
      id: 6,
      title: "laboriosam mollitia et enim quasi adipisci",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: false,
      date: "2020-05-27",
      class: "Tag",
    },
    {
      id: 7,
      title: "mollitia laboriosam mollitia et enim quasi adipisci",
      content:
        "Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~Hello!!!! this is test text~~~ Hello!!!! this is test text~~~ Hello!!!! this is test text~~~",
      completed: false,
      date: "2020-05-27",
      class: "",
    },
  ]);
  const [classification, setClassification] = React.useState("All");
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("success");
  const [snackText, setSnackText] = React.useState("");

  const handleSnackbaeClick = () => {
    setOpen(true);
  };

  const handleSnackbaeClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // const unCompletedTodos = todos.filter((todo) => todo.completed === false);
  const classificationTodos =
    classification === "All"
      ? todos
      : todos.filter((todo) => todo.class == classification);

  const handleFocus = (classification) => {
    setClassification(classification);
  };

  const handleClick = (id, completed, e) => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(newTodos);

    setState("success");
    if (completed) {
      setSnackText("Todo is uncompleted");
    } else {
      setSnackText("Todo is completed");
    }
    handleSnackbaeClick();
  };

  const handleAddTodo = (Todo) => {
    const newTodos = [
      ...todos,
      { id: todos[todos.length - 1].id + 1, ...Todo },
    ];
    setTodos(newTodos);
    setState("success");
    setSnackText("Todo Add completed");
    handleSnackbaeClick();
  };

  return (
    <BrowserRouter>
      <CustomizedSnackbars
        open={open}
        state={state}
        snackText={snackText}
        onClick={handleSnackbaeClick}
        onClose={handleSnackbaeClose}
      />
      <MenuAppBar />
      <Container maxWidth="xl">
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={3}>
            <StyledTreeItem todos={todos} handleFocus={handleFocus} />
          </Grid>
          <Grid item xs={12} md={9}>
            <CompletedList
              todos={classificationTodos}
              onClick={handleClick}
              handleAddTodo={handleAddTodo}
            />
            {/* <div>
              <Link to="/addTodo" style={{ marginRight: "10px" }}>
                新增代辦
              </Link>
              <Link to="/completed" style={{ marginRight: "10px" }}>
                已完成
              </Link>
              <Link to="/un-complted">未完成</Link>
            </div>
            <Switch>
              <Route path="/addtodo">
                <AddTodo handleAddTodo={handleAddTodo} />
              </Route>
              <Route path="/completed">
                <CompletedList
                  todos={unCompletedTodos}
                  onClick={handleClick}
                  title="未完成"
                />
              </Route>
              <Route path="/un-complted">
                <CompletedList
                  todos={completedTodos}
                  onClick={handleClick}
                  title="以完成"
                />
              </Route>
              <Route path="/">
                <CompletedList
                  todos={unCompletedTodos}
                  onClick={handleClick}
                  title="未完成"
                />
              </Route>
            </Switch> */}
          </Grid>
        </Grid>
      </Container>
      {/* <Container maxWidth="xl">
        
      </Container> */}
    </BrowserRouter>
  );
};
export default TodoList;
