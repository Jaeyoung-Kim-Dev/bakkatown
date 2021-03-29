import React from 'react';
import {ButtonBase, Grid, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {A} from "../AccountElements";
import ReservationList from "./reservationList.json" //temp

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    clickable: {
        marginBottom: 10
    }
}));


const Reservations = (account) => {
    const classes = useStyles();
    // const reservations = user.reservations; // when we make calls
    return (
        <>
            {/*{account.reservations.map((reservation) => (*/}
            {ReservationList.reservation.map((reservation) => (
                <div key={reservation.id} className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt={reservation.name}
                                         src={require(`../../../images/rooms/${reservation.image}.jpg`)?.default}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {reservation.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {reservation.startDate} - {reservation.endDate}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            ID: {reservation.id}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.clickable}
                                                variant="subtitle1">${reservation.total}</Typography>
                                    <Grid item className={classes.clickable}>
                                        <Typography variant="link" style={{cursor: 'pointer'}}>
                                            <a href='/'>Request Change</a>
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.clickable}>
                                        <Typography variant="link" style={{cursor: 'pointer'}}>
                                            <a href='/'>Message</a>
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.clickable}>
                                        <Typography variant="link" style={{cursor: 'pointer'}}>
                                            <a href='/'>Leave Review</a>
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.clickable}>
                                        <Typography variant="link" style={{cursor: 'pointer'}}>
                                            <a href='/'>Cancel</a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            ))}
        </>
    );
};


export default Reservations;


/* template
<div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Default Template
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        April 10 - April 15
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.clickable} variant="subtitle1">$100000.00</Typography>
                                <Grid item className={classes.clickable}>
                                    <Typography variant="link" style={{ cursor: 'pointer' }}>
                                        Change Date
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.clickable}>
                                    <Typography variant="link" style={{ cursor: 'pointer' }}>
                                        Message
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.clickable}>
                                    <Typography variant="link" style={{ cursor: 'pointer' }}>
                                        Cancel
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

 */