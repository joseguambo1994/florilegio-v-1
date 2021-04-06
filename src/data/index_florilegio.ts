export interface Index {
    id: number;
    title: string;
    text:string;
    image_path:string;
    
  }
  
  const indexes: Index[] = [
  
    {
      id:1,
      title: 'Índice',
      image_path: '/assets/himnos/florilegio_imagen.png',
      text: '\
Propósito 3\n\
Historia 4,5,6\n\
Himnos\n\
Himno Nacional 7\n\
Himno del Ejército 8\n\
Himno del Arma de Caballería Blindada 9\n\
Cancionero\n\
El Corralero 11\n\
Caballería Blindada Ecuatoriana 12\n\
Arma Ligera 13\n\
Himno a San Jorge 14\n\
Oh Gallarda Legión Valerosa 15\n\
Himno al Grupo de Caballería Yaguachi 16\n\
Cazadores a la Lid 17\n\
Febres Cordero 18\n\
Canción del Subteniente de Caballería Blindada 19\n\
Soldado de Levita 20\n\
Bravos del Yaguachi 21\n\
Canción al Coronel 22\n\
Ay si me late 23\n\
Poemas\n\
Esposa del soldado 25\n\
Un General retirado 26\n\
Seguiré siendo soldado 27\n\
Historia de Caballería Blindada del Ecuador 28\n\
Vocación y Herencia 29\n\
Antología 30\n\
La oración de un Padre 31\n\
Brindis\n\
Brindis del Arma de Caballería Blindada 33\n\
Brindis del Jinete 33\n\
Brindis del Soldado de Caballería 34\n\
Brindis en Reuniones Sociales 35\n\
Brindis del Jefe de Tanque 36\n\
El que bebe 36\n\
Brindis de Galo Chávez 36\n\
Brindis del Caballero 37\n\
Inolvidales Cabas 38-39\n\
Brindis a la Caballería 40\n\
quotationmarkCanto a mi Jacaquotationmark 41\n\
quotationmarkAuto Sugestiónquotationmark 42-43\n\
Rebelde 44-45\n\
Cantares al Viento 46\n\
Soy de Caballería 47\n\
Mi Caballo 48\n\
Los Caballos 49-50\n\
Canción del Cuadro Negro 51\n\
Saludo a los Granaderos (Sldos de Caballería) 52\n\
El Corralero 53\n\
Himno al Arma de Caballería 54\n\
Caballería Ecuatoriana 55\n\
Arma ligera que transpone Montes 56\n\
3\n\
Conscripto Flores (Flores) 57\n\
Raudos Corceles 58\n\
¡Oh! Gallarda Legion Valerosa 59\n\
Porque Quiero la Caballería 60\n\
Himno de la Caballería N° 13 quotationmarkYAGUACHIquotationmark 61\n\
Homenaje al Arma de Caballería mi Caballo 62-63-64\n\
Brindis de Caballería 65\n\
Caballería 66\n\
Zamba para la Delfina 67\n\
La Lanza 68\n\
Zamba del Vivac 69\n\
Recuerdos de un Granadero 70-71-72\n\
Polaina Canchera 73\n\
La Carreta 74\n\
Camino del Gualeyan 75\n\
Soy de Villegas 76\n\
Adiós a Gualeguaychu 77\n\
El Irete 78\n\
Pingos Patrios 79\n\
Orgullo de Marca 80\n\
Sargento Ayudante Veiga 81-82\n\
El Reformado 83\n\
Milonga para un Sargento Herrador 84-85-86-87\n\
Cuartetas para mi Muerte 88\n\
Soneto para los Jóvenes 89\n\
Himno del Grupo de Escuela de Caballería quotationmarkYAGUACHIquotationmark 90-91\n\
Con Sable y Lanza 92\n\
Febres Cordero 93\n\
quotationmarkLos Pingos del Granaderosquotationmark 94\n\
Soldado de Levita 95\n\
Los Mosos Militares 96\n\
Remembranzas 97\n\
El Caballo y el Amor 98-99\n\
      '
    }
  ];
  
  
  export const getIndex = () => indexes.find(element => element.id === 1);
  