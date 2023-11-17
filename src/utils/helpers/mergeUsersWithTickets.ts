import { Ticket, TicketWithUser } from 'utils/types/ticket.types';
import { User } from 'utils/types/user.types';

export const mergeUsersWithTickets = (
    tickets: Ticket[],
    users: User[]
): TicketWithUser[] => {
    const userMap: { [key: number]: User } = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {} as { [key: number]: User });

    return tickets.map((ticket): TicketWithUser => {
        const user = ticket.userId ? userMap[ticket.userId] : null;
        return {
            ...ticket,
            ...(user && {
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        };
    });
};
