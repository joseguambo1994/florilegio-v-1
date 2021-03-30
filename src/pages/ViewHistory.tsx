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
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú Principal" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view" >
        {history ? (
          <>
            <IonItem>
              <IonLabel className="view-title">
                <h2 id="title-format">
                  {history.title}
                 
                </h2>

              </IonLabel>
            </IonItem>

              
            <div className="ion-padding">
         
              <img src={history.image_path}/>
            {history.text.map(m => <p className="text-format">{m}</p>  )}
         
         
          
          
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
