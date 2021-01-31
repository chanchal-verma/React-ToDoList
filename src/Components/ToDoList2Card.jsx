import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import ToDoList2 from '../Components/ToDoList2'


const ToDoList2Card = () => {
  const [Item, updatedItem] = useState("");
  const [Items, updatedItems] = useState([]);

  const ItemChanged = (event) => {
    updatedItem(event.target.value);
  };

  const ItemAdded = () => {
      console.log("clicked")
    updatedItems((oldItems) => {
      return [...oldItems, Item];
    });
    updatedItem("");

  };

//   const DeleteItem = (itemId) =>{
//       updatedItems((filtered)=>{
//           return filtered.filter((item , index)=>itemId !== index)
//       })
//   } 

  return (
    <>
      <div className="card" style={{ width: "18rem", minHeight: "23rem" }}>
        <h3 className="card-title">
          <PlaylistAddCheckIcon fontSize="large" /> TODO LIST
        </h3>
        <div className="searchSection">
          <input
            type="text"
            placeholder="Add An Item"
            name="Item"
            onChange={ItemChanged}
            value={Item}
          />
          <IconButton className="addButton" color="primary" onClick={ItemAdded}>
            <AddIcon />
          </IconButton>
        </div>
        <ul>
          {Items.map((item, index) => {
            return (<ToDoList2 
            key={index}
            id={index}
            text={item}
            />);
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList2Card;
