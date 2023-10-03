import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Library: React.FC<{ bookmarks: any[] }> = ({ bookmarks }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bookmarks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {bookmarks.map(bookmark => (
            <IonItem key={bookmark.id}>
              <IonLabel>
                <h2>{bookmark.volumeInfo.title}</h2>
                <p>By: {bookmark.volumeInfo.authors?.join(', ')}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Library;
