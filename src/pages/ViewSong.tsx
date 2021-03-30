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
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú de Canciones" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view">
        {song ? (
          <>
             
          <div className="ion-padding" style={{ 'background': 'url('+song.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center','minHeight':'100%'}}>
      
      <IonItem>

        <IonLabel id="title-format">
          <h2 id="title-format">
            {song.title}

          </h2>

        </IonLabel>
      </IonItem>

      {song.text.map(element => <p className="poem-format">{element}</p>  )}
      <IonItem>

        <IonLabel className="indication">
          <h2 id="indication-format">
            {song.indication}

          </h2>

        </IonLabel>
      </IonItem>
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
