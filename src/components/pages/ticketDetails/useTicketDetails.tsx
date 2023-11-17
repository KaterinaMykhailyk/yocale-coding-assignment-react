import { useEffect, useState } from 'react';

import { getTickets } from 'APIServices/tickets/tickets.api';
import { Ticket } from 'utils/types/ticket.types';

interface TicketDetailsReturnType {
    ticket: Ticket[];
    isLoading: boolean;
}
export const useTicketDetails = (id?: string): TicketDetailsReturnType => {
    const [ticket, setTicket] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async (id?: string) => {
            try {
                setIsLoading(true);
                /* eslint-disable  @typescript-eslint/no-explicit-any */
                const ticket: any = await getTickets(`/${id}`);
                setIsLoading(false);
                setTicket([ticket]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(id);
    }, []);

    return {
        ticket,
        isLoading
    };
};
