import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import Image from '../assets/favicon.png'
import './intro.css';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick= {() => swiper.slideNext()}>{children}</IonButton>;
}
const Intro: React.FC<ContainerProps> = ({onFinish}) => {
     
    return (
        <Swiper>
            <SwiperSlide>
              <div className='ion-text-center ion-padding' >
                    <img src={Image} alt="logo"  />
               </div>
               <IonText>Build you own app</IonText>
               <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ion-text-center ion-padding' >
                    <img src={Image} alt="logo"  />
               </div>
               <IonText>Build you own app</IonText>
               <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ion-text-center ion-padding' >
                    <img src={Image} alt="logo"  />
               </div>
               <IonText>Build you own app</IonText>
               <IonButton onClick= {() => onFinish()}>Finish</IonButton>
            </SwiperSlide>
           
        </Swiper>
    );
};

export default Intro;