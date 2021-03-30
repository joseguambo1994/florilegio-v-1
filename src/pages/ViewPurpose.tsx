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
// import './ViewMessage.css';
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
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú Principal" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
     
      <IonContent fullscreen className="secondary_view">
        {purpose ? (
          <>
         <div className="ion-padding" style={{ 'background': 'url('+purpose.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
      
            <IonItem>
        
              <IonLabel className="view-title">
                <h2 id="title-format">
                  {purpose.title}
                </h2>
              </IonLabel>
            </IonItem>

            {/* <div className="ion-padding" style={{ 'background': 'url('+tradition.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
          */}
 
            {purpose.text.map(m => <p className="text-format">{m}</p>  )}
            
             
{/*              
            </div> */}
            </div>
          </>
        ) : (
          <div>Tradition not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPurpose;
