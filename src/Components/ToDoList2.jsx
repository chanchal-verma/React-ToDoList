import React , {useState} from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

const ToDoList2 = (props) => {

let line = false;
const [prevLine , updatedLine] = useState(line);

const DeleteItem = ()=>{
    updatedLine(true);
}

  return (
    <>
    <li style={{textDecoration : prevLine?"line-through":"none"}}>
      <IconButton className="cancelButton" color="secondary" onClick={DeleteItem}>
        <CancelIcon style={{ color: "#e90000" }} />
      </IconButton>
      {props.text}</li>
    </>
  );
};

export default ToDoList2;
