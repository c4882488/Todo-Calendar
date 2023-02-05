import React from "react";
import useInput from "./useInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CreatTodo = (props) => {
  const { handleAddTodo } = props;
  const {
    value: title,
    error: titleError,
    errorMessage: titleErrorMessage,
    handleChange: handleTitleChange,
    reset: resetTitle,
  } = useInput("", true);
  const {
    value: completed,
    handleChange: handleCompletedChange,
    reset: resetCompleted,
  } = useInput(false);
  const {
    value: content,
    error: contentError,
    errorMessage: contentErrorMessage,
    handleChange: handleContentChange,
    reset: resetContent,
  } = useInput("", true);

  const [classes, setClasses] = React.useState("");

  // const handleError = ()=>{
  //   if(titleError || contentError){
  //     return true;
  //   }
  //   return false;
  // }

  const handleChange = (event) => {
    setClasses(event.target.value);
  };

  const onSubmit = (e) => {
    // if (titleError || contentError) {
    //   setState(True);
    // }
    e.preventDefault();
    if (titleErrorMessage && contentErrorMessage) {
      handleTitleChange(e);
      handleContentChange(e);
      return;
    }
    if (titleErrorMessage) {
      handleTitleChange(e);
      return;
    }
    if (contentErrorMessage) {
      handleContentChange(e);
      return;
    }

    handleAddTodo({
      title: title,
      content: content,
      class: classes,
      completed: completed,
    });
    resetTitle();
    resetCompleted();
    resetContent();
    handleClose();
  };

  const { handleClose } = props;

  return (
    <>
      <FormControl fullWidth component="fieldset">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mb: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="標題"
            variant="outlined"
            onChange={(e) => {
              handleTitleChange(e);
              console.log(title);
            }}
            defaultValue={title}
            required
            error={titleError}
          />

          <FormHelperText
            sx={{ color: titleError ? "red" : "" }}
            id="component-error-text"
          >
            {titleErrorMessage}
          </FormHelperText>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="內容"
            multiline
            rows={3}
            defaultValue={content}
            onChange={(e) => {
              handleContentChange(e);
              console.log(content);
            }}
            required
            error={contentError}
          />

          <FormHelperText
            sx={{ color: contentError ? "red" : "", mb: 2 }}
            id="component-error-text"
          >
            {contentErrorMessage}
          </FormHelperText>
        </Box>
        <Box sx={{ mb: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">類別</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={classes}
              label="類別"
              onChange={handleChange}
            >
              <MenuItem value="">-</MenuItem>
              <MenuItem value="School">School</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Tag">Tag</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                {...label}
                onChange={handleCompletedChange}
                checked={completed}
              />
            }
            label="是否完成"
            labelPlacement="start"
          />
        </Box>
        <Stack spacing={2} direction="row" sx={{}}>
          <Button variant="contained" onClick={(e) => onSubmit(e)}>
            新增
          </Button>
          <Button variant="outlined" onClick={() => handleClose()}>
            取消
          </Button>
        </Stack>
      </FormControl>
    </>
  );
};

export default CreatTodo;
