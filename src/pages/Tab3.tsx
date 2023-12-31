import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';
import GoogleBook from '../pages/components/GoogleBook';

const Tab1: React.FC = () => {

    const [image, setImage] = useState<any>(null)
    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 98,
            allowEditing: false,
            resultType: CameraResultType.Base64,
        });

        const img = `data:image/jpeg;base64,${image.base64String}`;
        setImage(img);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Write</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand='full' onClick={takePicture}>Take Picture</IonButton>
                <img src={image} alt="" />

                <IonGrid>
                    <GoogleBook></GoogleBook>
                </IonGrid>
            </IonContent>
            
        </IonPage>
    );
};

export default Tab1;;