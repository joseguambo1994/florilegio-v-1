export interface Index {
    id: number;
    text:string;
    content: string;
  }
  
  const indexes: Index[] = [
  
    {
      id:1,
      text: 'Index 1',
      content: 'Index Index Index Index Index Index Index Index'
    }
  ];
  
  
  export const getIndex = () => indexes.find(element => element.id === 1);
  