export interface Menu {
  id: number;
  text:string;
}

const menus: Menu[] = [

  {
    id:1,
    text: 'Índice'
  },
  {
    id:2,
    text: 'Contenido'
  },
  {
    id:3,
    text: 'Canciones'
  },
];

export const getMenus = () => menus;

export const getMenu = (id: number) => menus.find(m => m.id === id);
