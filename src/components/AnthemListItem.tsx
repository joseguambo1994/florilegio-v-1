import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Anthem } from '../data/anthems';
import './MessageListItem.css';

interface AnthemListItemProps {
  anthem: Anthem;
}

const AnthemListItem: React.FC<AnthemListItemProps> = ({ anthem }) => {
  return (
    <IonItem routerLink={`/anthem/${anthem.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {anthem.text}
        </h2>
        <h3>{anthem.content}</h3>
        <p>
  </p>
      </IonLabel>
    </IonItem>
  );
};

export default AnthemListItem;
