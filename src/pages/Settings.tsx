import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Set initial state to false for light mode

  const toggleDarkMode = () => {
    const newDarkModeValue = !isDarkMode;
    setIsDarkMode(newDarkModeValue);
    document.body.classList.toggle('dark-theme', newDarkModeValue);
  };
  

  return (
    <IonPage>

        <IonHeader>           
                <IonToolbar color={'primary'}>
                   <IonButtons slot='end'>
                        <IonMenuButton ></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Setting</IonTitle>
               
                </IonToolbar>
          </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <IonItem>
          <label> Dark Mode</label>
               <IonToggle
            checked={isDarkMode}
            onIonChange={toggleDarkMode}
           
            slot="end"
          />
            
          </IonItem>
       
        
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
