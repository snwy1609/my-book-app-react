import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Library from '../pages/components/Library';

const LibraryPage: React.FC = () => {
    const [bookmarks, setBookmarks] = useState([]); // Define bookmarks state here

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Library</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
   <Library bookmarks={bookmarks} />
   {bookmarks.length > 0 ? (
     <ul>
       {bookmarks.map(bookmark => (
         <li key={bookmark.id}>{bookmark.volumeInfo.title}</li>
       ))}
     </ul>
   ) : (
     <p>No bookmarks available</p>
   )}
</IonContent>
        </IonPage>
    );
};

export default LibraryPage;
