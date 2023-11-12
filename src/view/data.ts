export type data = {
    nama: string,
    avatar: string,
    action: string,
    time: string,
    hasRead: boolean,
    message: string
}[]

export const notif: data = [
        {
            nama: 'Jacob Thompson',
            avatar: 'jacob-thompson',
            action: 'join',
            time: '1 day ago',
            hasRead: true,
            message: ''
        },
        {
            nama: 'Angela Gray',
            avatar: 'angela-gray',
            action: 'follow',
            time: '5 min ago',
            hasRead: true,
            message: ''
        },
        {
            nama: 'Rizky Hasanuddin',
            avatar: 'rizky-hasanuddin',
            action: 'message',
            time: '5 days ago',
            message: "Hello, thanks for setting up the Chese Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            hasRead: false
        }
]