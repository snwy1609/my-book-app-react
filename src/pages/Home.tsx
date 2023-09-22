import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonCard, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline, trashBinOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './List.css';
import Recommendation from './components/RecommendationCard'

const Home: React.FC = () => {

    const [items, setItems] = useState<string[]>([]);

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(`Item ${1 + items.length + i}`);
      }
      setItems([...items, ...newItems]);
    };

    useEffect(() => {
        generateItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      
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

           <IonGrid>
           <Swiper>
            <SwiperSlide>         
              <div>  
                  <div className='ion-padding-start'>   
                    <h3 className='ion-text-start ' >The plan is simple</h3>
                    <p className='ion-text-start'>But Maybe being together isn't as easy as it seems...</p>            
                  </div>               
                  <IonCard>                             
                    <IonImg src="https://picsum.photos/id/21/400/200" alt="logo"  />                             
                  </IonCard>
               </div>              
            </SwiperSlide>
            <SwiperSlide>
            <div>   
                  <div className='ion-padding-start'>
                    <h3 className='ion-text-start ion-no-padding' >The plan is simple</h3>
                    <p className='ion-text-start '>But Maybe being together isn't as easy as it seems...</p>            
                  </div> 
                  <IonCard>
                    <IonImg src="https://picsum.photos/id/65/400/200" alt="logo"  />
                  </IonCard>
               </div>              
            </SwiperSlide>
            <SwiperSlide>
               <div>   
                  <div className='ion-padding-start'>
                    <h3 className='ion-text-start ion-no-padding' >The plan is simple</h3>
                    <p className='ion-text-start '>But Maybe being together isn't as easy as it seems...</p>            
                  </div> 
                   <IonCard>          
                      <IonImg src="https://picsum.photos/id/43/400/200" alt="logo"  />
                   </IonCard> 
               </div>              
            </SwiperSlide>          
          
        </Swiper>
           </IonGrid>

           
              <Recommendation></Recommendation>
              
         

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

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;