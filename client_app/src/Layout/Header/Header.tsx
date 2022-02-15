import { observer } from "mobx-react-lite";
import React, { Fragment, useState } from "react";

import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar/Topbar";

function Header() {

    const [icons, setIcons] = useState('icon-area');
    const [navbar, setNavbar] = useState('');
    const [navigationPosition, setNavigationPosition] = useState('');

    const HandleOnScroll = () => {
        if (window.scrollY >= 100) {
            setIcons('d-none');
            setNavbar('bg-color');
            setNavigationPosition('fixed-top');
        }
        else if (window.scrollY >=50) {
            setIcons('d-block icon-area');
            setNavbar('');
            setNavigationPosition('');
        }
    };

    window.addEventListener('scroll', HandleOnScroll);

    return (
        <Fragment>
        <Topbar />
        <Navbar navbar={navbar} icons={icons} navigationPosition={navigationPosition} />
    </Fragment>
    )
}

export default observer(Header)
