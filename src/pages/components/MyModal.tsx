import React from 'react';
import {
  IonModal,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
} from '@ionic/react';
import { listOutline, add, saveOutline, save, bookmark } from 'ionicons/icons';
import { useHistory } from 'react-router';


interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, selectedItem }) => {

    const history = useHistory();

    const handleReadButtonClick = () => {
      // Navigate to the new page when the button is clicked
      history.push(`/read-book/${selectedItem?.id}`);
      onClose();
    };
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="custom-modal">
        <IonHeader>
             <IonToolbar>
                <IonButtons slot='start'>
                   <IonButton onClick={onClose}>Close</IonButton>
                 </IonButtons>                      
           </IonToolbar>
        </IonHeader>
        <IonContent scrollY>
        <IonCard style={{ display: 'flex', justifyContent: 'center' }}>
            <IonCardContent className='ion-no-padding'>
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '30px',
                
                }}
            >
                <IonImg
                src={selectedItem?.volumeInfo.imageLinks?.thumbnail}
                style={{ height: '230px' }}
                />
            </div>

        
            </IonCardContent>
        </IonCard>

        <IonItem lines='none'>
                <IonLabel className='ion-text-wrap ion-color-primary'>
                <div className='ion-color-primary ion-padding-top'>
                    <h2 style={{ fontWeight: 'bold', fontSize: '23px' }} className='ion-color-primary'>
                    {selectedItem?.volumeInfo.title}
                    </h2>
                    <p>  {selectedItem?.volumeInfo.subtitle}</p>
                    <p style={{fontWeight:'bold', fontStyle:'oblique'}}>By: {selectedItem?.volumeInfo.authors?.join(', ')}</p>
                </div>

                <div style={{ display: 'flex', color: 'lightgrey', justifyContent: 'end', paddingTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IonIcon icon={listOutline}></IonIcon>
                    {selectedItem?.volumeInfo.pageCount} pages
                    </div>
                </div>
                <IonGrid style={{ dispay: 'flex', paddingTop: '20px', justifyContent: 'center' }}>
                    <IonRow>
                    <IonCol size='1'></IonCol>
                    <IonCol size='8'>
                        <IonButton expand='block' size='default' onClick={() => { handleReadButtonClick(); onClose(); }}>
                        <IonLabel style={{ fontSize: '16px', color: 'white' }}>Read</IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol style={{ display: 'flex', justifyContent: 'start' }} size='3'>
                        <div style={{ borderRadius: '100%', display: 'flex', margin: '5px', backgroundColor: 'white' }}>
                        <IonIcon icon={bookmark} size='large' color='white'></IonIcon>
                        </div>
                    </IonCol>
                    </IonRow>
                </IonGrid>
                <p className='ion-padding-top'>
                    <b>Description: </b>
                    {selectedItem?.volumeInfo.description}
                </p>
                <p className='ion-padding-top'><b>Publisher </b>{selectedItem?.volumeInfo.publisher}</p>
               
                <p><b>Published Date: </b>{selectedItem?.volumeInfo.publishedDate}</p>
               
                
                </IonLabel>
            </IonItem>
        </IonContent>
    </IonModal>
  );
};

export default MyModal;
