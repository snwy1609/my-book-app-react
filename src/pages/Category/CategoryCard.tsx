import React from 'react';
import { IonCard, IonCol, IonGrid, IonIcon, IonItem } from '@ionic/react';
import { bookSharp, list, listOutline, listSharp, star } from 'ionicons/icons';

const BookCard = ({ book, openModal }) => {
  // Check if book or volumeInfo is undefined before rendering
  if (!book || !book.volumeInfo) {
    return null; // Return null if data is missing
  }

  return (
    <div className='home' style={{ display: 'flex', margin: '0' }}>
      <IonCard
        style={{ width: '100%', gap: '0', height: '210px' }}
        onClick={() => openModal(book)}
      >
        <IonGrid style={{display:'flex'}}>
          <IonCol size='4'>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || ''}
              alt='Book Cover'
              style={{
                maxWidth: '120px',
                height: '200px',
                objectFit: 'cover',
              }}
            />
          </IonCol>

          <IonCol size='8'>
            <IonItem lines='none'>
              <div>
                <h5>{book.volumeInfo.title || 'Title not available'}</h5>
                <div style={{ display: 'flex', fontSize:'12px', color:'gray' }}>
                  <div style={{ display: 'flex', padding: '5px', alignItems:'center' }}>
                    <IonIcon icon={bookSharp} color='primary'></IonIcon>
                    {book.volumeInfo.ratingsCount || 0}
                  </div>
                  <div style={{ display: 'flex', padding: '5px', alignItems:'center' }}>
                    <IonIcon icon={star} color='secondary'></IonIcon>
                    {book.volumeInfo.averageRating || 0}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', alignItems:'center', padding: '5px'}}>
                    <IonIcon icon={listSharp} color='warning'></IonIcon>
                    {book.volumeInfo.pageCount} 
                    </div>
                </div>
                <p style={{ fontSize: '13px' }}>{book.volumeInfo.description || 'Description not available'}</p>
              </div>
              <div></div>
            </IonItem>
          </IonCol>
        </IonGrid>
      </IonCard>
    </div>
  );
};

export default BookCard;
