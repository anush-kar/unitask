import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import AddIcon from '@mui/icons-material/Add';

export const SidebarData = [
    {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
    },
    {
    title: "Tasks",
    icon: <TaskIcon />,
    link: "/Tasks",
    },
    {
    title: "Post task",
    icon: <AddIcon />,
    link: "/PostTask",
    },
]