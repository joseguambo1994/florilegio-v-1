export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  poem: string;
  image_route: string;
}

const messages: Message[] = [
  {
    fromName: 'El corralero',
    subject: 'El corralero',
    date: '24/03/2021',
    id: 0, 
    poem: 'Está muy malo el corralero Allá en el potrero,\
    como viejo está, Hay que ayudarlo a que muera Para que no sufra más,\
    Siempre fuiste el más certero\
    Y por eso debes su mal aliviar.\
    Como pretenden que yo,\
    Que lo críe de potrillo\
    Clave en su pecho un cuchillo\
    Porque el patrón lo ordeno;\
    Déjenlo no más pastar\
    No rechace mi consejo\
    Que yo lo voy a enterrar\
    Cuando se muera de viejo. (bis)' ,
    image_route: '../imagenes/imagen1.png'
  },
  {
    fromName: 'Caballero Blindada Ecuatoriana',
    subject: 'Caballero Blindada Ecuatoriana',
    date: '6:12 AM',
    id: 1,
    poem: 'Somos de Caballería blindada\
    Arma noble y sin igual\
    Nuestro lema es el trabajo\
    Por un grandioso Ecuador.',
    image_route: '../imagenes/imagen1.png'

  },
  {
    fromName: 'Arma Ligera',
    subject: 'Arma Ligera',
    date: '4:55 AM',
    id: 2,
    poem:'Arma ligera que transpone montes,\
    Caudal profundo, de valor y gloria,\
    Estrella guía en nuevos horizontes,\
    Por el camino de la luz y la victoria.',
    image_route: '../imagenes/imagen1.png'

  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
