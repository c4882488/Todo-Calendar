import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function CompletedItem(props) {
  return (
    <Card
      sx={{ minWidth: 250 }}
      style={{
        backgroundColor: props.todo.completed ? "rgb(244, 244, 244)" : "",
        color: props.todo.completed ? "rgb(100, 100, 100)" : "",
      }}
    >
      <CardContent>
        <IconButton
          color="primary"
          sx={{
            float: "left",
            position: "relative",
            top: "-4px",
            transform: "scale(0.9)",
          }}
          aria-label="todo tasks completed"
          onClick={(e) => props.onClick(props.todo.id, props.todo.completed, e)}
        >
          {props.todo.completed ? (
            <TaskAltIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>

        <Typography
          sx={{ mb: 1 }}
          variant="h6"
          component="div"
          style={{
            textDecoration: props.todo.completed ? "line-through" : "",
          }}
        >
          {props.todo.title}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography color="text.secondary" variant="body2">
          {props.todo.content}
        </Typography>

        {props.todo.class !== "" && (
          <Typography
            sx={{ mt: 2 }}
            color="text.secondary"
            style={{
              color:
                (props.todo.class === "School" && "#1a73e8") ||
                (props.todo.class === "Work" && "#a250f5") ||
                (props.todo.class === "Tag" && "#3c8039"),
              border:
                (props.todo.class === "School" && "1px solid #1a73e8") ||
                (props.todo.class === "Work" && "1px solid #a250f5") ||
                (props.todo.class === "Tag" && "1px solid #3c8039"),
              padding: "1px 4px",
              borderRadius: "6px",
              position: "relative",
              top: "0px",
              width: "12%",
              textAlign: "center",
              fontSize: "11px",
            }}
          >
            {props.todo.class}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
