import { useState } from 'react';
import { History, getHistory } from '../data/history';
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

function ViewHistory() {
  const [history, setHistory] = useState<History>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const histor = getHistory();
    setHistory(histor);
  });
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Historia" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen >
        {history ? (
          <>
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {history.text}
                 
                </h2>
                {/* <h3>
                  To: <IonNote>Me</IonNote>
                </h3> */}
              </IonLabel>
            </IonItem>

            <div className="ion-padding" >

              <h1>{history.content}</h1>
              <p>{history.content}</p>
       


            
             
             
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewHistory;
