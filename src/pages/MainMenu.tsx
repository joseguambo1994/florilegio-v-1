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

import './MainMenu.css'

const HomeMenu: React.FC = () => {
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader className="header-color">
        <IonToolbar>
          <IonTitle className="title-color">Florilegio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="primary_menu">
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
              <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Índice 
              </IonLabel>
            </IonItem>
            <IonItem href="/purpose">
              <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Propósito 
              </IonLabel>
            </IonItem>
            <IonItem href="/history">
              <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Historia 
              </IonLabel>
            </IonItem>
            <IonItem href="/anthems">
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Himnos 
              </IonLabel>
            </IonItem>
            <IonItem href="/songs">
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Cancionero 
              </IonLabel>
            </IonItem>
            <IonItem href="/poems">
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Poemas
              </IonLabel>
            </IonItem>
            <IonItem href="/toasts">
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Brindis 
              </IonLabel>
            </IonItem>
            <IonItem href="/traditions">
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                  Cultura y Tradición
              </IonLabel>
            </IonItem>
            
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomeMenu;
