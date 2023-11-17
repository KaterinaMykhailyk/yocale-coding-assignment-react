import React from 'react';

import { Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useTicketDetails } from 'components/pages/ticketDetails/useTicketDetails';
import Loader from 'components/UI/atoms/loader/Loader';

import styles from './TicketDetails.module.scss';
export const TicketDetailsPage = () => {
    const params = useParams();
    const { ticket, isLoading } = useTicketDetails(params.id);

    return isLoading || !ticket.length ? (
        <Loader />
    ) : (
        <Paper className={styles.Wrapper}>
            <h1>{`Ticket ID: ${ticket[0].id}`} </h1>
            <span>{`Ticket Number: ${ticket[0].number}`} </span>
            <span>{`Ticket Number: ${ticket[0].status}`} </span>
        </Paper>
    );
};
