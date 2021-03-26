export interface Menu {
    id: number;
    text:string;
  }
  
  const menus: Menu[] = [
  
    {
      id:1,
      text: 'Himno del Ecuador'
    },
    {
      id:2,
      text: 'Himno del Ejército'
    },
    {
      id:3,
      text: 'Himno de la Caballeria Blindada Galápagos'
    },
  ];
  
  export const getMenus = () => menus;
  
  export const getMenu = (id: number) => menus.find(m => m.id === id);
  