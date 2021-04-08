import {makeStyles} from "@material-ui/core";

export const AccordionStyle = makeStyles(theme => ({
    wrapper: {
        width: '100%',
        height: '100%',
        padding: '1em',
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    accordion: {
        marginLeft: '0.5em',
        marginRight: '0.5em',
        marginTop: '1em',
        width: '90%',
        borderRadius: "0px 0px 10px 10px",
    },
    headingBar: {
        backgroundColor: "#30333b",
        border: "black 1px solid",
        boxShadow: "0 1px 2px 1px black",
        cursor: "pointer",
    },
    heading: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: "1.5rem",
        color: "#cfcfcf",
        flexBasis: '40%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: ".85rem",
        color: "#929191",
        // position: "absolute",
        // top: '50%',
        transform: "translateY(40%)"
    },
    details: {
        backgroundColor: "#fff",
        borderRadius: "0px 0px 10px 10px",
        padding: '2px',
    },
    button: {
        padding: theme.spacing(1),
    },
}));
export default AccordionStyle;

export const tabStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#353535",
    },
    tabs: {
        color: "white",
    },
}));

export const reservationPopup = makeStyles((theme) => ({
    textField: {
        margin: '1em',
        width: 225,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        display: 'flex',
        flexDirection: "column",
        margin: '1em',
        minWidth: 120,
    },
    center: {
        margin: "auto",
    }
}));
