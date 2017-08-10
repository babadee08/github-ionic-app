import { User } from './../models/user.interface';

const userlist: User[] = [
    {
        name: 'Richard boyewa',
        company: 'PWA',
        location: 'Ikeja Lagos, Nigeria',
        bio: 'I smoke a lot of weed',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'sample@weed.com'
    },
    {
        name: 'Shitu Rahman',
        company: 'Konga',
        location: 'Ikeja Lagos, Portugal',
        bio: 'I dont smoke a lot of weed',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'weed@sample.com'
    }
];

export const USER_LIST = userlist;