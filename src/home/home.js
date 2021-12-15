import redCircle from "../assets/svg/red-circle.svg";
import halfCircle from "../assets/svg/half-circle.svg";
import straightDottedCircle from "../assets/svg/straight-dotted-circle.svg";
import quarterDash from "../assets/svg/quarter-dash.svg";
import quarter from "../assets/svg/quarter.svg";
import { Box } from "@mui/system";
import useStyles from "./styles";
import { withStyles } from "@mui/styles";

const Home = (props) => {
  const { classes } = props;

  return (
    <div id="home" className={classes.home}>
      <div className={classes.homeBackground}>
        <img
          src={redCircle}
          style={{ width: "8vw", position: "absolute", top: "8%", left: "10%" }}
        />
        <img
          src={halfCircle}
          className={`${classes.anim} ${classes.anim1}`}
          style={{ width: "18vw", position: "absolute", top: "-18%" }}
        />
        <img
          src={quarterDash}
          style={{
            width: "10vw",
            position: "absolute",
            bottom: "0",
            left: "-5px",
          }}
        />
        <img
          src={straightDottedCircle}
          className={`${classes.anim} ${classes.anim2}`}
          style={{
            width: "10vw",
            position: "absolute",
            top: "40%",
            left: "5%",
          }}
        />
        <img
          src={quarter}
          style={{
            width: "10vw",
            position: "absolute",
            top: "-5px",
            right: "1px",
            transform: "rotate(-90deg)",
          }}
        />
        <img
          src={straightDottedCircle}
          className={`${classes.anim} ${classes.anim3}`}
          style={{
            width: "10vw",
            position: "absolute",
            right: "15%",
            top: "8%",
          }}
        />
        <img
          src={redCircle}
          style={{
            width: "8vw",
            position: "absolute",
            bottom: "30%",
            right: "10%",
          }}
        />
        <img
          src={halfCircle}
          className={`${classes.anim} ${classes.anim4}`}
          style={{
            width: "12vw",
            position: "absolute",
            right: "5%",
            bottom: "13%",
          }}
        />
      </div>

      <div className={classes.homeDots}>
        <a href="#home" className={`${classes.dot} ${classes.dotActive}`}></a>
        <a href="#about" className={classes.dot}></a>
        <a href="#projects" className={classes.dot}></a>
        <a href="#contact" className={classes.dot}></a>
      </div>

      <div className={classes.myName}>
        <Box className={classes.myNameName}>Ahmed Haroon</Box>
        <Box className={classes.resume}>
          Go straight to my{" "}
          <a className={classes.resumeLink} href="https://drive.google.com/file/d/1Ix6N1oTgQdDEAIMB1ZZvSn8XS-kkP2sy/view?usp=sharing" target="_blank">
            resume.
          </a>
        </Box>
      </div>

      <div className={classes.myNav}>
        <div className={classes.myNavChild}>
          <ul className={classes.myNavList}>
            <li
              className={`${classes.myNavListItem} ${classes.myNavListItemActive}`}
            >
              <a className={classes.myNavListItemA} href="#home">
                Home
              </a>
            </li>
            <li className={classes.myNavListItem}>
              <a className={classes.myNavListItemA} href="#about">
                About
              </a>
            </li>
            <li className={classes.myNavListItem}>
              <a className={classes.myNavListItemA} href="#projects">
                Projects
              </a>
            </li>
            <li className={classes.myNavListItem}>
              <a className={classes.myNavListItemA} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Home);
