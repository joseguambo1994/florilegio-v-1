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
  useIonViewWillEnter
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
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomeMenu;
