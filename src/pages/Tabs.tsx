import { IonButtons, IonContent,IonTabs, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonLabel } from '@ionic/react';
import { ellipse, homeOutline, homeSharp, librarySharp, notificationsOffSharp, notificationsSharp, pencilSharp, searchSharp, triangle } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import Tab3 from './Tab3';
import Tab2 from './Tab2';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import PaidStory from './Category/PaidStories';
import Adventure from './Category/Adventure';

const Tabs: React.FC = () => {

    return (
       <IonTabs>
          <IonTabBar slot="bottom">
              <IonTabButton tab="home" href='/app/home/tab1'>
                  <IonIcon icon={homeSharp} />
                  <IonLabel>Home</IonLabel>
               </IonTabButton>
                 <IonTabButton tab="tab5" href='/app/home/tab5'>
                  <IonIcon icon={searchSharp} />
                  <IonLabel>Search</IonLabel>
               </IonTabButton>
               <IonTabButton tab="tab1" href='/app/home/tab2'>
                  <IonIcon icon={librarySharp} />
                  <IonLabel>Library</IonLabel>
               </IonTabButton>
               {/* <IonTabButton tab="tab2" href='/app/home/tab3'>
                  <IonIcon icon={pencilSharp} />
                  <IonLabel>Tab3</IonLabel>
               </IonTabButton> */}
               <IonTabButton tab="tab4" href='/app/home/tab4'>
                  <IonIcon icon={notificationsSharp} />
                  <IonLabel>Tab4</IonLabel>
               </IonTabButton>
             
          </IonTabBar>

          <IonRouterOutlet>
            <Route path="/app/home/tab1" component={Home} />
            <Route path="/app/home/tab2" component={Tab2} />
            <Route path="/app/home/tab3" component={Tab3} />
            <Route path="/app/home/tab4" component={Tab4} />

            <Route path="/app/home/tab5" exact component={Tab5} />
            <Route path="/app/home/tab5/paid" component={PaidStory} />
            <Route path="/app/home/tab5/adventure" component={Adventure} />

            {/* //initial page */}
            <Route exact path="/app/home">
                  <Redirect to="/app/home/tab1" />
            </Route>
          </IonRouterOutlet>

         
       </IonTabs>

       
    );
};

export default Tabs;