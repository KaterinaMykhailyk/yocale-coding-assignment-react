import { useEffect, useState } from 'react';

import { getTickets } from 'APIServices/tickets/tickets.api';
import { getUsers } from 'APIServices/users/users.api';
import { mergeUsersWithTickets } from 'utils/helpers/mergeUsersWithTickets';
import { Ticket, TicketStatus, TicketWithUser } from 'utils/types/ticket.types';

interface TicketsListReturnType {
    tickets: TicketWithUser[];
    isLoading: boolean;
}

interface IProps {
    filter?: TicketStatus;
}

export const useTicketsList = ({ filter }: IProps): TicketsListReturnType => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const filterQuery = filter ? `?status=${filter}` : '';
                const [tickets, users] = await Promise.all([
                    getTickets(filterQuery),
                    getUsers()
                ]);

                setIsLoading(false);
                setTickets(mergeUsersWithTickets(tickets, users));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [filter]);

    return {
        tickets,
        isLoading
    };
};
