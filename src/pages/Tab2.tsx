import { CreateAnimation, createGesture, Gesture, GestureDetail, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { useRef } from 'react';

const Tab2: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Library</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <IonGrid>
                    <IonRow>
                        <IonCol size='6'>
                             <h4>Available Offline</h4>
                        </IonCol>
                        <IonCol size='6' >
                             <h6>0 Stories</h6>
                        </IonCol>
                    </IonRow>
                </IonGrid>
               
               
            </IonContent>
        </IonPage>
    );
};

export default Tab2;