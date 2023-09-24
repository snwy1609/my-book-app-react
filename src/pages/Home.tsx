import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonCard, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import RecommendationCard from './components/RecommendationCard';
import SwiperCard from './components/Swiper';

const Home: React.FC = () => {

   
      
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle >Home</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton >
                        <img
                                src="https://picsum.photos/id/89/400/200" // Replace with the URL or path to your image
                                alt="Your Image Alt Text"
                                className="circle-image" style={{border:'solid', borderColor: 'white'}} // Apply the circle-image class here
                            />
                         </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <SwiperCard /> 

                    

                  <RecommendationCard />
              
         

            {/* <IonGrid color={'primary'}>
                <IonRow className='ion-justify-center'>
                  <IonCol>
                  <IonList>
                    {items.map((item, index) => (
                    <IonItem key={item}>
                        <IonAvatar slot="start">
                            < img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
                         </IonAvatar>
                         <IonLabel>{item}</IonLabel>
                    </IonItem>
                        ))}
                    </IonList>
                    <IonInfiniteScroll
                        onIonInfinite={(ev) => {
                        generateItems();
                        setTimeout(() => ev.target.complete(), 500);
                        }}
                    >
                        <IonInfiniteScrollContent></IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                    
                  </IonCol>
               
            </IonRow>
               
           </IonGrid> */}

      
            </IonContent>
        </IonPage>
    );
};

export default Home;