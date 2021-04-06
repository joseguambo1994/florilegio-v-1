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
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú de Cultura y Tradición" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view traditions" >
        {tradition ? (
          <>
            <IonItem>
              <IonLabel className="view-title">
                <h2 id="title-format">
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
