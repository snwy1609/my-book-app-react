import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import ReadBook from './pages/ReadBook';
import Home from './pages/Home';
import PaidStory from './pages/Category/PaidStories';

setupIonicReact({
  // mode: 'ios',
  // animated: false,
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
       <Route component={Register} path="/register" exact />
       <Route component={Menu} path="/app"    />
       <Route path="/read-book/:itemId" component={ReadBook} exact />
       <Route path="/home" component={Home} />
       <Route path="/app/home/tab5/paid" component={PaidStory} />

      </IonRouterOutlet>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
