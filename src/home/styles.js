
const useStyles = () => ({
    home: {
        backgroundColor: "#111",
		width: "100%",
        height: "100vh",
    },
    homeDots: {
        position: "relative",
        top: "5vh",
        textAlign: "center",
    },
    dot: {
        height: "6px",
        width: "6px",
        margin: "0 3px",
        backgroundColor: "rgba(0,0,0,0)",
        border: "2px solid #fff",
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
        paddingLeft: "15px",
        paddingRight: "15px", 
        "&:hover": {
            "& a": {
                fontWeight: "500 !important",
            },
        },
        '@media (max-width: 400px) and (max-height: 740px)': {
            fontSize: "13px",
            paddingLeft: "8px",
            paddingRight: "8px",
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
    },
    myName: {
        position: "relative",
        color: "white",
        verticalAlign: "middle",
        top: "50%",
        transform: "translateY(-5.5rem)", 
        textAlign: "center",
        '@media (max-width: 400px) and (max-height: 740px)': {
            transform: "translateY(-5.5rem)",
        },
    },
    myNameName: {
        marginTop: "0",
        marginBottom: "18px",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "500",
        '@media (max-width: 400px) and (max-height: 740px)': {
            fontSize: "30px",
        },
    },
    resume: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "15px",
        color: "#eee",
        fontWeight: "300",
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