import classes from "./HeaderButton.module.css";
import { useContext, useEffect, useState } from "react";
import SubmitContext from "../store/submit-context";

const HeaderButton = (props) => {
  const [buttonHighlighted, setHighlighted] = useState(false);
  const subCtx = useContext(SubmitContext);

  const numberOfSubItems = subCtx.items.reduce((subNumber, item) => {
    return subNumber + item.times;
  }, 0);

  const { items } = subCtx;

  const btnClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (subCtx.items.length === 0) {
      return;
    }
    setHighlighted(true);

    const timer = setTimeout(() => {
      setHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>

      <span>Your Submission</span>

      <span className={classes.badge}>{numberOfSubItems}</span>
    </button>
  );
};

export default HeaderButton;