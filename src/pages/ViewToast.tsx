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
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú de Brindis" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view">
        {toast ? (
          <>
            <div className="ion-padding" style={{ 'background': 'url('+toast.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center','minHeight':'100%'}}>
      
      <IonItem>

        <IonLabel className="view-title">
          <h2 id="title-format">
            {toast.title}

          </h2>

        </IonLabel>
      </IonItem>

      {toast.text.map(element => <p className="poem-format">{element}</p>  )}
      <IonItem>

        <IonLabel className="indication">
          <h2 id="indication-format">
            {toast.indication}

          </h2>

        </IonLabel>
      </IonItem>
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
