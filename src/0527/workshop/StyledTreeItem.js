import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NoteIcon from "@mui/icons-material/Note";

// 這邊是google找ㄉ
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 2,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  //   labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function GmailTreeView(props) {
  const SchoolData = props.todos.filter(
    (todo) => todo.class === "School"
  ).length;
  const WorkData = props.todos.filter((todo) => todo.class === "Work").length;
  const TagData = props.todos.filter((todo) => todo.class === "Tag").length;

  return (
    <TreeView
      aria-label="gmail"
      onNodeFocus={(event, nodeId) => {
        //   .nativeEvent.relatedTarget.outerText
        // console.log(event);
        if (nodeId === "1") {
          props.handleFocus("All");
        }
        if (nodeId === "5") {
          props.handleFocus("School");
        }
        if (nodeId === "7") {
          props.handleFocus("Work");
        }
        if (nodeId === "8") {
          props.handleFocus("Tag");
        }
      }}
      defaultSelected="1"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        flexGrow: 1,
        maxWidth: 380,
        overflowY: "auto",
        overflowX: "hidden",
        padding: "0 1.5rem",
      }}
    >
      <StyledTreeItem nodeId="1" labelText="All Todos" labelIcon={NoteIcon} />
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="School"
          labelIcon={SupervisorAccountIcon}
          labelInfo={SchoolData}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Work"
          labelIcon={ForumIcon}
          labelInfo={WorkData}
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Tag"
          labelIcon={LocalOfferIcon}
          labelInfo={TagData}
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
    </TreeView>
  );
}
