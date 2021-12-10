import useStyles from "./style";
import { withStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const About = (props) => {
  const { classes } = props;

  return (
    <Box>
      <Grid container className={classes.about}>
          <Grid item className={classes.aboutWidget} md={12} lg={4}>
            <h1 className={classes.aboutText}>about</h1>
            <div className={classes.dots}>
              <a href="#home" className={classes.dot}></a>
              <a href="#about" className={`${classes.dot} ${classes.dotActive}`}></a>
              <a href="#projects" className={classes.dot}></a>
              <a href="#contact" className={classes.dot}></a>
            </div>
          </Grid>
          <Grid item md={12} lg={8} sx={{px: 5}}>
              <Box px={{sm: 0, md: 5}} mx={{sm: 0, md: 5}} sx={{pt: 3, pb: 5}} mb={{sm: 0, md: 5}}>
                <Box className={`${classes.text} ${classes.h5}`} sx={{ mt:5, pt: 5 }}>Hello There!</Box>
                <Box className={`${classes.text} ${classes.h6}`} sx={{pt: 3}}>I love algorithms and design.</Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{ pt: 3}}>
                    I am a developer with the heart of a designer and the mind of a
                    busniessman.
                </Box>
                <Box className={`${classes.text} ${classes.h5}`} pt={{sm: 3, md:4}}>Design</Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{pt: 2}}>
                    Since highschool, I have led many design teams - of school and
                    university events, and of startups. While I may not be the best
                    designer, I do understand good design and the differnece between
                    a good and a bad design. I often find myself obsessing over the
                    simplest of details because...
                </Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{pt: 1}}>
                    Good design in my opinion is simplistic, aesthetic, and most
                    importantly functional.
                </Box>
                <Box className={`${classes.text} ${classes.h5}`} sx={{pt: 3}}>Development</Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{pt: 2}}>
                    While I have experimented with just about everything... be it
                    game development in Unity or logical programming in Prolog, I
                    enjoy the most creating web and mobile apps. As of recently, I
                    have been learning blockchain and machine learning and so far
                    I'm enjoying it.
                </Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{pt: 1}}><i>"I wish I could leetcode all day, every day"</i> - me solving
                    coding challenges.</Box>
                <Box className={`${classes.text} ${classes.h5}`} sx={{pt: 3}}>Business</Box>
                <Box className={`${classes.text} ${classes.p}`} sx={{pt: 2}}>
                    Although I do love to code, the truth is I don't see myself as a
                    full time programmer. Working on new ideas is where I will be
                    investing most of my energies at. Not only do I enjoy studying
                    economics, but I have also spent a lot of time learning digital
                    marketing and reading different books on finance and value
                    creation.
                </Box>
                <Box className={`${classes.text} ${classes.quote}`} sx={{pt: 5, pb: 2}}>
                    "Alag hun, ghalat nahin"
                </Box>
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(useStyles)(About);
