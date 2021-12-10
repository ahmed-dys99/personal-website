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
          <Grid container className={classes.contact}>
            <Grid item className={classes.contactWidget} md={12} lg={4}>
                <h1 className={classes.contactText}>contact</h1>
                <div className={classes.dots}>
                    <a href="#home" className={classes.dot}></a>
                    <a href="#about" className={classes.dot}></a>
                    <a href="#projects" className={classes.dot}></a>
                    <a href="#contact" className={`${classes.dot} ${classes.dotActive}`}></a>
                </div>
            </Grid>
            <Grid item md={12} lg={8} sx={{px: 5}}>
                <Box px={{sm: 0, md: 5}} mx={{sm: 0, md: 5}} sx={{pt: 3, pb: 5}} mb={{sm: 0, md: 5}}>
                    <Box className={`${classes.text} ${classes.h5}`} sx={{ mt:5, pt: 5 }}>Want to know more about me? Hit me up. I'd love to talk.</Box>
					<Box className={`${classes.text} ${classes.p}`} sx={{ mb:0, pt: 4 }}>I'm the most active on my email:</Box>
                    <Box sx={{ pt: 1 }}><a className={`${classes.text} ${classes.link}`} href="mailto:ahmed.dys99@gmail.com">ahmed.dys99@gmail.com</a></Box>
					<Box className={`${classes.text} ${classes.p}`} sx={{ pt: 3 }}>You can also connect with me on <a className={`${classes.text} ${classes.link}`} href="https://www.linkedin.com/in/ahmed-dys99/">Linkedin</a>.</Box>
                    <Box className={classes.socialIcons} sx={{ pb: 5, mb: 5 }}>
                        <Box className={`${classes.text} ${classes.h5}`} sx={{mb: 2}} >Ahmed Haroon</Box>
                        <Box className={`${classes.text} ${classes.p}`}>I dream big.</Box>
                        <Box sx={{pb: 3, pt: 5}}>
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
                                    <a href="https://twitter.com/lenodo_eastern">
                                        <img className={classes.sIcon} src={twitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/lenodoeastern">
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