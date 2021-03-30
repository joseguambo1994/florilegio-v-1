export interface Purpose {
    id: number;
    title: string;
    text: Array<string>;
    image_path: string;
  }
  
  const purposes: Purpose[] = [
  
    {
      id:1,
      title: 'Propósito',
      image_path: '/assets/imagenes/propositos/proposito.png',
      text : [
        '      El tiempo que todo lo descubre y lo rebela, también suele erosionar, deformar y aun destruir.\
        Las tradiciones no escapan a este deterioro, muy por el contrario; y ello ha venido ocurriendo\
        con nuestras canciones militares que, año a año, experimentan variaciones caprichosas, muchas\
        veces sin sentido, que alteran su texto original, lo que puede observarse en las canciones que son\
        distribuidas en los aniversarios de las armas en las efemérides importantes.'
        ,
        'Por ello hemos considerado de toda conveniencia rescatar la pureza original de ellas para\
        proyectarlas hacia el futuro en su integridad y con el debido respeto a sus autores.\
        Se ha aprovechado a este trabajo para agregar a los himnos y canciones oficiales una selección\
        de poesías alusivas al ancestro y al espíritu de nuestra arma, también viejas y nuevas canciones\
        que alegraron las vivencias de juventud en nuestros cuarteles y otras cuyas temáticas llevan la\
        visión de nuestros campos, raíces de nuestra nacionalidad simbolizada por su personaje clásico,\
        el hombre a caballo, su cabalgadura, el tanque, sus costumbres, hábitos y sentimientos.\
        ',
        'Este florilegio esta elaborado para los oficiales y personal de tropa nuevos que vienen a engrosar\
        las filas de la gloriosa arma de caballería blindada y que por una eternidad se mantengan las\
        tradiciones que son producto de las diferentes epopeyas del arma.'
      ]

    }
  ];
  
  
  export const getPurpose = () => purposes.find(element => element.id === 1);
  