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
} from '@ionic/react';
import { add, listOutline } from 'ionicons/icons';
import MyModal from './MyModal';

const MyComponent = () => {
  const [responseData, setResponseData] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual Google Books API key
      const apiKey = 'AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw';
      const maxResults = 40;
      const path = `https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=${maxResults}&key=${apiKey}`;
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

  return (
    <IonContent>
      {responseData && responseData.items && (
        <div>
          <h4 className='ion-padding-start' style={{}}>Recommendations</h4>
          <div style={{ display: 'flex', overflowX: 'auto', marginLeft:'5px' }}>
            {responseData.items.map((item: any, index: number) => (
              <div className='home' style={{ display: 'flex', margin:'0'}} >
                <IonCard
                  key={index}
                
                  style={{ width: '110px', gap: '0' }}
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.volumeInfo.imageLinks?.thumbnail}
                    alt='Book Cover'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  
                </IonCard>
           
              </div>
            ))}
                
          </div>
        </div>
      )}

      {/* Ionic Modal */}
      <MyModal isOpen={showModal} onClose={closeModal} selectedItem={selectedItem} />
   
    </IonContent>
    
  );
};

export default MyComponent;
