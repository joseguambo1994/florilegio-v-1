import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Poem } from '../data/poems';
import './MessageListItem.css';

interface PoemListItemProps {
  poem: Poem;
}

const PoemListItem: React.FC<PoemListItemProps> = ({ poem }) => {
  return (
    <IonItem routerLink={`/poem/${poem.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {poem.text}
        </h2>
        <h3>{poem.content}</h3>
        <p>
  </p>
      </IonLabel>
    </IonItem>
  );
};

export default PoemListItem;
