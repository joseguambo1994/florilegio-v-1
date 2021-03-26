export interface Poem {
    id: number;
    text:string;
    content: string;
  }
  
  const poems: Poem[] = [
  
    {
      id:1,
      text: 'Poem1',
      content: 'Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 Poem 1 '
    },
    {
      id:2,
      text: 'Poem 2',
      content: 'Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2Poem 2'
    },
    {
      id:3,
      text: 'Poem 3 ',
      content: 'Poem 3 Poem 3 Poem 3 Poem 3 Poem 3 Poem 3 Poem 3 Poem 3 Poem 3 '
    },
  ];
  
  export const getPoems = () => poems;
  
  export const getPoem = (id: number) => poems.find(element => element.id === id);
  