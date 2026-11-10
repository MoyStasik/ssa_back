import { Injectable } from '@nestjs/common';

interface Users {
  id: number,
  name: string,
  avatar: string,
  victories: number,
}

export interface Space {
  id: number,
  name: string,
  avatar: string,
  owner_id: number,
  games: number,
  participants: {
    users: Users[],
    count: number,
  },
}

@Injectable()
export class SpacesService{
  findAll(): Space[]  {
    return [
      {
        id: 1,
        name: 'Мафия',
        avatar: '',
        owner_id: 1,
        games: 3,
        participants: {
          users: [
            {
              id: 1,
              name: 'Стас',
              avatar: '',
              victories: 2,
            },
            {
              id: 2,
              name: 'Серега',
              avatar: '',
              victories: 1,
            },
            {
              id: 3,
              name: 'Артем',
              avatar: '',
              victories: 1,
            },
          ],
          count: 3,
        }
      }
    ];
  }
}
