const useStyles = () => ({
    about: {
        width: "100%",
        textAlign: "justify !important",
	    textJustify: "inter-word !important",
    },
    aboutWidget: {
        backgroundColor: "#f7484e",
        position: "relative",
    },
    aboutText: {
        position: "relative",
        top: "5%",
        fontFamily: "'Montserrat', sans-serif", 
        textAlign: "center",
        color: "#fff",
        textShadow: "-10px 10px rgba(255, 255, 255, 0.2)",
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
    h6: {
        fontWeight: "600",
        fontSize: "1rem",     
    },
    p: {
        fontWeight: "400",
		fontSize: "15px",
        lineHeight: "180%",
    },
    quote: {
        fontWeight: "500",
        textAlign: "center",
    },
});

export default useStyles;
