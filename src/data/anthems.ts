export interface Anthem {
    id: number;
    text:string;
    content: string;
  }
  
  const anthems: Anthem[] = [
  
    {
      id:1,
      text: 'Himno del Ecuador',
      content: 'himno del ecuador contenidoa himno del ecuador contenidoa himno del ecuador contenidoa '
    },
    {
      id:2,
      text: 'Himno del Ejército',
      content: 'Himno del ejéricto contenido Himno del ejéricto contenidoHimno del ejéricto contenido Himno del ejéricto contenido'
    },
    {
      id:3,
      text: 'Himno de la Caballeria Blindada Galápagos',
      content: 'Himno de la caballeria Himno de la caballeriaHimno de la caballeriaHimno de la caballeria Himno de la caballeria'
    },
  ];
  
  export const getAnthems = () => anthems;
  
  export const getAnthem = (id: number) => anthems.find(element => element.id === id);
  