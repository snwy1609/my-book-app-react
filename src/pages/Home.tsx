import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonCard, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonMenuButton, IonMenuToggle, IonLoading, IonRouterOutlet } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import RecommendationCard from '../pages/components/RecommendationCard';
import SwiperCard from './components/Swiper';
import TopPicksCard from '../pages/components/TopPicksCard';
import { Route, Redirect } from 'react-router';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <IonPage>
            
            <IonLoading
                isOpen={isLoading}
                message={'Loading...'}
                duration={5000} // Set the duration of the loading component (5 seconds in this example)
            />
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Home</IonTitle>
                    <IonButtons slot='end'>
                        <IonMenuToggle autoHide='false'>
                            <IonButton>
                                <img
                                    src="https://picsum.photos/id/89/400/200"
                                    alt="Your Image Alt Text"
                                    className="circle-image"
                                    style={{ border: 'solid', borderColor: 'white' }}
                                />
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY>
                <SwiperCard />
                <div style={{ height: '250px' }}>
                    <RecommendationCard />
                </div>
                <div style={{ height: '250px' }}>
                    <TopPicksCard />
                </div>
            </IonContent>


       
       
        </IonPage>
    );
};

export default Home;
