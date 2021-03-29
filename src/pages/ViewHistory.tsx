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
              <IonLabel className="ion-text-wrap">
                <h2>
                  {history.title}
                 
                </h2>

              </IonLabel>
            </IonItem>

              
            <div className="ion-padding">
         
         {/* <div className="ion-padding" >

         <div className="container">
         <IonImg className="poemimage" src={message.image_route} ></IonImg>
           <div className="center"> */}
           <p className="text-format">{history.text}</p>
           {/* </div>
         </div> */}


         
          
          
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
