import { IonBackButton, IonButton, IonButtons, IonCard, IonRow, IonCol, IonCardContent, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline } from 'ionicons/icons'
import Image from '../assets/favicon.png'



const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    };
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonButtons>
                    <IonBackButton defaultHref="/" />                 
                </IonButtons>
                <IonTitle className='ion-text-center'>Create Account</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
           <IonGrid fixed>
             <IonRow class='ion-justify-content-center'>
                <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                    <IonCard>
                        <IonCardContent>
                            <form onSubmit={doRegister}>
                                <IonInput fill="outline" labelPlacement='floating' label='email' type='email' placeholder='name@gmail.com'></IonInput>
                                <IonInput className='ion-margin-top' fill="outline" labelPlacement='floating' label='password' type='password' placeholder='name@gmail.com'></IonInput>
                                <IonButton type='submit' expand='block' className='ion-margin-top'>
                                    Create my Account
                                    <IonIcon icon={checkmarkDoneOutline}></IonIcon>
                                </IonButton>
                            
                            </form>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
             </IonRow>
           </IonGrid>
          
      
        </IonContent>
    </IonPage>
    );
};

export default Register;