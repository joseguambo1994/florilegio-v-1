import { useState } from 'react';
import { Toast, getToast } from '../data/toasts';
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

function ViewToast() {
  const [toast, setToast] = useState<Toast>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const tost = getToast(parseInt(params.id, 10));
    setToast(tost);
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
        {toast ? (
          <>
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {toast.text}

                </h2>

              </IonLabel>
            </IonItem>

            <div className="ion-padding" >
         
              <h1>{toast.content}</h1>
              <p>{toast.content}</p>        
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewToast;
