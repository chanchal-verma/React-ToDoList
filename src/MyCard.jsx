import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const MyCard = () => {
  const classes = useStyles();

  const [ListItem, NewListItem] = useState("");
  const [ItemArray, NewItemArray] = useState([]);

  const NewItem = (e) => {
    NewListItem(e.target.value);
  };

  const AddItem = () => {
    NewItemArray((oldItems) => {
      return [...oldItems, ListItem]
    });
    NewListItem("");
  };

  const deleteItem = (ItemId) => {
    NewItemArray((oldItems)=>{
      return oldItems.filter((item,index) => index!==ItemId);

    })
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", minHeight: "23rem" }}>
        <h3 className="card-title">
          <PlaylistAddCheckIcon fontSize="large" /> To-Do List
        </h3>
        <div className="searchSection">
          <input
            placeholder="Add a Item"
            className={classes.root}
            type="text"
            onChange={NewItem}
            name="Item"
            value={ListItem}
          />
          <IconButton color="primary" onClick={AddItem}>
            <AddIcon />
          </IconButton>
        </div>
        <ul>
          {ItemArray.map((ItemVal , index) => {
            return (
              <TodoList
                key={index}
                id = {index}
                text={ItemVal}
                onDelete={deleteItem}
              />
            );
          })}
          {/* {ItemArray} */}
        </ul>
      </div>
    </>
  );
};

export default MyCard;
