import { useState } from 'react';
import { Tradition, getTradition } from '../data/traditions';
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

function ViewTradition() {
  const [tradition, setTradition] = useState<Tradition>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getTradition(parseInt(params.id, 10));
    setTradition(msg);
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
        {tradition ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {tradition.title}
                </h2>
              </IonLabel>
            </IonItem>
            {tradition.text.map(element => <p className="text-format">{element}</p>  )}
              <img src={tradition.image_path} />
            </>
        ) : (
          <div>Tradition not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewTradition;
