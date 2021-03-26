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
  const ruta: string = "../imagenes/imagen2.png"
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
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {song.text}

                </h2>

              </IonLabel>
            </IonItem>

            <div className="ion-padding" >
         
              <h1>{song.content}</h1>
              <p>{song.content}</p>        
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
