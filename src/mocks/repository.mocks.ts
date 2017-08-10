import { USER_LIST } from './user.mocks';
import { Repository } from './../models/repository.interface';


const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This is repository shows the usage if the camera fucctionality',
        owner: USER_LIST[0]
    },{
        name: 'Ionic 3 SMS',
        description: 'This is repository shows the usage if the SMS fucctionality',
        owner: USER_LIST[0]
    },{
        name: 'Ionic 3 Fingerprint',
        description: 'This is repository shows the usage if the fingerprint  fucctionality',
        owner: USER_LIST[0]
    },{
        name: 'Ionic 3 Geolocation',
        description: 'This is repository shows the usage if the geolocation fucctionality',
        owner: USER_LIST[1]
    },{
        name: 'Ionic 3 sample crap',
        description: 'This is repository shows the usage if the sample crap fucctionality',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;