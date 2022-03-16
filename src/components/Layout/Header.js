import React, {Fragment} from "react";
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Spinoza</h1>
            <HeaderButton onClick={props.onShowSubmission}/>
        </header>
    </Fragment>
};

export default Header;