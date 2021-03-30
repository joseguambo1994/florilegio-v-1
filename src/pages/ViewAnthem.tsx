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

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú de Himnos" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view">
        {anthem ? (
          <>
          
          <div className="ion-padding" style={{ 'background': 'url('+anthem.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
      
            <IonItem>
     
              <IonLabel className="view-title">
                <h2 id="title-format">
                  {anthem.title}

                </h2>

              </IonLabel>
            </IonItem>

            {/* <IonImg src={anthem.content} /> */}
            {anthem.text.map(element => <p className="poem-format">{element}</p>  )}
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
