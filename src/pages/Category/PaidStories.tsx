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
            <IonToolbar>
            <IonBackButton defaultHref="/app/home/tab5" onClick={handleGoBack} slot='start'/>
            <h4 className='ion-padding-start' style={{}}>Paid Stories</h4>

            </IonToolbar>
        </IonHeader>
        <IonContent className=' ion-padding-top'>
      {responseData && responseData.items && (
        <div>
        
          <div style={{ overflowY: 'auto', marginLeft:'5px' }}>
            {responseData.items.map((item: any, index: number) => (
              <div className='home' style={{ display: 'flex', margin:'0'}} >
                <IonCard
                  key={index}
                
                  style={{ width: '100%', gap: '0', height:'210px'}}
                  onClick={() => openModal(item)}
                >
                  <IonGrid>
                    <IonRow>
                        <IonCol size='4'>
                          <img
                            src={item.volumeInfo.imageLinks?.thumbnail}
                            alt='Book Cover'
                            style={{
                            maxWidth: '120px',
                            height: '200px',
                            objectFit: 'cover',
                            }}
                        />
                        </IonCol>
                        <IonCol>
                             <IonItem lines='none'>
                               
                                     <div style={{}}> 
                                        <h5>{item.volumeInfo.title} </h5>
                                        <div style={{display:'flex'}}>
                                            <div style={{display:'flex', padding:'5px'}}>
                                                <IonIcon icon={bookSharp} color='primary'></IonIcon>
                                               {item.volumeInfo.ratingsCount}
                                            </div>
                                            <div style={{display:'flex', padding: '5px'}} >
                                                <IonIcon icon={star} color='secondary'></IonIcon>
                                               {item.volumeInfo.averageRating}
                                            </div>
                                        </div>
                                        <p style={{fontSize:'13px'}}> {item.volumeInfo.description}</p>
                                        
                                    </div>
                                     <div>
                                        
                                     </div>
                               

                             </IonItem>
                        </IonCol>
                    </IonRow>
                  </IonGrid>
                
                  
                </IonCard>
           
              </div>
            ))}
                
          </div>
        </div>
      )}

      {/* Ionic Modal */}
      <MyModal isOpen={showModal} onClose={closeModal} selectedItem={selectedItem} />
   
    </IonContent>
    </IonPage>
    
  );
};

export default MyComponent;
