import useStyles from "./style";
import { withStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const About = (props) => {
  const { classes } = props;

  return (
    <Box>
      <Grid container className={classes.about} id="about">
          <Grid item className={classes.aboutWidget} md={12} lg={4}>
            <Box className={classes.aboutText}>about</Box>
            {/* <div className={classes.dots}>
              <a href="#home" className={classes.dot}></a>
              <a href="#about" className={`${classes.dot} ${classes.dotActive}`}></a>
              <a href="#projects" className={classes.dot}></a>
              <a href="#contact" className={classes.dot}></a>
            </div> */}
          </Grid>
          <Grid item md={12} lg={8} sx={{px: 5}}>
              <Box style={{padding: "3.5vh"}}>
                <Box className={`${classes.text} ${classes.h5}`} style={{paddingTop: "6vh"}}>Hello There!</Box>
                <Box className={`${classes.text} ${classes.h6}`} style={{paddingTop: "3vh"}}>I love algorithms and design.</Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "3vh"}}>
                    I am a developer with the heart of a designer and the mind of a
                    busniessman.
                </Box>
                <Box className={`${classes.text} ${classes.h5}`} style={{paddingTop: "3.5vh"}}>Design</Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "2vh"}}>
                    Since highschool, I have led many design teams - of school and
                    university events, and of startups. While I may not be the best
                    designer, I do understand good design and the differnece between
                    a good and a bad design. I often find myself obsessing over the
                    simplest of details because...
                </Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "1vh"}}>
                    Good design in my opinion is simplistic, aesthetic, and most
                    importantly functional.
                </Box>
                <Box className={`${classes.text} ${classes.h5}`} style={{paddingTop: "3.5vh"}}>Development</Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "2vh"}}>
                    While I have experimented with just about everything... be it
                    game development in Unity or logical programming in Prolog, I
                    enjoy the most creating web and mobile apps. As of recently, I
                    have been learning blockchain and machine learning and so far
                    I'm enjoying it.
                </Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "1vh"}}><i>"I wish I could leetcode all day, every day"</i> - me solving
                    coding challenges.</Box>
                <Box className={`${classes.text} ${classes.h5}`} style={{paddingTop: "3.5vh"}}>Business</Box>
                <Box className={`${classes.text} ${classes.p}`} style={{paddingTop: "2vh"}}>
                    Although I do love to code, the truth is I don't see myself as a
                    full time programmer. Working on new ideas is where I will be
                    investing most of my energies at. Not only do I enjoy studying
                    economics, but I have also spent a lot of time learning digital
                    marketing and reading different books on finance and value
                    creation.
                </Box>
                <Box className={`${classes.text} ${classes.quote}`} style={{paddingTop: "4vh", paddingBottom: "6vh"}}>
                    "Alag hun, ghalat nahin"
                </Box>
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(useStyles)(About);
