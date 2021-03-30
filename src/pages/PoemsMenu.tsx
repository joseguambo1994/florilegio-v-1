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
import PoemListItem from '../components/PoemListItem';
import { Poem, getPoems } from '../data/poems';

function PoemsMenu() {
 
  const [poems, setPoems] = useState<Poem[]>([]);

  useIonViewWillEnter(() => {
    const poms = getPoems();
    setPoems(poms);
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
          {poems.map(element => <PoemListItem key={element.id} poem={element} />)}
        </IonList>
        </>
     
      </IonContent>
    </IonPage>
  );
}

export default PoemsMenu;
