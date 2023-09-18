import { IonContent, IonHeader, IonMenu, IonPage, IonButton, IonIcon, IonItem, IonRouterOutlet, IonTitle, IonToolbar, IonMenuToggle, IonSplitPane } from '@ionic/react';
import { homeOutline, logOutOutline, settingsOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';

const Menu: React.FC = () => {
    const paths = [
        { name: 'Home', url: '/app/list', icon: homeOutline },
        { name: 'Settings', url: '/app/settings', icon: settingsOutline},

    ];
    return (
        <IonPage>
          <IonSplitPane contentId="main">
           <IonMenu contentId='main'>
            <IonHeader>
                <IonToolbar color={'secondary'}>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
         
           <IonContent class='ion-padding'>
               {paths.map((item,index) => (
                <IonMenuToggle  key={index} autoHide={false}>
                     <IonItem detail={false} routerLink={item.url} routerDirection="none">
                      <IonIcon icon={item.icon} className="ion-padding"></IonIcon>{item.name}
                   </IonItem>
                </IonMenuToggle>
                  
               ))}

               <IonMenuToggle  autoHide={false}>
                     <IonButton expand='full'  routerLink='/' routerDirection="root">
                      <IonIcon slot='start' icon={logOutOutline}></IonIcon>Logout
                   </IonButton>
                </IonMenuToggle>
           </IonContent>

          </IonMenu>
           <IonRouterOutlet id="main">
             <Route exact path= "/app/list" component={List} />
             <Route path= "/app/settings" component={Settings} />
             <Route exact path="/app">
                <Redirect to="/app/list" />
             </Route>
           </IonRouterOutlet>
           </IonSplitPane>
        </IonPage>
    );
};

export default Menu;