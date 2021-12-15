import useStyles from "./style";
import { withStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";


const Contact = (props) => {
    const { classes } = props;
  
    return (
      <Box>
          <Grid container className={classes.contact} id="contact">
            <Grid item className={classes.contactWidget} md={12} lg={4}>
                <h1 className={classes.contactText}>contact</h1>
                {/* <div className={classes.dots}>
                    <a href="#home" className={classes.dot}></a>
                    <a href="#about" className={classes.dot}></a>
                    <a href="#projects" className={classes.dot}></a>
                    <a href="#contact" className={`${classes.dot} ${classes.dotActive}`}></a>
                </div> */}
            </Grid>
            <Grid item md={12} lg={8} sx={{px: 5}} className={classes.contactWidgetData}>
                <Box style={{padding: "3.5vh"}}>
                    <Box className={`${classes.text} ${classes.h5}`} style={{paddingTop: "6vh"}}>Want to know more about me? Hit me up. I'd love to talk.</Box>
					<Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "5vh"}}>I'm the most active on my email:</Box>
                    <Box style={{paddingTop: "1vh"}}><a className={`${classes.text} ${classes.link}`} href="mailto:ahmed.dys99@gmail.com">ahmed.dys99@gmail.com</a></Box>
					<Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "3vh"}}>You can also connect with me on <a className={`${classes.text} ${classes.link}`} href="https://www.linkedin.com/in/ahmed-dys99/">Linkedin</a>.</Box>
                    <Box className={classes.socialIcons} style={{paddingTop: "10vh", paddingBottom: "4vh"}}>
                        <Box className={`${classes.text} ${classes.h5}`} style={{paddingBottom: "2vh"}} >Ahmed Haroon</Box>
                        <Box className={`${classes.text} ${classes.p}`}>I dream big.</Box>
                        <Box style={{paddingTop: "8vh"}}>
                            <ul className={classes.socialList}>
                                <li>
                                    <a href="https://www.linkedin.com/in/ahmed-dys99/">
                                        <img className={classes.sIcon} src={linkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100004158198029">
                                        <img className={classes.sIcon} src={facebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ahmed_dys99">
                                        <img className={classes.sIcon} src={twitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ahmed-dys99">
                                        <img className={classes.sIcon} src={github} />
                                    </a>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Grid>
          </Grid>
      </Box>
    );
};

export default withStyles(useStyles)(Contact);