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
    text: 'Propósito'
  },
  {
    id:3,
    text: 'Historia'
  },
  {
    id:4,
    text: 'Himnos'
  },
  {
    id:5,
    text: 'Cancionero'
  },
  {
    id:6,
    text: 'Poemas'
  },
  {
    id:7,
    text: 'Brindis'
  }
];

export const getMenus = () => menus;

export const getMenu = (id: number) => menus.find(m => m.id === id);
