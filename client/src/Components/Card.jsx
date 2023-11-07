import React from "react";
import '../App.css'
import { Button } from "@mui/material";

export default function Card(props) {
    return(
        <div className="card">
            <div className="title">{props.title}</div>
            <p className="description">{props.description}</p>
            <p className="author"><span className="subhead">Requested by: </span>{props.author}</p>
            <div className="specific--container">
                <div className="specifics"><span className="subhead">Fee: </span>{props.price}</div>
                {/*<div className="specifics"><span className="subhead">Time: </span>{props.time}</div>*/}
            </div>
            <Button variant="contained">Accept</Button>
        </div>
    )
}