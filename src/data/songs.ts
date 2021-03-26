export interface Song {
    id: number;
    text:string;
    content: string;
  }
  
  const songs: Song[] = [
  
    {
      id:1,
      text: 'Cancion1',
      content: 'Cancion1Cancion1Cancion1Cancion1Cancion1Cancion1Cancion1Cancion1Cancion1'
    },
    {
      id:2,
      text: 'Cancion2',
      content: 'Cancion2Cancion2Cancion2Cancion2Cancion2Cancion2Cancion2Cancion2Cancion2'
    },
    {
      id:3,
      text: 'Cancion3',
      content: 'Cancion3'
    },
  ];
  
  export const getSongs = () => songs;
  
  export const getSong = (id: number) => songs.find(element => element.id === id);
  