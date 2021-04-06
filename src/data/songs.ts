export interface Song {
    id: number;
    title:string;
    text:Array<string>;
    image_path: string;
    indication: string;
  }
  
  const songs: Song[] = [
  
    {
      id:1,
      title: 'El Corralero',
      image_path: '/assets/imagenes/canciones/el_corralero.png',      text: ['\
      Está muy malo el corralero\n\
Allá en el potrero, como viejo está,\n\
Hay que ayudarlo a que muera\n\
Para que no sufra más,\n\
Siempre fuiste el más certero\n\
Y por eso debes su mal aliviar.\
','\
Como pretenden que yo,\n\
Que lo críe de potrillo\n\
Clave en su pecho un cuchillo\n\
Porque el patrón lo ordeno;\n\
Déjenlo no más pastar\n\
No rechace mi consejo\n\
Que yo lo voy a enterrar\n\
Cuando se muera de viejo. (bis)\
','\
Junto al estero del bajo\n\
Lo encontré tendido\n\
Casi al expirar\n\
Me acerque muy lentamente\n\
Y se lo quise explicar\n\
Pero al verlo resignado.\n\
Me tembló la mano\n\
Y me puse a llorar.\
'
    ],
    indication: 'La canción del corralero se cantará en reuniones sociales cuando nos encontremos en un\
    concurso hípico.'
    },
    {
      id:2,
      title: 'Caballeria Blindada Ecuatoriana',
      image_path: '/assets/imagenes/canciones/caballeria_blindada_ecuatoriana.png',
      text: ['\
      Somos de Caballería blindada\n\
Arma noble y sin igual\n\
Nuestro lema es el trabajo\n\
Por un grandioso Ecuador.\
','\
Lucharemos por la Patria\n\
Moriremos con valor\n\
Nunca más permitiremos\n\
Que mancillen nuestro honor.\
','\
En nuestros bravos caballos\n\
Galopando hasta el fin\n\
Sobre orugas arrollantes\n\
Marcharemos siempre al sur.\
','\
En los bosques y en los valles\n\
En los húmedos pantanos\n\
Ecuador tierra querida\n\
Te juramos defender.'
    ]
    ,
    indication: 'La canción de la Caballería Blindada Ecuatoriana se cantará en reuniones sociales, cuando\
    nos encontremos en ascensos, despedidas o bienvenidas\
    '
    },
    {
      id:3,
      title: 'Arma Ligera',
      image_path: '/assets/imagenes/canciones/arma_ligera.png',
      text: ['\
      Arma ligera que transpone montes,\n\
Caudal profundo, de valor y gloria,\n\
Estrella guía en nuevos horizontes,\n\
Por el camino de la luz y la victoria.\n\
Caballería, caballería,\n\
Tú en la guerra nuestra estrella guía.\n\
Arma de tradición que el pecho inflama,\n\
Cuya historia es de luz y de fulgor,\n\
Que por el choque, en la carga, ella avasalla\n\
Y al enemigo le impone su valor.\
','\
Caballería, caballería,\n\
Tú en la guerra nuestra estrella guía\n\
Montado sobre el dorso de su amigo,\n\
Es el caballo que altivo nos conduce,\n\
Y lo llevamos también hacia el peligro\n\
Para luchar con nos bajo el pendón.\
','\
Caballería, Caballería,\n\
Tu en la guerra nuestra estrella guías.\n\
De Calderón y Ortiz, el legendario,\n\
Y otros héroes que forjan nuestra historia\n\
Evoquemos valor extraordinario,\n\
Por Ecuador la nuestra mayor gloria.\
'
    ]
    ,
    indication: 'La canción Arma Ligera se cantará con el personal de oficiales y tropa dentro de las unidades\
    del arma.'
    },
    {
      id:4,
      title: 'Himno a San Jorge',
      image_path: '/assets/imagenes/canciones/himno_a_san_jorge.png',
      text: ['\
      CORO\n\
Adelante valiente San Jorge\n\
Cuerpo insigne Pegaso de luz\n\
Que la lanza sea rayo en la guerra\n\
Y que el sable me sirva en la lid.\
','\
I\n\
Cual centauro de raza gigante\n\
"Arma noble y sin par"\n\
espoleemos hacia el Amazonas\n\
magna herencia para el porvenir.\
','\
II\n\
Arma noble es la nuestra quijote\n\
Lucha grande de tigre y león\n\
Que en Tápi y Panupali se dio\n\
Conquistando gloriosos laureles.\
','\
III\n\
Huracanes son nuestros rugientes\n\
Hoy o nunca "REIVINDICAREMOS"\n\
Los espíritus de Sucre y Bolívar\n\
Lo exigen por nuestra hered\
','\
Letra de Posta:\n\
Dr. Rigoberto Cordero\n\
Música: LA MARSELLA\
'
    ]
    ,
    indication: 'El himno a San Jorge se cantará con el personal de oficiales y tropa dentro de las unidades del\
    arma.'
    },
    {
      id:5,
      title: '¡Oh! Gallarda Legión Valerosa' ,
      image_path: '/assets/imagenes/canciones/oh_gallarda_legion_valerosa.png',
      text: ['¡Oh! Gallarda legión valerosa\n\
      De corceles cañones y acción\n\
      Ya la Patria se siente orgullosa\n\
      De sus hombres con noble misión\n\
      De los pueblos en toda su historia\n\
      Se distingue esta arma gloriosa.\n\
      Que ha dejado una estela de gloria\n\
      Que ninguno podría extinguirla\n\
      Pues de ti muchos héroes salieron\n\
      Noble e hidalga robusta legión\n\
      Y con sangre su nombre escribieron\n\
      En el alma de nuestra nación.\
      ']
      ,
      indication: 'Oh! Gallarda Legión Valerosa se cantará con el personal de oficiales\
      y tropa dentro de las unidades del arma\
      '   
      
    },
    {
      id:6,
      title: 'Himno al Grupo de Caballeria "Yaguachi"',
      image_path: '/assets/imagenes/canciones/himno_al_grupo_de_caballeria_yaguachi.png',
      text: ['\
      A la carga ! gritaban mil voces,\n\
en Pichincha, en los flancos del monte,\n\
donde vivimos el nuevo horizonte,\n\
de la Patria que siempre será.\
','\
!Gloria a ti Calderón repetían\n\
nuestros bravos y audaces abuelos,\n\
y en la cumbre de iguales anhelos,\n\
no se olvida tu nombre jamás,\
','\
Por la vida de nuestros mayores,\n\
Por la gloria de aquellos centauros,\n\
Nadie puede abatir nuestros lauros,\n\
Porque en ellos hay sangre inmortal.\n\
Los peruanos que un día intentaron\n\
Empañar nuestro heráldico brillo\n\
Recibieron allá en Porotillo,\n\
La lección de su muerte total,\
','\
En los puntos de lucha estaremos,\n\
Si la Patria de nuevo nos llama;\n\
Nada importa morir cuando se ama\n\
La BANDERA, EL HONOR Y EL HOGAR.\
','\
Vayan lejos las armas invictas\n\
Del "YAGUACHI" DEL ÍNCLITO GRUPO,\n\
Que en los tiempos heroicos ya supo\n\
Dar sus héroes, su sangre ofrendar.\
    '
  ],
  indication: 'El l himno AL GRUPO DE CABALLERÍA "YAGUACHI" se cantará en ceremonias especiales en\
G.C.M 36 "YAGUACHI".'
    },
    {
      id:7,
      title: 'Cazadores a la Lid',
      image_path: '/assets/imagenes/canciones/cazadores_a_la_lid.png',
      text: ['\
      Somos soldados del Cazadores\n\
Sin par valientes y decididos;\n\
Vamos marchando con entusiasmo\n\
Seremos todos, con bizarría\n\
Y no hay soldado igual.\n\
Si el enemigo nos quiere invadir\n\
En nuestro pecho una valla hallará;\n\
Luciendo siempre nuestra bandera,\n\
En la frontera Sur, nos verá.\n\
"Cazadores de los Ríos",\n\
manojito de valientes,\n\
para pintar tus hazañas\n\
en el mundo no hay pinceles.\n\
Grupo de Caballería, tu me marchas a la lid,\n\
Galopando en tus corceles, llegaremos\n\
todos,\n\
Hasta el Marañon!!!(bis)\n\
Con orgullo yo le gritaría:\n\
Soy soldado de Caballería!!!!\n\
"Cazadores de los Ríos" a defender\n\
nuestro querido Ecuador.\n\
Cazadores de los Ríos "a defender\n\
nuestro querido Ecuador.\n\
"Cazadores de los Ríos",\n\
"Dávalos "y el "Hugo Ortiz"\n\
y también los del" Yaguachi"\n\
y los del "Febres Cordero",\n\
Grupos de Caballería\n\
Que marchamos a la lid,\n\
Galopando en sus corceles\n\
Llegaremos todos al Marañón!!!\n\
Galopando en sus corceles\n\
Llegaremos todos al Marañón!!!\n\
Galopando en sus corceles\n\
Llegaremos todos al Marañón!!!\n\
Y...........qué dijo la Novia mía?\n\
..........VIVA LA CABALLERÍA¡!!!!!\
    '
  ]
  ,
  indication:'El himno CAZADORES A LA LID se cantará\n\
en ceremonias especiales en el G.C.M 18\
"CAZADORES DE LOS RIOS"\
'
    },
    {
      id:8,
      title: 'Febres Cordero',
      image_path: '/assets/imagenes/canciones/febres_cordero.png',
      text: ['\
      Nosotros todos somos\n\
de estas tierras Orenses\n\
venimos decididos\n\
a ser buen militar,\n\
por eso con orgullo\n\
llevamos estas lanzas\n\
que son la noble insignia\n\
de nuestra Unidad.\
','\
Somos del FEBRES\n\
Soldados cual leones\n\
valientes mocetones\n\
que vamos a luchar,\n\
por nuestros héroes\n\
que claman la venganza\n\
fijando su mirada\n\
en el usurpador.\
','\
En los Destacamentos\n\
de nuestra gran frontera\n\
cien hombres decididos\n\
se hacen respetar,\n\
montando en sus corceles\n\
veloces como el viento\n\
galopan siempre al frente\n\
contra el invasor\
','\
Somos del FEBRES\n\
Soldados cual leones\n\
valientes mocetones\n\
que vamos a luchar,\n\
por nuestros héroes\n\
que claman la venganza\n\
fijando su mirada\n\
en el, u s u r p a d o r .......\
    '
  ]
  ,
  indication: 'El himno al FEBRES CORDERO se cantará en ceremonias especiales en el G.C.B\
4 "FEBRES CORDERO"\
'
    },
    {
      id:9,
      title: 'Canción Del Subteniente De Caballería Blindada',
      image_path: '/assets/imagenes/canciones/cancion_del_subteniente_de_caballeria_blindada.png',
      text: ['\
      Porque quiero tanto la caballería\n\
porque es arma hermosa que supe elegir\n\
si me lo pidieran daría mi vida\n\
porque en otra arma no podría vivir. (bis)\
','\
No abandonaré yo mi lanza vibrante\n\
aunque yo la plante en algún corazón,\n\
y si mi caballo me lleva a la muerte\n\
seguiré mi suerte, seguiré mi suerte\n\
como la he seguido en las penas de amor. (bis)\
','\
Y si una morena de lindos ojazos\n\
clava su mirada cuando al trote paso\n\
quedaré estocado yo en el corazón. (bis)\n\
No abandonaré yo mi tanque de acero\n\
aunque yo destruya algún corazón,\n\
y si mi blindado me lleva a la muerte\n\
seguiré mi suerte, seguiré mi suerte\n\
como la he seguido en las penas de amor. (bis)\
','\
Morena bonita rézame un rosario\n\
cuando a mi caballo solo traerá,\n\
vendrá sin jinete\n\
pues yo habré quedado,\n\
muy lejos, durmiendo mi eterno soñar. (bis)\
','\
No abandonaré yo mi tanque de acero\n\
aunque yo destruya algún corazón,\n\
y si mi blindado me lleva a la muerte\n\
seguiré mi suerte, seguiré mi suerte\n\
como la he seguido en las penas de amor. (bis)\
'
    ],
    indication: 'La CANCION DEL SUBTENIENTE DE CABALLERÍA BLINDADA se cantará en\
reuniones sociales y en el bautizo de los Srs. Subtenientes pertenecientes al arma de caballería\
      '
    },
    {
      id:10,
      title: 'Soldado de Levita',
      image_path: '/assets/imagenes/canciones/soldado_de_levita.png',
      text: ['\
      Soy Soldado de Levita,\n\
de esos de Caballería,\n\
de esos de Caballería.,\n\
soy Soldado de Levita,\n\
y me incorporé a las filas,\n\
por una mujer bonita (bis)\n\
que perdió la vida mía.\
','\
Corazón apasionado\n\
disimula tu tristeza, (bis)\n\
corazón apasionado,\n\
que el que nace desgraciado\n\
desde la cuna comienza (bis)\n\
a vivir martirizado.\
','\
    '
  ]
  ,
  indication: 'La canción SOLDADO DE LEVITA se cantará en reuniones sociales.\n\
'
    },
    {
      id:11,
      title: 'Bravos del Yaguachi',
      image_path: '/assets/imagenes/canciones/bravos_del_yaguachi.png',
      text: ['\
      Yo soy de caballería\n\
De esos de bota y espuela (bis)\n\
Por mis venas corren sangre\n\
De los bravos del Yaguachi (bis)\
','\
Cuando la patria nos llame\n\
Iremos a sus fronteras (bis)\n\
Para darle nuevas glorias\n\
Como las de Panupali (bis)\
','\
Todas las mujeres quieren\n\
Que su amante sea yo (bis)\n\
Solo por tener la dicha\n\
De ser de caballería (bis)\
','\
Todas las armas comprenden\n\
Que el amor y la decencia (bis)\n\
Solo se encuentra en el pecho\n\
Del que es de caballería (bis)\
','\
Las fronteras de mi patria\n\
Estarán bien resguardadas (bis)\n\
Siempre que en ella se encuentren\n\
Los bizarros del Yaguachi (bis)\
'
    ]
    ,
    indication: 'La canción BRAVOS DEL YAGUACHI se cantará en reuniones sociales.\
'
    },
    {
      id:12,
      title: 'Canción al Coronel',
      image_path: '/assets/imagenes/canciones/cancion_al_coronel.png',
      text: ['\
      Que bonito es ser soldado en las puertas del cuartel\n\
con el fusil en el hombro saludando al coronel (bis)\n\
tara ra ra ra que ¡vivan los voluntarios!\n\
tara ra ra ra ¡son valiente son soldados!\n\
tara ra ra ra\n\
¡viva la patria, viva el poder!,\n\
¡vivan los hombres de gran valor!\n\
y mi coronel también ….\
','\
Con dos años de soldado miren bien lo que he sacado\n\
un triste grado de cabo y un capote remendado. (bis)\n\
tara ra ra ra que ¡vivan los voluntarios!\n\
tara ra ra ra ¡son valiente son soldados!\n\
tara ra ra ra\n\
¡viva la patria!, ¡viva el poder!,\n\
¡vivan los hombres de gran valor!\n\
y mi coronel también.\
','\
Con la pana del chofer y la pata del carillo\n\
Panupali, Porotillo conquistaron su deber (bis)\n\
tara ra ra ra que ¡vivan los voluntarios!\n\
tara ra ra ra ¡son valiente son soldados!\n\
tara ra ra ra\n\
¡viva la patria!, ¡viva el poder!,\n\
¡vivan los hombres de gran valor!\n\
y mi coronel también.\
'
],
indication: 'La canción AL CORONEL se cantará en reuniones sociales en el onomástico del Sr. comandante\
'
    },
    {
      id:13,
      title: 'Ay Si Me Late',
      image_path: '/assets/imagenes/canciones/ay_si_me_late.png',
      text: ['\
      Ay, si me late, late, late, late, late el corazón\n\
Me late el corazón, me late el corazón.\
','\
Ay, si me late, late, late, late, late el corazón\n\
Es puro amor por ti.\
','\
Cuando los Soldados por las calles pasan\n\
las muchachas abren las puertas de sus casas\n\
todo eso y nada más, que todo eso y nada más\n\
que por el sonar del clarín, todo eso y nada más que por el del timbal.\
','\
Soldado debes a las mujeres\n\
Besarlas siempre si tu las quieres\n\
Soldado debes siempre besarlas\n\
Soldado debes siempre alegre ser.\
','\
Ay, si me late ..................................\n\
Ay, si me late ..................................\n\
','\
Cuando ya la guerra se haya terminado\n\
todas las muchachas con otros se han casado\n\
todo eso y nada más, que todo eso y nada más\n\
que por el sonar del clarín, todo eso y nada más\n\
que por el del timbal.\
'],
indication: 'La canción AY SI ME LATE se cantará en\
reuniones sociales.\
'
    }

  ];
  
  export const getSongs = () => songs;
  
  export const getSong = (id: number) => songs.find(element => element.id === id);
  