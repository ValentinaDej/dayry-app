import classes from "./SideBar.module.scss";
import { Title } from "../../shared/Title/Title";

export const SideBar = ({ ...props }) => {
  return (
    <div className={classes.container} {...props}>
      <Title className={classes.logo}>DAYRY APP</Title>
      <div className={classes.text}>Comment whit no sense</div>
    </div>
  );
};
