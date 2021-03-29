import { useState } from 'react';
import { Purpose, getPurpose } from '../data/purpose';
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

function ViewPurpose() {
  const [purpose, setPurpose] = useState<Purpose>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const purps = getPurpose();
    setPurpose(purps);
  });
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Propósito" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen >
        {purpose ? (
          <>
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {purpose.title}
                 
                </h2>
                {/* <h3>
                  To: <IonNote>Me</IonNote>
                </h3> */}
              </IonLabel>
            </IonItem>

            <div className="ion-padding" style={{ 'background': 'url('+purpose.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
      
              <p>{purpose.text}</p>
       


            
             
             
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPurpose;