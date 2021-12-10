const useStyles = () => ({
  projects: {
    width: "100%",
    textAlign: "justify !important",
    textJustify: "inter-word !important",
  },
  projectsWidget: {
    backgroundColor: "white",
    position: "relative",
  },
  projectsText: {
    position: "relative",
    top: "5%",
    fontFamily: "'Montserrat', sans-serif", 
    textAlign: "center",
    color: "#555",
    textShadow: "-10px 10px rgba(85, 85, 85, 0.2)",
    fontWeight: "700",
  },
  dots: {
    position: "relative",
    top: "82%",
    textAlign: "center",
        "@media (max-height: 700px)": {
            top: "80",
        },
  },
  dot: {
    height: "6px",
    width: "6px",
    margin: "0 3px",
    backgroundColor: "rgba(0,0,0,0)",
    border: "1.5px solid #555",
    borderRadius: "50%",
    display: "inline-block",
    "&:hover": {
        backgroundColor: "#555 !important",
    },
  },
  dotActive: {
    backgroundColor: "#555 !important",
  },
  myCard: {
    position: "relative",
    height: "100vh",
  },
  text: {
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
  },
  h5: {
    fontWeight: "500",
    fontSize: "1.15rem",        
  },
  p: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "180%",
  },
  id: {
    position: "absolute",
    top: "0",
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  projImageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  projImage: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -55%)",
  },
  description: {
    position: "absolute",
    bottom: "0",
    paddingBottom: "5%",
    paddingLeft: "5%",
  }
});

export default useStyles;
