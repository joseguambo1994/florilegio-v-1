import MenuListItem from '../components/MenuListItem';
import { useState } from 'react';
import { Menu, getMenus } from '../data/menus';
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

  const [menus, setMenus] = useState<Menu[]>([]);

  useIonViewWillEnter(() => {
    const currentMenus = getMenus();
    setMenus(currentMenus);
  });

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
          {menus.map(m => <MenuListItem key={m.id} menu={m} />)}
          <IonItem href="/himnos">
            <IonLabel>
                  índice 
              </IonLabel>
            </IonItem>
            <IonItem href="/himnos">
            <IonLabel>
                  Propósito 
              </IonLabel>
            </IonItem>
            <IonItem href="/himnos">
            <IonLabel>
                  Historia 
              </IonLabel>
            </IonItem>
            <IonItem href="/Himnos">
            <IonLabel>
                  Himnos 
              </IonLabel>
            </IonItem>
            <IonItem href="/Cancionero">
            <IonLabel>
                  Cancionero 
              </IonLabel>
            </IonItem>
            <IonItem href="/Poemas">
            <IonLabel>
                  Poemas
              </IonLabel>
            </IonItem>
            <IonItem href="/Brindis">
            <IonLabel>
                  Brindis 
              </IonLabel>
            </IonItem>
        </IonList>
        <IonButtons>
            <IonBackButton text="Florilegio" defaultHref="/home"></IonBackButton>
          </IonButtons>
      </IonContent>
    </IonPage>
  );
};

export default HomeMenu;
