import { useState } from 'react';
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
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonList
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import { url } from 'node:inspector';
import ToastListItem from '../components/ToastListItem';
import { Toast, getToasts } from '../data/toasts';

function ToastsMenu() {
 
  const [toasts, setToasts] = useState<Toast[]>([]);

  useIonViewWillEnter(() => {
    const tost = getToasts();
    setToasts(tost);
  });



  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Menu Brindis" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen>
        {/* <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher> */}

          <>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Florilegio
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {toasts.map(element => <ToastListItem key={element.id} toast={element} />)}
        </IonList>
        </>
     
      </IonContent>
    </IonPage>
  );
}

export default ToastsMenu;
