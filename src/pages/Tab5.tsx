import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import Search from '../components/Seacrh';
import Categories from './components/Categories';


const Tab5: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar color={'primary'}>
           <Search />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Categories />
      </IonContent>

      {/* Search Results Modal */}
      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Search Results</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* Render your search results here */}
          {/* Example: */}
          <IonCard>
            <IonCardContent>
               
            </IonCardContent>
          </IonCard>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonButton expand="full" onClick={closeModal}>
              Close
            </IonButton>
          </IonToolbar>
        </IonFooter>
      </IonModal>
    </IonPage>
  );
};

export default Tab5;
