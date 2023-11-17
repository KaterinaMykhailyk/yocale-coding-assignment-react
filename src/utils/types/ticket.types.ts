export interface Ticket {
    id: number;
    userId?: number;
    number: string;
    status: TicketStatus;
}

export enum TicketStatus {
    ASSIGNED = 'assigned',
    COMPLETED = 'completed',
    UNASSIGNED = 'unassigned'
}

export interface TicketWithUser extends Ticket {
    firstName?: string;
    lastName?: string;
    address?: string;
}
