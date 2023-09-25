import { IonCard, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper ,SwiperSlide} from 'swiper/react';

const SwiperCard: React.FC = () => {

    return (
       
           <div>
           <Swiper>
            <SwiperSlide>         
              <div>  
                  <div className='ion-padding-start'>   
                    <h3 className='ion-text-start ' >The plan is simple</h3>
                    <p className='ion-text-start'>But Maybe being together isn't as easy as it seems...</p>            
                  </div>               
                  <IonCard>                             
                    <IonImg src="https://picsum.photos/id/65/400/200" alt="logo"  style={{filter: 'contrast(0.50)', transparency:''}} />                             
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
          
            </div>
      
    );
};

export default SwiperCard;