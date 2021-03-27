import React, {useState} from 'react';
import {
    Container, Icon,
} from '../AccountElements';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import {makeStyles} from "@material-ui/core/styles";
import Reservations from './Reservations'
import {Grid} from "@material-ui/core";
import UserList from "./userList.json";
import AccountDetailsClass from "./AccountDetailsClass";
import ApiService from "../ApiService";
import * as PropTypes from "prop-types";
import './fornow.css'
import axios from "axios";


// f5c3e773-1ed3-4e3c-b73f-7fe230536f2f

// http://localhost:3000/account?token=69c398ef-7f31-44e5-91b0-a1be359ac654


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 10,
    },
    accSize: {
        width: '75%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        alignContent: 'center',
        margin: 'auto 5em',
        textAlign: 'center'
    },
    details: {
        justifyContent: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
}));


class MessageSection extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://localhost:8080/api/v1/message';
        fetch(apiUrl).then((response) => response.json())
            .then((data) => console.log("testing data:", data))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let message = document.getElementById('messageBox').innerText;
        // check for bad input
        axios.post('http://localhost:8080/api/v1/message', message).then(response => {
            if (response.status === 200) {
                console.log(message);
            }
        })
    }

    //then make that into a message

    render() {
        return <>
            <div className="extra w-col w-col-3">
                <div id="Message-Block" className="div-block-2">
                    <div className="<Messages">
                    <ul id="chat">
                        <li className="you">
                            <div className="message-status">
                                <h2>Vincent</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div className="message">
                                This is the first message
                            </div>
                        </li>
                        <li className="me">
                            <div className="message-status">
                                <h3>10:12AM, Today</h3>
                                <h2>Vincent</h2>
                            </div>
                            <div className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="w-form">
                    <textarea placeholder="Type your message" className="text-field w-input" id="messageBox"> </textarea>
                    <input type="submit" data-wait="Please wait..." onSubmit={this.handleSubmit}
                           className="submit-button-2 w-button"/>
                </div>
            </div>
        </>
    }
}

MessageSection.propTypes =
    {
        account: PropTypes.shape({
            password: PropTypes.string,
            address: PropTypes.string,
            last_name: PropTypes.string,
            phone_number: PropTypes.string,
            isLoaded: PropTypes.bool,
            first_name: PropTypes.string,
            email: PropTypes.string,
            enabled: PropTypes.bool
        })
    }
;
const Account = () => {

        // clears auth_token when leaves page
        window.addEventListener("beforeunload", function (e) {
            localStorage.clear();
        });

        let account = {
            isLoaded: false,
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone_number: "",
            address: "",
            enabled: false
        }

        function checkAuth() {
            const auth_token = localStorage.getItem('token');
            if (auth_token === null) {
                document.location.href = 'http://localhost:3000/';
            } else {
                // let res = await ApiService.accountDetails(auth_token).then(response => {
                ApiService.accountDetails("jones.matthew@edu.sait.ca").then((response) => {
                    account.first_name = response.data.first_name;
                    account.last_name = response.data.last_name;
                    account.email = response.data.email;
                    account.password = response.data.password;
                    account.phone_number = response.data.phone_number;
                    account.address = response.data.address;
                    account.enabled = response.data.enabled;
                    account.isLoaded = true;
                    console.log(account)


                }).catch(e => {
                    console.log(e);
                });
            }
        }


        const [newAccount, setAccount] = useState(account);


        checkAuth();
        // console.log(account)

        const classes = useStyles();
        // let user = User.loadUser();
        // let user = UserList.account;

        return (
            <>
                <Container className={classes.root}>
                    <Icon className={classes.icon} to='/'>Bakkatown Belize</Icon>
                    <Grid
                        container
                        spacing={1}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Accordion className={classes.accSize} defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls='panel1c-content'
                                id='panel1c-header'>
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>
                                        Account
                                    </Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography className={classes.secondaryHeading}>
                                        Account Settings
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.details}>
                                <AccountDetailsClass account={account}/>
                            </AccordionDetails>
                            <Divider/>
                        </Accordion>
                        <Accordion className={classes.accSize}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls='panel1c-content'
                                id='panel1c-header'>
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>
                                        Reservations
                                    </Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography className={classes.secondaryHeading}>
                                        See your Reservations
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.details}>
                                <Reservations account={account}/>
                            </AccordionDetails>
                            <Divider/>
                        </Accordion>
                        <Accordion className={classes.accSize}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls='panel1c-content'
                                id='panel1c-header'>
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>
                                        Messages
                                    </Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography className={classes.secondaryHeading}>
                                        Message us
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.details}>
                                <MessageSection account={account}/>
                            </AccordionDetails>
                            <Divider/>
                        </Accordion>
                    </Grid>
                </Container>
            </>
        );
    }
;

export default Account;


