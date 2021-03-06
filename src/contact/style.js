const useStyles = () => ({
    contact: {
        width: "100%",
        textAlign: "justify !important",
	    textJustify: "inter-word !important",
    },
    contactWidget: {
        backgroundColor: "#292929",
        position: "relative",
        minHeight: "100vh",
    },
    contactWidgetData: {
        minHeight: "100vh",
    },
    contactText: {
        position: "relative",
        top: "5vh",
        fontFamily: "'Montserrat', sans-serif", 
        textAlign: "center",
        color: "#fff",
        textShadow: "-1vh 1vh rgba(255, 255, 255, 0.2)",
        fontWeight: "700",
        fontSize: "4vh",
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
    text: {
        color: "#333",
        fontFamily: "'Montserrat', sans-serif",
    },
    h5: {
        fontWeight: "500",
        fontSize: "1.25rem",        
    },
    p: {
        fontWeight: "400",
		fontSize: "15px",
        lineHeight: "180%",
    },
    link: {
        fontWeight: "400",
	    color: "#f7484e",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
			color: "red",
        },
    },
    socialList: {
        display: "flex",
        justifyContent: "center",
        "& li": {
            display: "inline",
            "& a": {
                color: "#333",
                "&:hover": {
                    textDecoration: "none",
                    "& img": {
                        filter: "opacity(80%)",
                    }
                }
            },
        },
    },
    sIcon: {
        padding: "2vh",
        width: "3.5vh",
        filter: "opacity(60%)",
    }
});

export default useStyles;