import React from "react";
import "../App.css";
import { SidebarData } from './SidebarData'
import { List, ListItem } from "@mui/material";

export default function Sidebar() {
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val,key) => {
                    return(
                        <li 
                        key={key} 
                        className="Row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                            {" "}
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">{val.title}</div>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}