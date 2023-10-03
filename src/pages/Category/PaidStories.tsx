import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonModal,
  IonIcon,
  IonGrid,
  IonCol,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonPage,
} from '@ionic/react';
import { add, bookSharp, listOutline, readerOutline, star } from 'ionicons/icons';
import MyModal from '../components/MyModal';
import { useHistory } from 'react-router';
import BookCard from './CategoryCard';

const MyComponent = () => {
  const [responseData, setResponseData] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual Google Books API key
      const apiKey = 'AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw';
      const maxResults = 40;
      const path = `https://www.googleapis.com/books/v1/volumes?q=randoms&maxResults=${maxResults}&key=${apiKey}`;
      const response = await fetch(path);
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  // Function to open the modal with the selected item's details
  const openModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // Use this to navigate back
  };


  return (

    <IonPage>
  
        <IonHeader>
            <IonToolbar color={'primary'}>
            <IonBackButton defaultHref="/app/home/tab5" onClick={handleGoBack} slot='start'/>
            <h4 className='ion-padding-start' style={{}}>Paid Stories</h4>

            </IonToolbar>
        </IonHeader>
        <IonContent className=' ion-padding-top'>
      {responseData && responseData.items && (
       
        
          <div style={{ overflowY: 'auto', marginLeft:'5px' }}>
            {responseData.items.map((item: any, index: number) => (
                 <BookCard key={index} book={item} openModal={openModal} />
            
            ))}
                
         
        </div>
      )}

      {/* Ionic Modal */}
      <MyModal isOpen={showModal} onClose={closeModal} selectedItem={selectedItem} />
   
    </IonContent>
    </IonPage>
    
  );
};

export default MyComponent;
