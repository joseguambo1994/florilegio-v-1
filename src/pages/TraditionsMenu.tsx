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
import TraditionListItem from '../components/TraditionListItem';
import { Tradition, getTraditions } from '../data/traditions';

function TraditionsMenu() {
 
  const [traditions, setTraditions] = useState<Tradition[]>([]);

  useIonViewWillEnter(() => {
    const tost = getTraditions();
    setTraditions(tost);
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

      
      
      <IonContent fullscreen className="secondary_menu">
          <>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Florilegio
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {traditions.map(element => <TraditionListItem key={element.id} tradition={element} />)}
        </IonList>
        </>
     
      </IonContent>
    </IonPage>
  );
}

export default TraditionsMenu;
