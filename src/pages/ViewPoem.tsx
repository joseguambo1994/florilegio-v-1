import { useState } from 'react';
import { Poem, getPoem } from '../data/poems';
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

function ViewPoem() {
  const [poem, setPoem] = useState<Poem>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const sng = getPoem(parseInt(params.id, 10));
    setPoem(sng);
  });
  
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent className="header-color">
        <IonToolbar>
          <IonButtons>
            <IonBackButton className="title-color" text="Menú de Poemas" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      
      
      <IonContent fullscreen className="secondary_view">
        {poem ? (
          <>
            <div className="ion-padding" style={{ 'background': 'url('+poem.image_path+')','backgroundRepeat':'no-repeat','backgroundAttachment':'fixed' ,'backgroundSize':'100% 100%','backgroundColor':'rgba(0, 0, 0, 0.1)','backgroundPosition':'center'}}>
      
      <IonItem>

        <IonLabel className="ion-text-wrap">
          <h2 id="title-format">
            {poem.title}

          </h2>

        </IonLabel>
      </IonItem>
      {poem.text.map(element => <p className="poem-format">{element}</p>  )}
      <IonItem>

        <IonLabel className="indication">
          <h2 id="indication-format">
            {poem.indication}

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

export default ViewPoem;
