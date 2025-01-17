import React, {useState} from 'react';

import classes from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';

import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";

function TODO() {
    TODO2();
}

function TODO2() {
    throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        // setCount(prev => prev + 1);
        TODO();
    }

    // TODO(534245);

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    // if(__ENV__ === 'development') {

    // }
    
    return (
        <div data-testid="App.DataTestId">
            <h1 data-testid="Platform">PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avatarPng} alt="" />
                <img width={100} height={100} src={avatarJpg} alt="" />
            </div>
            <div>
                <Calendar width={50} height={50} fill={'red'} />
            </div>
            <Link to={'/about'}>About</Link>
            <br />
            <Link to={'/shop'}>Shop</Link>
            <h1 className={classes.value} >{count}</h1>
            <button className={classes.button} onClick={increment}><span>sadsad</span></button>
            <Outlet />
            <About />
        </div>
    )
}