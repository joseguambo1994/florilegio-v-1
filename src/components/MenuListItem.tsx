import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Menu } from '../data/menus';
import './MessageListItem.css';

interface MenuListItemProps {
  menu: Menu;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ menu }) => {
  return (
    <IonItem routerLink={`/menu/${menu.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
      
        <h3>{menu.text}</h3>
        <p>
  </p>
      </IonLabel>
    </IonItem>
  );
};

export default MenuListItem;
