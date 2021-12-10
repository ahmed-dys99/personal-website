import useStyles from "./styles";
import { withStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import damerch from "../assets/projects/4.png";
import cascade from "../assets/projects/1.png";

const Projects = (props) => {
  const { classes } = props;

  return (
    <Box>
      <Grid container className={classes.projects} id="projects">
        <Grid item className={classes.projectsWidget} md={12} lg={4}>
          <h1 className={classes.projectsText}>projects</h1>
          {/* <div className={classes.dots}>
            <a href="#home" className={classes.dot}></a>
            <a href="#about" className={classes.dot}></a>
            <a href="#projects" className={`${classes.dot} ${classes.dotActive}`}></a>
            <a href="#contact" className={classes.dot}></a>
          </div> */}
        </Grid>
        <Grid item md={12} lg={8} sx={{px: 0, py: 0}}>
          <div>
            <a href="https://github.com/ahmed-dys99/damerch-website" target="_blank">
              <div className={classes.myCard} style={{backgroundColor: "#005ba9"}}>
                <Box className={`${classes.text} ${classes.p} ${classes.id}`}>001</Box>
                <div className={classes.projImageContainer}>
                  <img className={classes.projImage} src={damerch} />
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  <Box className={classes.h5} style={{paddingBottom: "2px"}}>Damerch</Box>
                  <Box className={classes.p}>Design, Development, Business</Box>
  							</div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/ahmed-dys99/cascade-website" target="_blank">
              <div className={classes.myCard} style={{backgroundColor: "#e28e4e"}}>
                <Box className={`${classes.text} ${classes.p} ${classes.id}`}>002</Box>
                <div className={classes.projImageContainer}>
                  <img className={classes.projImage} src={cascade} />
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  <Box className={classes.h5} style={{paddingBottom: "2px"}}>Cascade</Box>
                  <Box className={classes.p}>Development</Box>
  							</div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/ahmed-dys99/whatsapp-starting-flutter" target="_blank">
              <div className={classes.myCard} style={{backgroundColor: "#e24e5f"}}>
                <Box className={`${classes.text} ${classes.p} ${classes.id}`}>003</Box>
                <div className={classes.projImageContainer}>
                  <img className={classes.projImage} src={cascade} />
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  <Box className={classes.h5} style={{paddingBottom: "2px"}}>Whatsapp Login</Box>
                  <Box className={classes.p}>Development</Box>
  							</div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/ahmed-dys99/travel-app-flutter" target="_blank">
              <div className={classes.myCard} style={{backgroundColor: "#4e71e2"}}>
                <Box className={`${classes.text} ${classes.p} ${classes.id}`}>004</Box>
                <div className={classes.projImageContainer}>
                  <img className={classes.projImage} src={cascade} />
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  <Box className={classes.h5} style={{paddingBottom: "2px"}}>Travel App</Box>
                  <Box className={classes.p}>Development</Box>
  							</div>
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(useStyles)(Projects);
