import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
// import ViewMessage from './pages/ViewMessage';
import ViewAnthem from './pages/ViewAnthem';
import AnthemsMenu from './pages/AnthemsMenu';
import HomeMenu from './pages/MainMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SongsMenu from './pages/SongsMenu';
import ViewSong from './pages/ViewSong';
import PoemsMenu from './pages/PoemsMenu';
import ViewPoem from './pages/ViewPoem';
import ToastsMenu from './pages/ToastsMenu';
import ViewToast from './pages/ViewToast';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>

        <Route exact={true}>
          <HomeMenu />
        </Route>
        <Route path="/home" exact={true}>
          <HomeMenu />
        </Route>
        <Route path="/Himnos" exact={true}>
          <AnthemsMenu />
        </Route>
        <Route path="/anthem/:id">
           <ViewAnthem />
        </Route>
        <Route path="/songs" exact={true}>
          <SongsMenu />
        </Route>
        <Route path="/song/:id">
           <ViewSong />
        </Route>
        <Route path="/poems" exact={true}>
          <PoemsMenu />
        </Route>
        <Route path="/poem/:id">
           <ViewPoem />
        </Route>
        <Route path="/toasts" exact={true}>
          <ToastsMenu />
        </Route>
        <Route path="/toast/:id">
           <ViewToast />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
