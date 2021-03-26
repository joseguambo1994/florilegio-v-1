export interface Toast {
    id: number;
    text:string;
    content: string;
  }
  
  const toasts: Toast[] = [
  
    {
      id:1,
      text: 'Brindis 1 ',
      content: 'Brindis 1 Brindis 1 Brindis 1 Brindis 1 Brindis 1 Brindis 1 Brindis 1 '
    },
    {
      id:2,
      text: 'Brindis 2 ',
      content: 'Brindis 2 Brindis 2 Brindis 2 Brindis 2 Brindis 2 Brindis 2 Brindis 2 '
    },
    {
      id:3,
      text: 'Brindis 3 ',
      content: 'Brindis 3 Brindis 3 Brindis 3 Brindis 3 Brindis 3 Brindis 3 Brindis 3 '
    },
  ];
  
  export const getToasts = () => toasts;
  
  export const getToast = (id: number) => toasts.find(element => element.id === id);
  