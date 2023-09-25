import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonCard, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonMenuButton, IonMenuToggle } from '@ionic/react';
import React from 'react';
import RecommendationCard from '../pages/components/RecommendationCard'


import SwiperCard from './components/Swiper';
import TopPicksCard from '../pages/components/TopPicksCard';

const Home: React.FC = () => {

   
      
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar color={'primary'}>
                <IonTitle>Home</IonTitle>
                <IonButtons slot='end'>
                <IonMenuToggle autoHide='false'>
                    <IonButton>
                    <img
                        src="https://picsum.photos/id/89/400/200" // Replace with the URL or path to your image
                        alt="Your Image Alt Text"
                        className="circle-image"
                        style={{ border: 'solid', borderColor: 'white' }} // Apply the circle-image class here
                    />
                    </IonButton>
                </IonMenuToggle>
                </IonButtons>
            </IonToolbar>
            </IonHeader>
            <IonContent scrollY>
             
            

               <SwiperCard />
                <div style={{height:'250px'}}>
                          <RecommendationCard /> 
                </div>
                
                <div style={{height:'250px'}}>
                      <TopPicksCard />
                </div>
             
             
         
              
         

           
            </IonContent>
        </IonPage>
    );
};

export default Home;