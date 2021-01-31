import { React } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";


const TodoList = (props)=>{


    return (
        <>
         <li>
        <IconButton color="secondary" onClick={() =>props.onDelete(props.id)}>
          <CancelIcon style={{ color: "#e90000" }} />
        </IconButton>
        {props.text}
      </li>
        </>
    )
}

export default TodoList;