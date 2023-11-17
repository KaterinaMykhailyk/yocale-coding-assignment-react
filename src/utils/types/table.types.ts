import { TicketWithUser } from 'utils/types/ticket.types';

export interface HeadCell {
    disablePadding: boolean;
    id: keyof TicketWithUser;
    label: string;
    numeric: boolean;
}

export type Order = 'asc' | 'desc';
