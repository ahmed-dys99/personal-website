const useStyles = () => ({
  home: {
    backgroundColor: "#111",
    width: "100%",
    height: "100vh",
  },
  "@keyframes spin-a": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  "@keyframes spin-b": {
    from: { transform: "rotate(360deg)" },
    to: { transform: "rotate(0deg)" },
  },
  anim: {
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  anim1: {
    animationName: "$spin-a",
    animationDuration: "10s",
  },
  anim2: {
    animationName: "$spin-b",
    animationDuration: "5s",
  },
  anim3: {
    animationName: "$spin-b",
    animationDuration: "8s",
  },
  anim4: {
    animationName: "$spin-a",
    animationDuration: "7s",
  },
  homeDots: {
    position: "relative",
    top: "5vh",
    textAlign: "center",
  },
  dot: {
    height: "0.9vh",
    width: "0.9vh",
    margin: "0 0.3vh",
    backgroundColor: "rgba(0,0,0,0)",
    border: "1.5px solid #fff",
    borderRadius: "50%",
    display: "inline-block",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  dotActive: {
    backgroundColor: "#fff !important",
  },
  myNav: {
    width: "100%",
    position: "absolute",
    bottom: "4vh",
    textAlign: "center",
  },
  myNavChild: {
    display: "flex",
    justifyContent: "center",
  },
  myNavList: {
    textAlign: "center",
    padding: "0",
  },
  myNavListItem: {
    display: "inline-block",
    paddingLeft: "1.5vh",
    paddingRight: "1.5vh",
    "&:hover": {
      "& a": {
        fontWeight: "500 !important",
      },
    },
  },
  myNavListItemActive: {
    "& a": {
      fontWeight: "500 !important",
    },
  },
  myNavListItemA: {
    color: "#f03e30",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "300",
    textDecoration: "none",
    fontSize: "1.9vh",
  },
  myName: {
    position: "relative",
    color: "white",
    verticalAlign: "middle",
    top: "50%",
    transform: "translateY(-100%)",
    textAlign: "center",
    "@media (max-width: 1000px)": {
      transform: "translateY(-150%)",
    }
  },
  myNameName: {
    marginTop: "0",
    marginBottom: "1.5vh",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "500",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "4vh",
  },
  resume: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#eee",
    fontWeight: "300",
    fontSize: "1.8vh",
  },
  resumeLink: {
    textDecoration: "none",
    color: "#f03e30",
    fontWeight: "300",
    "&:hover": {
      fontWeight: "400",
    },
  },
});

export default useStyles;
