export interface Anthem {
    id: number;
    title:string;
    text: string;
    image_path: string;
  }
  
  const anthems: Anthem[] = [
  
    {
      id:1,
      title: 'Himno Nacional del Ecuador',
      image_path: '',
      text: '\
      CORO\n\
¡Salve, Oh Patria, ¡mil veces! ¡Oh Pátria,\n\
gloria a ti! Ya tu pecho rebosa\n\
gozo y paz, y tu frente radiosa\n\
más que el sol contemplamos lucir.\n\
I\n\
Indignados tus hijos del yugo\n\
que te impuso la ibérica audacia,\n\
de la injusta y horrenda desgracia\n\
que pesaba fatal sobre ti,\n\
santa voz a los cielos alzaron,\n\
voz de noble y sin par juramento,\n\
de vengarte del monstruo sangriento,\n\
de romper ese yugo servil.\n\
¡Salve, Oh Patria...!\n\
II\n\
Cedió al fin la fiereza española,\n\
y hoy, oh Patria, tu libre existencia\n\
es la noble y magnífica herencia\n\
que nos dio el heroísmo feliz:\n\
de las manos paternas la hubimos,\n\
nadie intente arrancárnosla ahora,\n\
ni nuestra ira excitar vengadora\n\
quiera, necio o audaz, contra si.\n\
¡Salve, Oh Patria...!\n\
III\n\
Los primeros los hijos del suelo\n\
que, soberbio, el Pichincha decora\n\
te aclamaron por siempre señora\n\
y vertieron su sangre por ti.\n\
Dios miró y aceptó el holocausto,\n\
y esa sangre fue germen fecundo\n\
de otros héroes que, atónito, el mundo\n\
vio en tu torno a millares surgir.\n\
¡Salve, Oh Patria...!\n\
IV\n\
De esos héroes el brazo de hierro\n\
nada tuvo invencible la tierra\n\
y del valle a la altísima sierra\n\
se escuchaba el fragor de la lid;\n\
tras la lid la victoria volaba,\n\
libertad tras el triunfo venía,\n\
y al león destrozado se oía\n\
de impotencia y despecho rugir\n\
¡Salve, Oh Patria...!\n\
V\n\
Nadie, oh Patria, lo intente. Las sombras\n\
de tus héroes gloriosos nos miran\n\
y el valor y el orgullo que inspiran\n\
son augurios de triunfos por ti.\n\
Venga el hierro y el plomo fulmíneo,\n\
que a la idea de guerra y venganza\n\
se despierta la heroica pujanza\n\
que hizo al fiero español sucumbir.\n\
¡Salve, Oh Patria...!\n\
VI\n\
Y si nuevas cadenas prepara\n\
la injusticia de bárbara suerte,\n\
¡gran Pichincha! prevén tú la muerte\n\
de la Patria y sus hijos al fin;\n\
hunde al punto en tus hondas entrañas\n\
cuando existe en tu tierra; el tirano\n\
huelle solo cenizas y en vano\n\
busque rastro de ser junto a ti.\n\
¡Salve, Oh Patria...!\n\
'
    },
    {
      id:2,
      title: 'Himno del Ejército',
      image_path: '/assets/imagenes/himnos/himno_al_ejercito_ecuatoriano.png',
      text:  '\
      CORO\n\
¡Gloria, gloria al Ejército nuestro,\n\
el gestor de epopeyas y hazañas;\n\
el que aviva en sus hondas entrañas\n\
fuego patrio de fe y redención\n\
I\n\
En tus hijos, heroicos soldados\n\
y en tu ser que es vigor tesonero\n\
vibra el alma de un pueblo guerrero\n\
que sustenta tu estirpe viril;\n\
Quipipán, el Pichincha y Tarqui,\n\
Panupali, también Porotillo\n\
y Paquisha, el Cenepa dan brillo\n\
a tu casta gloriosa e inmortal.\n\
II\n\
Pues la gesta del Alto Cenepa\n\
es leyenda y emblema de gloria,\n\
es orgullo de un pueblo y su historia\n\
que resaltan con aire triunfal;\n\
y por eso la patria te admira,\n\
en tu fuerza y presencia confía,\n\
de tu pueblo eres hoy ufanía\n\
eres gloria, eres vida y raíz.\n\
'
    },
    {
      id:3,
      title: 'Himno de la Caballeria Blindada Galápagos',
      image_path: '/assets/imagenes/himnos/himno_al_arma_de_caballeria_blindada.png',
      text: '\
      CORO\n\
Caballero de yelmo y la coraza,\n\
Hombre recio, valiente y muy capaz,\n\
Honra a tu arma a tu patria y a su emblema\n\
Siendo siempre un gran profesional.\n\
I\n\
Con la historia del hombre tu naciste\n\
A lo largo del tiempo galopaste\n\
En los campos de Tapi doblegaste\n\
Al Fragor de la lucha al Español\n\
II\n\
En Pichincha mostraste tu bravura\n\
Nos dejaste de herencia a Calderón\n\
El Cedeño el Dragón y el Cazadores\n\
Son ejemplo de arrojo y corazón\n\
III\n\
De los bravos del Yaguachi y Panupali\n\
Guardaremos su espíritu y valor\n\
Con las bocas de fuego arrasaremos\n\
Con cualquiera que piense en agresión\n\
De los bravos del Yaguachi y Panupali\n\
Guardaremos su espíritu y valor\n\
Con las bocas de fuego arrasaremos\n\
Con cualquiera que piense en agresión\n\
IV\n\
El cóndor es el nombre de un testigo\n\
Que miró a sus hombres combatir\n\
El Perú aprendió que en esa forma\n\
No podrá nuestra Patria sucumbir\n\
V\n\
Con tu estirpe de noble caballero\n\
Con tu ancestro de gran conquistador\n\
Con la garra pujante de tanquista\n\
Llenaremos de gloria al Ecuador.\n\
El himno al arma de Caballería Blindada se entonará en las ceremonias por el día clásico del\n\
arma de caballería blindada.\n\
      '
    },
  ];
  
  export const getAnthems = () => anthems;
  
  export const getAnthem = (id: number) => anthems.find(element => element.id === id);
  