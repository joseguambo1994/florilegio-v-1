import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Toast } from '../data/toasts';
import './MessageListItem.css';

interface ToastListItemProps {
  toast: Toast;
}

const ToastListItem: React.FC<ToastListItemProps> = ({ toast }) => {
  return (
    <IonItem routerLink={`/toast/${toast.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {toast.text}
        </h2>
        <h3>{toast.content}</h3>
        <p>
  </p>
      </IonLabel>
    </IonItem>
  );
};

export default ToastListItem;
