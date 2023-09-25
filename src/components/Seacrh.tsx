// src/Search.tsx
import React, { useState } from 'react';
import { IonSearchbar, IonList, IonItem, IonAvatar, IonCard, IonCardContent, IonChip, IonImg, IonLabel } from '@ionic/react';
import { searchBooks } from '../data/searchBook';
import MyModal from '../pages/components/MyModal';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = async (e: CustomEvent) => {
    const query = e.detail.value;
    setSearchQuery(query);

    if (query) {
      try {
        const results = await searchBooks(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching books:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const openModal = (item: any) => {
    setSelectedBook(item);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  const handleSearchClear = () => {
    // Clear search results when "x" button is clicked
    setSearchResults([]);
  };

  return (
    <div >
      <IonSearchbar
        mode="ios"
        placeholder="Search stories, people or reading lists"
        onIonChange={handleSearchChange}
        onIonClear={handleSearchClear}
      />
       <div style={{overflowY:'auto', maxHeight: '580px'}}>
        
        {searchResults.map((book)  => (
                    <IonCard key= {book.id}   onClick={() => openModal(book)} >
                        {/* <IonCardHeader>
                            <IonCardTitle>Tes</IonCardTitle>
                        </IonCardHeader> */}
                        <IonCardContent className='ion-no-padding' >
                           
                            <IonItem lines="none" >
                                <IonAvatar slot="start">
                                    <IonImg src={book.volumeInfo.imageLinks?.thumbnail}  />
                                </IonAvatar>
                                <IonLabel>
                                    {book.volumeInfo.title}
                                    <p>{book.volumeInfo.authors?.join(', ')}</p>
                                </IonLabel>
                                <IonChip slot='end' color={'primary'}>
                                    {book.volumeInfo.categories?.[0]}
                                </IonChip>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                ))}
              </div>
      {showModal && (
        <MyModal isOpen={showModal} onClose={closeModal} selectedItem={selectedBook}/>
      )}
    </div>
  );
};

export default Search;
