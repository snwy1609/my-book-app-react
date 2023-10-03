import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import React from 'react';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>           
                <IonToolbar color={'primary'}>
                   <IonButtons slot='end'>
                        <IonMenuButton ></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
               
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
      <IonAvatar className="ion-margin-bottom">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </IonAvatar>
      <IonList lines="full">
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonLabel slot="end">John Doe</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonLabel slot="end">johndoe@example.com</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonLabel slot="end">***********</IonLabel>
        </IonItem>
        {/* Add more profile details as needed */}
      </IonList>
    </IonContent>
        </IonPage>
    );
};

export default Profile;