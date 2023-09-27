import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const ReadBookPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [book, setBook] = useState<any>(null); // You can replace 'any' with your book type

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual Google Books API key
        const apiKey = '';
        const path = `https://www.googleapis.com/books/v1/volumes/${itemId}?key=${apiKey}`;
        const response = await fetch(path);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBook(data); // Update the state with the fetched book data
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [itemId]);


  const navigateToLink = (url: string) => {
    window.open(url, '_blank'); // Opens the link in a new tab
    // Alternatively, you can use Ionic's NavController to navigate within the app:
    // history.push(url);
  };



  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // Use this to navigate back
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBackButton defaultHref='' onClick={handleGoBack} slot="start"></IonBackButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Read Book Page</h1>
        <p>Book ID: {itemId}</p>
        {book ? (
          <div>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
            <p>Description: {book.volumeInfo.description}</p>
            <IonButton  onClick={() => navigateToLink( book.volumeInfo.canonicalVolumeLink)}>
                {book.volumeInfo.infoLink}
            </IonButton>
            <p>Link: </p>
            {/* Render other book details */}
          </div>
        ) : (
          <p>Loading book data...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ReadBookPage;
