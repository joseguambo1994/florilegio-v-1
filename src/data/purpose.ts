export interface Purpose {
    id: number;
    text:string;
    content: string;
  }
  
  const purposes: Purpose[] = [
  
    {
      id:1,
      text: 'Propósito 1',
      content: 'PropósitoPropósitoPropósitoPropósitoPropósitoPropósito'
    }
  ];
  
  
  export const getPurpose = () => purposes.find(element => element.id === 1);
  