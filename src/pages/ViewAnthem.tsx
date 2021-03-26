import { useState } from 'react';
import { Anthem, getAnthem } from '../data/anthems';
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

function ViewAnthem() {
  const [anthem, setAnthem] = useState<Anthem>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const anthm = getAnthem(parseInt(params.id, 10));
    setAnthem(anthm);
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
        {anthem ? (
          <>
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {anthem.text}

                </h2>

              </IonLabel>
            </IonItem>

            <div className="ion-padding" >
         
              <h1>{anthem.content}</h1>
              <p>{anthem.content}</p>        
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewAnthem;
