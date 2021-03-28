import MenuListItem from '../components/MenuListItem';
import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButton,
  IonBackButton,
  IonButtons,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Home.css';

const HomeMenu: React.FC = () => {
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Florilegio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Florilegio
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <IonItem href="/index">
            <IonLabel>
                  índice 
              </IonLabel>
            </IonItem>
            <IonItem href="/purpose">
            <IonLabel>
                  Propósito 
              </IonLabel>
            </IonItem>
            <IonItem href="/history">
            <IonLabel>
                  Historia 
              </IonLabel>
            </IonItem>
            <IonItem href="/anthems">
            <IonLabel>
                  Himnos 
              </IonLabel>
            </IonItem>
            <IonItem href="/songs">
            <IonLabel>
                  Cancionero 
              </IonLabel>
            </IonItem>
            <IonItem href="/poems">
            <IonLabel>
                  Poemas
              </IonLabel>
            </IonItem>
            <IonItem href="/toasts">
            <IonLabel>
                  Brindis 
              </IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomeMenu;
