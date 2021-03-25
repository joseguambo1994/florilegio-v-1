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
    fromName: 'Caballeria Blindada Ecuatoriana',
    subject: '',
    date: '',
    id: 0, 
    poem: 'Está muy malo el corralero Allá en el potrero,\n\
    como viejo está, Hay que ayudarlo a que muera Para que no sufra más,\n\
    Siempre fuiste el más certero\n\
    Y por eso debes su mal aliviar.\n\
    Como pretenden que yo,\n\
    Que lo críe de potrillo\
    Clave en su pecho un cuchillo\
    Porque el patrón lo ordeno;\
    Déjenlo no más pastar\
    No rechace mi consejo\
    Que yo lo voy a enterrar\
    Cuando se muera de viejo. (bis)' ,
    image_route: '/assets/imagenes/image2_2.png'
  },
  {
    fromName: 'Caballeria Blindada Ecuatoriana',
    subject: '',
    date: '',
    id: 1,
    poem: 'Somos de Caballería blindada \n \
    Arma noble y sin igual\n \
    Nuestro lema es el trabajo\n \
    Por un grandioso Ecuador.',
    image_route: '/assets/imagenes/imagen3.png'

  },
  {
    fromName: 'Arma Ligera',
    subject: '',
    date: '',
    id: 2,
    poem: 'Somos de Caballería blindada \n\
    Arma noble y sin igual \n \
    Nuestro lema es el trabajo \n \
    Por un grandioso Ecuador.',
    image_route: '/assets/imagenes/imagen4.png'

  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
