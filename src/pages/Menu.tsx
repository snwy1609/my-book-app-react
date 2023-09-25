import { IonContent, IonHeader, IonMenu, IonPage, IonButton, IonIcon, IonItem, IonRouterOutlet, IonTitle, IonToolbar, IonMenuToggle, IonSplitPane } from '@ionic/react';
import { homeOutline, logOutOutline, personOutline, settingsOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Tabs from './Tabs';

const Menu: React.FC = () => {
    const paths = [
        { name: 'Home', url: '/app/home', icon: homeOutline},
        { name: 'Profile', url: '/app/list', icon: personOutline },
       

    ];
    return (
        <IonPage>
          <IonSplitPane contentId="main">
           <IonMenu contentId='main' side='end'>
            <IonHeader>
                <IonToolbar color={'secondary'}>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
         
           <IonContent >
               {paths.map((item,index) => (
                <IonMenuToggle  key={index} autoHide={false}>
                     <IonItem detail={true} routerLink={item.url} routerDirection="none">
                      <IonIcon icon={item.icon} className="ion-padding"></IonIcon>{item.name}
                   </IonItem>
                </IonMenuToggle>
                  
               ))}

               <IonMenuToggle  autoHide={false}> 
                     <IonButton expand='full'  routerLink='/' routerDirection="root" color={'secondary'}>
                      <IonIcon slot='start' icon={logOutOutline}></IonIcon>Logout
                   </IonButton>
                </IonMenuToggle>
           </IonContent>

          </IonMenu>
           <IonRouterOutlet id="main">
             <Route exact path= "/app/list" component={List} />
             <Route path= "/app/home" component={Tabs} />
             <Route exact path="/app">
                <Redirect to="/app/home" />
             </Route>
           </IonRouterOutlet>
           </IonSplitPane>
        </IonPage>
    );
};

export default Menu;