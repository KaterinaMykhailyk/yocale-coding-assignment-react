import { Ticket } from 'utils/types/ticket.types';

import { REQUEST_PATH } from './tickets.types';
import { API_URL } from '../apiUrl';

export const getTickets = async (filterQuery: string): Promise<Ticket[]> => {
    try {
        const response = await fetch(
            `${API_URL}${REQUEST_PATH.TICKETS}${filterQuery}`
        );
        return await response.json();
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};
