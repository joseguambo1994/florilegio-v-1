import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Tradition } from '../data/traditions';
import './MessageListItem.css';

interface TraditionListItemProps {
  tradition: Tradition;
}

const TraditionListItem: React.FC<TraditionListItemProps> = ({ tradition }) => {
  return (
    <IonItem routerLink={`/tradition/${tradition.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {tradition.title}
        </h2>

      </IonLabel>
    </IonItem>
  );
};

export default TraditionListItem;
