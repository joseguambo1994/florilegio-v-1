import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Song } from '../data/songs';
import './MessageListItem.css';

interface SongListItemProps {
  song: Song;
}

const SongListItem: React.FC<SongListItemProps> = ({ song }) => {
  return (
    <IonItem routerLink={`/song/${song.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {song.title}
        </h2>

      </IonLabel>
    </IonItem>
  );
};

export default SongListItem;
