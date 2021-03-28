import { useState } from 'react';
import { Song, getSong } from '../data/songs';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonImg,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import { url } from 'node:inspector';

function ViewSong() {
  const [song, setSong] = useState<Song>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const sng = getSong(parseInt(params.id, 10));
    setSong(sng);
  });
  
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Florilegio" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen >
        {song ? (
          <>
             
          <div className="ion-padding" style={{ 'background': 'url('+song.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
      
      <IonItem>

        <IonLabel className="ion-text-wrap">
          <h2>
            {song.title}

          </h2>

        </IonLabel>
      </IonItem>

      {/* <IonImg src={anthem.content} /> */}
      <p>{song.text}</p>
  </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewSong;
