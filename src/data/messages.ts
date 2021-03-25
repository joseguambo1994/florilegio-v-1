export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  poem: string;
  image_route: string;
}

const messages: Message[] = [
/*   {
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

  }, */
  {
    fromName: 'Himno a San Jorge',
    subject: '',
    date: '',
    id: 2,
    poem: '\
    CORO\n \
Adelante valiente San Jorge\n \
Cuerpo insigne Pegaso de luz\n \
Que la lanza sea rayo en la guerra\n \
Y que el sable me sirva en la lid.\n \
I\n \
Cual centauro de raza gigante\n \
“Arma noble y sin par”\n \
espoleemos hacia el Amazonas\n \
magna herencia para el porvenir.\n \
II\n \
Arma noble es la nuestra quijote\n \
Lucha grande de tigre y león\n \
Que en Tápi y Panupali se dio\n \
Conquistando gloriosos laureles.\n \
III\n \
Huracanes son nuestros rugientes\n \
Hoy o nunca “REIVINDICAREMOS”\n \
Los espíritus de Sucre y Bolívar\n \
Lo exigen por nuestra hered\
    ',
    image_route: '/assets/imagenes/himno_a_san_jorge.png'

  },
  {
    fromName: 'Vocación y Herencia',
    subject: '',
    date: '',
    id: 29,
    poem: '\
    Escarbando en mi memoria\n \
Halle un viejo sentimiento\n \
Que se acomodo muy adentro\n \
Quizá por ser el primero\n \
Al desempolvar los recuerdos\n \
De ese viejo sentimiento\n \
Veo en el a un muchacho\n \
Muy alegre y alocado\n \
Dispuesto a entregar la vida\n \
Para llegar a ser soldado\n \
Hay un viejo militar\n \
Aferrado a su pasado\n \
Que revive en aquel muchacho\n \
Lo que con amor ha guardado\n \
El ser militar le dice\n \
No es tarea tan sencilla\n \
Muchas cosas se renuncian\n \
y a mucha gente se olvida\n \
El ser militar muchacho\n \
Es para toda la vida\n \
El ponerse el uniforme\n \
Es tarea cotidiana\n \
El sacarse el uniforme\n \
Es agonía temprana\n \
En el uniforme muchacho\n \
No es la tela lo que importa\n \
Es lo que el representa\n \
En el corazón de quien lo porta\n \
Las espuelas que tu has visto\n \
Son nobleza y altivez\n \
Pero sean de plata o acero\n \
Siempre estarán en tus pies\n \
El overol es para el soldado\n \
lo que el canto para el canario\n \
y si entregas tu vida\n \
Con fiereza y bravura\n \
Serán los centinelas\n \
En tu noble sepultura\n \
La bandera hay que llevarla\n \
Con orgullo y altivez\n \
Es tu patria que flamea\n \
En todo rincón a la vez\n \
Y tendrás que defenderla\n \
Con tu vida si es preciso\n \
Si tienes suerte en la frontera o\n \
En el lugar que estés\n \
He ahí mocoso inquieto\n \
Un ejemplo de honradez\n \
Y sigue soñando muchacho\n \
Y serás general después\
    ',
    image_route: '/assets/imagenes/vocacion_y_herencia.png'

  },
  {
    fromName: 'La oración de un padre',
    subject: '',
    date: '',
    id: 31,
    poem: '\
    DAME OH SEÑOR:DAME OH SEÑOR:\n \
UN HIJO QUE SEA LO BASTANTE FUERTE,\n \
PARA SABER CUANDO ES DÉBIL;\n \
LO BASTANTE VALEROSO,\n \
PARA ENFRENTARSE CONSIGO MISMO CUANDO SIENTA MIEDO,\n \
UN HIJO QUE SEA ORGULLOSO E INFLEXIBLE\n \
EN LA DERROTA HONRADA\n \
HUMILDE Y MAGNÁNIMO EN LA VICTORIA.\n \
DAME UN HIJO QUE NUNCA DOBLE LA ESPALDA\n \
CUANDO DEBE ERGUIR EL PECHO,\n \
UN HIJO QUE SEPA CONOCERTE A TI...\n \
Y CONOCERSE A SI MISMO\n \
QUE ES LA PIEDRA FUNDAMENTAL DE TODO CONOCIMIENTO.\n \
CONDÚCELO TE LO RUEGO\n \
NO POR EL CAMINO CÓMODO Y FÁCIL\n \
SINO POR EL CAMINO ÁSPERO,\n \
AGUIJONEADO POR LAS DIFICULTADES Y RETOS.\n \
AL DÉJARLO APRENDER A SOSTENERSE\n \
FIRME EN LA TEMPESTAD Y A SENTIR COMPASIÓN POR LOS QUE FALLAN\n \
DAME UN HIJO CUYO CORAZÓN SEA CLARO,\n \
CUYOS IDEALES SEAN ALTOS,\n \
UN HIJO QUE SE DOMINE A SI MISMO\n \
ANTES QUE PRETENDA DOMINAR A LOS DEMÁS\n \
UN HIJO QUE AVANCE HACIA EL FUTURO\n \
PERO QUE NUNCA OLVIDE EL PASADO.\n \
Y DESPUÉS QUE LE HAYAS DADO TODO ESO,\n \
AGRÉGALE, TE SUPLICO, SUFICIENTE SENTIDO DEL HUMOR\n \
DE MODO QUE PUEDA SER SIEMPRE SERIO\n \
PERO QUE NO SE TOME ASI MISMO\n \
DEMASIADO EN SERIO\n \
DALE HUMILDAD PARA QUE PUEDA RECORDAR\n \
SIEMPRE LA SENCILLEZ DE LA VERDADERA GRANDEZA\n \
LA IMPARCIALIDAD DE LA VERDADERA SABIDURÍA\n \
LA MANSEDUMBRE DE LA VERDADERA FUERZA.\n \
ENTONCES YO, SU PADRE, ME ATREVERÉ A MURMURAR....\n \
“NO HE VIVIDO EN VANO”\n \
UN HIJO QUE SEA LO BASTANTE FUERTE,\n \
PARA SABER CUANDO ES DÉBIL;\n \
LO BASTANTE VALEROSO,\n \
PARA ENFRENTARSE CONSIGO MISMO CUANDO SIENTA MIEDO,\n \
UN HIJO QUE SEA ORGULLOSO E INFLEXIBLE\n \
EN LA DERROTA HONRADA\n \
HUMILDE Y MAGNÁNIMO EN LA VICTORIA.\n \
DAME UN HIJO QUE NUNCA DOBLE LA ESPALDA\n \
CUANDO DEBE ERGUIR EL PECHO,\n \
UN HIJO QUE SEPA CONOCERTE A TI...\n \
Y CONOCERSE A SI MISMO\n \
QUE ES LA PIEDRA FUNDAMENTAL DE TODO CONOCIMIENTO.\n \
CONDÚCELO TE LO RUEGO\n \
NO POR EL CAMINO CÓMODO Y FÁCIL\n \
SINO POR EL CAMINO ÁSPERO,\n \
AGUIJONEADO POR LAS DIFICULTADES Y RETOS.\n \
AL DÉJARLO APRENDER A SOSTENERSE\n \
FIRME EN LA TEMPESTAD Y A SENTIR COMPASIÓN POR LOS QUE FALLAN\n \
DAME UN HIJO CUYO CORAZÓN SEA CLARO,\n \
CUYOS IDEALES SEAN ALTOS,\n \
UN HIJO QUE SE DOMINE A SI MISMO\n \
ANTES QUE PRETENDA DOMINAR A LOS DEMÁS\n \
UN HIJO QUE AVANCE HACIA EL FUTURO\n \
PERO QUE NUNCA OLVIDE EL PASADO.\n \
Y DESPUÉS QUE LE HAYAS DADO TODO ESO,\n \
AGRÉGALE, TE SUPLICO, SUFICIENTE SENTIDO DEL HUMOR\n \
DE MODO QUE PUEDA SER SIEMPRE SERIO\n \
PERO QUE NO SE TOME ASI MISMO\n \
DEMASIADO EN SERIO\n \
DALE HUMILDAD PARA QUE PUEDA RECORDAR\n \
SIEMPRE LA SENCILLEZ DE LA VERDADERA GRANDEZA\n \
LA IMPARCIALIDAD DE LA VERDADERA SABIDURÍA\n \
LA MANSEDUMBRE DE LA VERDADERA FUERZA.\n \
ENTONCES YO, SU PADRE, ME ATREVERÉ A MURMURAR....\n \
“NO HE VIVIDO EN VANO”\n \
    ',
    image_route: '/assets/imagenes/la_oracion_de_un_padre.png'

  },
  {
    fromName: 'Antología',
    subject: '',
    date: '',
    id: 31,
    poem: 'Cuenta la historia de antaño\n \
    Que estos caballos de acero\n \
    Galopaban por las llanuras\n \
    Conquistando el mundo entero\n \
    Se dice que no tienen miedo\n \
    Ni a ríos ni desfiladeros\n \
    Que se aferraban al terreno\n \
    Con sus orugas de acero\n \
    Buscando siempre la gloria\n \
    Pelearon a campo abierto\n \
    Aplastando al enemigo\n \
    Conquistaron el desierto\n \
    Ya no rugen sus motores\n \
    Por la herrumbre de los años\n \
    Ya no truenan sus cañones\n \
    Ya cumplieron su designio\n \
    Con sus ruedas de camino\n \
    Dejaron huella en el tiempo\n \
    Cual garañón linudo\n \
    Corrían igual que el viento\n \
    Bienvenido amigo tanquista\n \
    A revivir el pasado\n \
    Y alegrar el corazón\n \
    De estos gloriosos soldados\n \
    Aquí nos cuentan su historia\n \
    Aquí nos llenan el alma\n \
    Aquí se siente la gloria\n \
    Aquí descansan en calma',
    image_route: '/assets/imagenes/antologia.png'

  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
