import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import Image from '../assets/favicon.png'
import Intro from '../components/intro'
import { Preferences } from '@capacitor/preferences';

const INRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const [ present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INRO_KEY});
            // console.log('nice', seen)
            setIntroSeen(seen.value === 'true');
        };
        checkStorage();
    }, []);

    const doLogin = async(event: any) => {
        event.preventDefault();
        await present ('Logging in...');
        setTimeout(async() => {
            dismiss();
            router.push('/app', 'root');
        },2000);
        
    };

    const finishIntro = async() => {
        setIntroSeen(true);
        Preferences.set({ key: INRO_KEY, value: 'true'});
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INRO_KEY});
    }
    return (
        <>
        { !introSeen ? (
            <Intro onFinish={finishIntro}/> 
         ) : (
        
        <IonPage>
            <IonHeader>
                <IonToolbar color={''}>
                    <IonTitle>Book App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               
               <IonGrid fixed>
                  <IonRow class='ion-justify-content-center ion-margin-top'>
                     <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                          <div className='ion-text-center ion-padding' >
                             <img src="../assets/BookLogo.png" alt="logo"  width={'40%'}/>
                          </div>
                     </IonCol>
                </IonRow>

                <IonRow class='ion-justify-content-center'>
                     <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                        <IonCard>
                            <IonCardContent className='ion-padding'>
                                
                                <form onSubmit={doLogin}>
                                    <IonInput mode='md' fill="outline" labelPlacement='floating' label='Email' type='email' placeholder='name@gmail.com'></IonInput>
                                    <IonInput mode='md' fill="outline" className='ion-margin-top' labelPlacement='floating' label='Password' type='password' placeholder='password'></IonInput>
                                    <IonButton type='submit' expand='block' className='ion-margin-top'>
                                        Login
                                        <IonIcon icon={logInOutline}></IonIcon>
                                    </IonButton>
                                    <IonButton  routerLink='/register' type='button' color={'secondary'} expand='block' className='ion-margin-top'>
                                        Create Account
                                        <IonIcon icon={personCircleOutline}></IonIcon>
                                    </IonButton>
                                    <IonButton  onClick={seeIntroAgain} size='small' fill='clear' type='button' color={'medium'} expand='block' className='ion-margin-top'>
                                        Watch Intro Again
                                    
                                    </IonButton>
                                </form>
                            </IonCardContent>
                        </IonCard>
                     </IonCol>
                </IonRow>
              </IonGrid>
            
          
            </IonContent>
        </IonPage>
        )}
      </>
    );
};

export default Login;