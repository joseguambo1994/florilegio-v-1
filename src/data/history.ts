export interface History {
    id: number;
    text:string;
    content: string;
  }
  
  const history: History[] = [
  
    {
      id:1,
      text: 'Historia 1',
      content: 'Historia Historia Historia Historia Historia Historia Historia Historia  '
    }
  ];
  
  
  export const getHistory = () => history.find(element => element.id === 1);
  