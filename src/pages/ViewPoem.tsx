import { useState } from 'react';
import { Poem, getPoem } from '../data/poems';
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

function ViewPoem() {
  const [poem, setPoem] = useState<Poem>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const sng = getPoem(parseInt(params.id, 10));
    setPoem(sng);
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
        {poem ? (
          <>
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {poem.text}

                </h2>

              </IonLabel>
            </IonItem>

            <div className="ion-padding" >
         
              <h1>{poem.content}</h1>
              <p>{poem.content}</p>        
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPoem;
