import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

//--import icon
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal import
import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notification, Profile, SideBar} from './index';
import {Button} from '../componentsindex';


const NavBar = () => {
    return (
        <div>NavBar</div>
    )
}

export default NavBar