export interface Poem {
    id: number;
    title: string;
    text:Array<string>;
    image_path: string;
    indication: string;
  }
  
  const poems: Poem[] = [
  
    {
      id:1,
      title: 'La Esposa Del Soldado',
      image_path: '/assets/imagenes/poemas/la_esposa_del_soldado.png',
      text: ['\
      Yo quiero ahora soltar\n\
todo el cariño guardado,\n\
para brindar mi homenaje\n\
a la esposa del soldado.\
','\
La compañera ejemplar\n\
de sentimiento abnegado,\n\
que tolera nuestra vida\n\
a través de tantos años,\n\
Sufriendo las ansiedades\n\
De esta lucha sin descanso,\n\
Con caridad en el alma\n\
Y la sonrisa en los labios.\
','\
Si yo fuera gobernante,\n\
Decretaría un mandato\n\
Para hacer un monumento\n\
A la esposa del soldado.\
','\
Milagros para comer\n\
Con sueldo siempre precario;\n\
Milagros para adornar\n\
Un hogar que es visitado;\n\
Milagros para tener\n\
Los hijos bien presentados;\n\
Milagros para cumplir\n\
Vida social a destajo,\n\
Con desayunos, almuerzos\n\
Y fiestas de traje largo.\
','\
Por eso, y otras razones\n\
Al monumento citado,\n\
Yo le pondría por título:\n\
"LA VIRGEN DE LOS MILAGROS"\
','\
Paciencia para empacar\n\
su casa cada dos años;\n\
Paciencia para amoldarse\n\
a mil ambientes extraños;\n\
Paciencia para aceptar\n\
Que el marido esté encerrado,\n\
Porque le toca la guardia\n\
El día menos pensado,\n\
Sin excluir de su ausencia\n\
Ni domingos ni feriados;\
','\
Paciencia si esta semana\n\
Se levantará a las cuatro,\n\
Para servir el desayuno,\n\
Al esposo complicado\n\
Que debe estar a la diana\n\
De los nuevos reclutados;\
','\
Paciencia porque en octubre\n\
Con mil flores en los prados\n\
Parte el marido a campaña,\n\
Por varios días prolongados,\n\
Dejándola en primavera,\n\
Anhelosa y suspirando….\
','\
Si yo fuera buen pintor;\n\
le pondría nombre a un cuadro:\n\
"MADONA DE LA PACIENCIA"\n\
a la esposa del soldado.\
','\
Si el marido es mayor\n\
Ya tendrá que ir pensando\n\
en entrar a la academia\n\
Por espacio de dos años,\n\
Y si los hados son pródigos\n\
Y consigue ser nombrado,\n\
Dice adiós a la familia\n\
Por todo ese largo lapso,\n\
Porque es una tarea muy seria\n\
El poder salir laureado\n\
Y hay que pasar día y noche,\n\
Estudiando y estudiando.\
','\
Talismán de la ilusión,\n\
Acuarela del milagro,\n\
Antorcha de la paciencia,\n\
Atalaya del quebranto,\n\
Yo te quisiera decir\n\
En estas coplas mi canto,\n\
Con mi reconocimiento\n\
Por poder resistir tanto.\
','\
Luciérnaga del silencio,\n\
Guirnalda de risa y llanto,\n\
Capullo de la esperanza\n\
Vencedora del descanso,\n\
Manojo de privaciones,\n\
Muñeca de mil encantos,\n\
Ven… que ahora disponemos\n\
De un rato desocupado,\n\
Y tenemos tantas cosas\n\
Que decirnos, lado a lado,\n\
En ti mi mujer querida,\n\
Que me soportas veinte años,\n\
¡Yo veo toda la gloria\n\
De la ESPOSA DEL SOLDADO!\
'
    ]
    ,
    indication: 'El Poema La Esposa del Soldado será\
declamada en reuniones sociales y en el\
especial cuando se agasaje a la madre o cuando\
se agasaje a las esposas del personal del arma\
de caballería blindada.\
'
    },
    {
      id:2,
      title: 'Un General Retirado',
      image_path: '/assets/imagenes/poemas/un_general_retirado.png',
      text: ['\
      Yo quiero ahora soltar\n\
toEstírate Subteniente,\n\
Y endereza tu caballo,\n\
Que allí viene hacia nosotros\n\
Un General retirado.\
','\
En su ropa de civil\n\
Que ahora viste con desgano,\n\
Casi no puede captarse lo\n\
Que en sí lleva guardado.\n\
Que emociones sentirá\n\
Al llegar a nuestro lado,\n\
Si vistió nuestro uniforme\n\
Casi, casi cuarenta años….\n\
Que de recuerdos tendrá\n\
De este cuartel legendario,\n\
Que acunó sus mocedades\n\
De muchachito soldado,\n\
Con las mismas ilusiones\n\
Que nunca pasan de largo….\
','\
Baja el talón, Subteniente,\n\
Que estos jinetes de antaño\n\
Descubren cualquier falla\n\
Al dar el primer vistazo.\
','\
Cuando, en estas ceremonias,\n\
Regresan a nuestro lado,\n\
Yo les quisiera brindar\n\
Mi saludo emocionado\n\
Y decirles que el cuartel\n\
Se siente reconfortado,\n\
Al vibrar con la presencia\n\
De modelos de soldados\n\
Que a la patria dieron brillo\n\
Con su ejemplo acrisolado\n\
Y al ejército un prestigio\n\
Que no ha sido superado.\
','\
Corrígete Subteniente,\n\
Y coloca tu caballo,\n\
Para que mi General\n\
No te vea mal montado.\
','\
Mira sus ojos se empañan\n\
Cuando pasa saludando\n\
Y al izarse el tricolor,\n\
Al son de nuestro himno patrio,\n\
Hace todo lo posible\n\
Por mantenerse aplomado\n\
Y evitar que los mirones\n\
Lo descubran sollozando.\
','\
Porque esta fe militar\n\
Es una sola, muchacho,\
','\
Que empieza de calcetines\n\
Y se acaba en el camposanto;\n\
Poca cosa se consigue\n\
Con vestirse de paisano,\n\
Si dentro, la procesión,\n\
Sigue, firme desfilando\n\
Entre las puntas chiquillo,\n\
Y arregla mejor tu casco,\n\
Que hoy tenemos de visita\n\
A un viejo y noble soldado,\n\
Que viene con su presencia\n\
A llevarnos al pasado\n\
De gloriosas tradiciones\n\
Que nuestra patria ha amasado.\
','\
Saquen pecho los Conscriptos,\n\
Como nunca lo han sacado,\n\
Muestren bien la gallardía,\n\
Como jamás la han mostrado;\n\
Alinear los escuadrones\n\
Y enderezar el ganado,\n\
Que allí viene, a la derecha,\n\
Con su ropa de paisano,\n\
Un hombre que es recuento\n\
De nuestras glorias de antaño,\n\
Que prestigió el regimiento,\n\
Donde sirvió muchos años;\n\
Un hombre que luce un título\n\
Que debiéramos llevarlo\n\
Gravado bien en el alma\n\
Con acento venerado\n\
Y que, solo en dos palabras,\n\
Dice el resumen sagrado\n\
De la entrega de una vida,\n\
Como fiel apostolado,\n\
Sin buscar otras conquistas\n\
Que el honor de ser soldado.\
','\
Atención el regimiento,\n\
Que aquí llega a nuestro lado,\n\
Un crisol de nuestra patria:\n\
¡Un General Retirado…!\n\
Un GENERAL RETIRADO se declamará\
en\
'
    ]
,
indication: 'reuniones sociales y en el bautizo de los Srs.\
Subtenientes pertenecientes al arma de\
caballería blindada.'
    },
    {
      id:3,
      title: 'Seguiré Siendo Soldado',
      image_path: '/assets/imagenes/poemas/seguire_siendo_soldado.png',
      text: ['\
      Sí, señora, ¡soy soldado!\n\
Con botas y con gorra\n\
Con botones dorados\n\
Y espuelas de plata.\
','\
Soy soldado porque quiero\n\
La profesión que he tomado\n\
Porque admiro, en nuestra historia,\n\
Las glorias que se han forjado\n\
A la garra del infante\n\
A la grupa del caballo\
','\
No me interesa mi sueldo\n\
ni jamás sé lo que gano\n\
Porque en esta carrera nuestra\n\
Nadie se hace millonario\
','\
Somos ricos con la gloria\n\
De vivir emocionados\n\
Y el tesoro está en el alma\n\
Que siempre vuela en lo alto\
','\
Me duele que a usted señora\n\
No le agraden los soldados\n\
Porque dicen que son bruscos\n\
Y un tanto "soprepasados"\
','\
Sinceramente yo creo\n\
Que es un poco despiadado\n\
Este sentimiento suyo\n\
Que nos deja mal parados\
','\
Porque a pesar de sus ojos,\n\
Soñadores y dorados,\n\
A pesar de sus labios,\n\
Ardientes y apasionados,\n\
Y a pesar de tantas cosas,\n\
Que usted sabe yo me guardo\n\
Yo le aseguro señora;\n\
Seguiré siendo soldado\
'
    ],
    indication: 'SEGUIRÉ SIENDO SOLDADO se declamará en reuniones sociales y en el bautizo\
de los Srs. Oficiales y personal de tropa pertenecientes al arma de caballería blindada.\
'
    },
    {
      id:4,
      title: 'Historia De La Caballería Blindada en el Ecuador (Resumen)',
      image_path: '/assets/imagenes/poemas/historia_de_la_caballeria_blindada_en_el_ecuador_resumen.png',
      text: ['\
      Los fastos de la patria, lo escoltaron corceles,\n\
De espléndidas consignas, de gloriosos\n\
laureles,\
','\
"La audaz caballería", insigne y legendaria, ¡La\n\
más soberbia muestra de la acción\n\
libertaria!,\
','\
Desde Cone y Yaguachi, de Huachi y Verdeloma,\n\
Inició la conquista, la Inclaudicable toma,\n\
De aquel cristal ustorio, de singular esencia,\n\
Fulgente en la memoria ¡la justa independencia!\
','\
El paso del jinete, en heroica aventura,\n\
Retumbó en la contienda, su coraje y bravura.\n\
Granaderos y sables, lanceros y dragones,\n\
En busca del honor, ¡soberbios escuadrones!\
','\
Alistaban con prisa su incólume escollera,\n\
Para izar en las cumbres, nuestra bella bandera;\n\
Tras el yugo servil, su derrota venía;\n\
Junto a nuestra victoria, la noble infantería.\
','\
Estrenaba el abrazo de su sello inmortal,\n\
Al llamarse "Yaguachi", aquel nombre toral,\n\
De ese punto cimero, dintel de nuestra gloria,\n\
Donde obtuviera sucre, la primera victoria.\n\
Siendo Carlos ortega, su altivo comandante\n\
Y auspiciando la marcha con fervor exultante,\n\
Pronto Abdón calderón, ajeno a la derrota,\n\
Arengaba la lucha, con su gesto patriota,\
','\
En Tapi ya el barullo del gozo retumbaba,\n\
Un 21 de abril, cuando el sol revelaba,\n\
La noticia del triunfo conseguido en el valle,\n\
Por las férvidas tropas del coronel Lavalle.\
','\
De su marcha hacia quito, titulada "vanguardia",\n\
De febrero, "el laurel", en el portete de tarqui.\n\
De sucre a la unidad: "vengadores de Colombia"\n\
Del genio a los valientes: "los bravos del\n\
Yaguachi".\
','\
Ya a finales del año, hacia el cuarenta y dos,\n\
Desde el norte los tanques, ya venían en pos,\n\
del personal de "galápagos" y el batallón\n\
"España"\n\
para formar la unidad, ¡la primera blindada!\
','\
La nación la nombró: "batallón de los\n\
tanques",\n\
siendo luego la escuela de tropa y oficiales\n\
en cautivo resguardo de "la libertad" a Machala\n\
este esbelto escuadrón formó una nueva ala.\
','\
Los aires abrileños en\n\
el cuarenta y siete,\n\
auspiciaron la escuela, donde el nuevo jinete.\n\
al mando de Gortaire en la caballería,\n\
en San Antonio de playas, su vigor lograría,\
','\
Del mecanizado "Azuay" al de reconocimiento\n\
trece,\n\
del grupo Saraguro y del mecanizado nueve,\n\
de paso a la avanzada y desde ahí a Tenguel,\n\
quedaría integrado el de playas con el.\
','\
No obstante, es menester, mencionar con\n\
derecho\n\
y con auténtico orgullo, reconocer el hecho,\n\
de la brigada "galápagos", su egregia creación,\n\
Trascendente en la historia de esta noble\n\
nación,\
','\
Fue un primero de marzo cuando nacía aquella\n\
en pro de la defensa de este suelo y su huella.\n\
y en nombre del civismo, de su estirpe y\n\
donaire,\n\
la llamaron con lustre "campamento Gortaire".\
','\
La altivez de la patria, se escritura en la cima\n\
del coloso pichincha, y hacia él, se aproxima,\n\
la honra de sus hijos, de sus héroes mayores:\n\
Calderón, Ortiz, Grau, Vaca, Tipantuña y Flores.\
'
    ]
    ,
    indication: 'El poema de la HISTORIA DE LA CABALLERIA\
BLINDADA EN EL ECUADOR se recitará en la\
reunión social por conmemorar el día clásico del arma\
por parte de los Srs. Subtenientes y Soldados.\
'
    },
    {
      id:5,
      title: 'Vocación y Herencia',
      image_path: '/assets/imagenes/poemas/vocacion_y_herencia.png',
      text: ['\
      Escarbando en mi memoria\n\
Halle un viejo sentimiento\n\
Que se acomodo muy adentro\n\
Quizá por ser el primero\n\
Al desempolvar los recuerdos\
','\
De ese viejo sentimiento\n\
Veo en el a un muchacho\n\
Muy alegre y alocado\n\
Dispuesto a entregar la vida\n\
Para llegar a ser soldado\
','\
Hay un viejo militar\n\
Aferrado a su pasado\n\
Que revive en aquel muchacho\n\
Lo que con amor ha guardado\
','\
El ser militar le dice\n\
No es tarea tan sencilla\n\
Muchas cosas se renuncian\n\
y a mucha gente se olvida\n\
El ser militar muchacho\n\
Es para toda la vida\
','\
El ponerse el uniforme\n\
Es tarea cotidiana\n\
El sacarse el uniforme\n\
Es agonía temprana\
','\
En el uniforme muchacho\n\
No es la tela lo que importa\n\
Es lo que el representa\n\
En el corazón de quien lo porta\
','\
Las espuelas que tu has visto\n\
Son nobleza y altivez\n\
Pero sean de plata o acero\n\
Siempre estarán en tus pies\
','\
El overol es para el soldado\n\
lo que el canto para el canario\n\
y si entregas tu vida\n\
Con fiereza y bravura\n\
Serán los centinelas\n\
En tu noble sepultura\
','\
La bandera hay que llevarla\n\
Con orgullo y altivez\n\
Es tu patria que flamea\n\
En todo rincón a la vez\
','\
Y tendrás que defenderla\n\
Con tu vida si es preciso\n\
Si tienes suerte en la frontera o\n\
En el lugar que estés\
','\
He ahí mocoso inquieto\n\
Un ejemplo de honradez\n\
Y sigue soñando muchacho\n\
Y serás general después\n\
'
    ],
    indication: ''
    },
    {
      id:6,
      title: 'Antología',
      image_path: '/assets/imagenes/poemas/antologia.png',
      text: ['\
      Cuenta la historia de antaño\n\
Que estos caballos de acero\n\
Galopaban por las llanuras\n\
Conquistando el mundo entero\
','\
Se dice que no tienen miedo\n\
Ni a ríos ni desfiladeros\n\
Que se aferraban al terreno\n\
Con sus orugas de acero\
','\
Buscando siempre la gloria\n\
Pelearon a campo abierto\n\
Aplastando al enemigo\n\
Conquistaron el desierto\
','\
Ya no rugen sus motores\n\
Por la herrumbre de los años\n\
Ya no truenan sus cañones\n\
Ya cumplieron su designio\
','\
Con sus ruedas de camino\n\
Dejaron huella en el tiempo\n\
Cual garañón linudo\n\
Corrían igual que el viento\
','\
Bienvenido amigo tanquista\n\
A revivir el pasado\n\
Y alegrar el corazón\n\
De estos gloriosos soldados\
','\
Aquí nos cuentan su historia\n\
Aquí nos llenan el alma\n\
Aquí se siente la gloria\n\
Aquí descansan en calma\
'
    ],
    indication: 'El poema de ANTOLOGÍA se recitará en la reunión social por conmemorar el día\
clásico del arma por parte de los Srs. Subtenientes y Soldados.\
'
    },
    {
      id:7,
      title: 'Oración De Un Padre',
      image_path: '/assets/imagenes/poemas/oracion_de_un_padre.png',
      text: ['\
      Dame Oh Señor:\
      ','\
Un hijo que sea lo bastante fuerte,\n\
Para saber cuándo es débil;\n\
Lo bastante valeroso,\n\
Para enfrentarse consigo mismo cuando sienta miedo,\n\
Un hijo que sea orgulloso e inflexible\n\
En la derrota honrada\n\
Humilde y magnánimo en la victoria.\
','\
Dame un hijo que nunca doble la espalda\n\
Cuando debe erguir el pecho,\n\
Un hijo que sepa conocerte a ti...\n\
Y conocerse a sí mismo\n\
Que es la piedra fundamental de todo conocimiento.\
','\
Condúcelo te lo ruego\n\
No por el camino cómodo y fácil\n\
Sino por el camino áspero,\n\
Aguijoneado por las dificultades y retos.\n\
Al dejarlo aprender a sostenerse\n\
Firme en la tempestad y a sentir compasión por los que fallan\
','\
Dame un hijo cuyo corazón sea claro,\n\
Cuyos ideales sean altos,\n\
Un hijo que se domine a si mismo\n\
Antes que pretenda dominar a los demás\n\
Un hijo que avance hacia el futuro\n\
Pero que nunca olvide el pasado.\
','\
Y después que le hayas dado todo eso,\n\
Agrégale, te suplico, suficiente sentido del humor\
','\
De modo que pueda ser siempre serio\n\
Pero que no se tome así mismo\n\
Demasiado en serio\
','\
Dale humildad para que pueda recordar\n\
Siempre la sencillez de la verdadera grandeza\n\
La imparcialidad de la verdadera sabiduría\n\
La mansedumbre de la verdadera fuerza.\
','\
Entonces yo, su padre, me atreveré a murmurar....\n\
"No he vivido en vano"\
']
,
indication:'El poema LA ORACIÓN DE UN PADRE se recitará en la reunión social por conmemorar\
'
    }
  ];
  
  export const getPoems = () => poems;
  
  export const getPoem = (id: number) => poems.find(element => element.id === id);
  