import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {Menu, getMenu,getMenus} from '../data/himnos';
import MenuListItem from '../components/MenuListItem';
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
import AnthemListItem from '../components/AnthemListItem';
import { Anthem, getAnthems } from '../data/anthems';

function AnthemsMenu() {
 
  const [anthems, setAnthems] = useState<Anthem[]>([]);

  useIonViewWillEnter(() => {
    const mnus = getAnthems();
    setAnthems(mnus);
  });



  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Menu Himnos" defaultHref="/home"></IonBackButton>
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
          {anthems.map(element => <AnthemListItem key={element.id} anthem={element} />)}
        </IonList>
        </>
     
      </IonContent>
    </IonPage>
  );
}

export default AnthemsMenu;
