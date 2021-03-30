import { useState } from 'react';
import { Index, getIndex } from '../data/index_florilegio';
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

function ViewIndex() {
  const [index, setIndex] = useState<Index>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const indx = getIndex();
    setIndex(indx);
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
        {index ? (
          <>
          
            <IonItem>
              {/* <IonIcon icon={personCircle} color="primary"></IonIcon> */}
              <IonLabel className="view-title">
                <h2 id="title-format">
                  {index.title}
                 
                </h2>
              </IonLabel>
            </IonItem>

            {/* <div className="ion-padding" style={{ 'background': 'url('+index.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}> */}
   
              <h1>{index.title}</h1>
              <p className="poem-format">{index.text}</p>
       


            
             
             
            {/* </div> */}
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewIndex;
