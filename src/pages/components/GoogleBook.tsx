import { IonAvatar, IonButton, IonButtons, IonCard, IonDatetime, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSegment, IonSegmentButton, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter } from '@ionic/react';
import { addOutline, trashBinOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';


const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [books, setBooks] = useState<any[]>([]);
    const [showAlert] = useIonAlert();
    const [showToast] = useIonToast();
    const [selectedBook, setSelectedBook] = useState<any>(null);
    const modal = useRef<HTMLIonModalElement>(null);
    const cardModal = useRef<HTMLIonModalElement>(null);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const page = useRef(null);

    const [activeSegment, setActiveSegment] = useState<any>('details');

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    useIonViewWillEnter(async () =>{
        const booksData = await getBooks();
        console.log('hello')
        setBooks(booksData);
        setLoading(false);
    });

    const getBooks = async () => {
        const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=romantic&key=AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw');
        const booksData = await data.json();
        return booksData.items; // Use .items to access the list of books
        
    };

    const clearList = () => {
        showAlert({
            header: 'Confirm!',
            message: 'Are you sure you want to delete all users?',
            buttons: [
                {text: 'Cancel', role: 'cancel'},
                {
                    text: 'Delete',
                    handler:() => {
                        setBooks([]);
                        showToast({
                            message: 'All users deleted',
                            duration: 2000,
                            color: 'danger',
                        })
                    },
                },
            ],

        });
    };

    const doRefresh = async (event: any) => {
        const data = await getBooks();
        setBooks(data);
        event.detail.complete();
    };


    return (
        <IonPage ref={page}>
           


            <IonContent >

                <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
                    <IonRefresherContent/>
                </IonRefresher>

                {loading &&
                    [...Array(10)].map((_, index) => (
                        <IonCard key= {index}>
                        {/* <IonCardHeader>
                            <IonCardTitle>Tes</IonCardTitle>
                        </IonCardHeader> */}
                        <IonCardContent className='ion-no-padding'>
                           
                            <IonItem lines="none" mode='ios'>
                                <IonAvatar slot="start">
                                   <IonSkeletonText />
                                 </IonAvatar>
                                <IonLabel>
                                    <IonSkeletonText  animated style={{ width: '150px'}}/>
                                    <p>
                                        <IonSkeletonText />
                                    </p>
                                </IonLabel>
                                <IonChip slot='end' color={'primary'}>
                                </IonChip>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                 ))}

                {books.map((book, index)  => (
                    <IonCard key= {index} onClick={() => setSelectedBook(book)}>
                        {/* <IonCardHeader>
                            <IonCardTitle>Tes</IonCardTitle>
                        </IonCardHeader> */}
                        <IonCardContent className='ion-no-padding'>
                           
                            <IonItem lines="none">
                                <IonAvatar slot="start">
                                    <IonImg src={book.volumeInfo.imageLinks?.thumbnail} />
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

                <IonModal breakpoints={[0, 0.5, 0.8]} initialBreakpoint={0.8} 
                     ref={modal} 
                     isOpen={selectedBook !== null} 
                     onIonModalDidDismiss={() => setSelectedBook(null)}>
                    <IonHeader>
                        <IonToolbar color={'light'}>
                            <IonButtons slot='start'>
                                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                            <IonTitle>
                                {selectedBook?.volumeInfo.title}
                            </IonTitle>
                        </IonToolbar>
                        <IonToolbar color={'light'}>
                            <IonSegment value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value)}>
                                <IonSegmentButton value="details">Details</IonSegmentButton>
                                <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
                            </IonSegment>

                        </IonToolbar>
                    </IonHeader>
                    <IonContent className='ion-padding'>
                        {activeSegment === 'details' && (
                            <IonCard>
                                <IonAvatar slot="start">
                                    <IonImg src={selectedBook?.volumeInfo.imageLinks?.thumbnail} />
                                </IonAvatar>

                                <IonCardContent className='ion-no-padding'> 
                                    <IonItem lines='none'>
                                        <IonLabel className='ion-text-wrap'>
                                            {selectedBook?.volumeInfo.title}
                                            <p>{selectedBook?.volumeInfo.authors?.join(', ')}</p>
                                        </IonLabel>
                                    </IonItem>
                                </IonCardContent>
                            </IonCard> 
                        )}

                        {activeSegment === 'calendar' && <IonDatetime />}
                        
                    </IonContent>
                </IonModal>
            </IonContent>

            <IonModal ref={cardModal} trigger="card-modal" presentingElement={presentingElement!}>
                   <IonHeader>
                        <IonToolbar color={'secondary'}>
                            <IonButtons slot='start'>
                                <IonButton onClick={() => cardModal.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                            <IonTitle>
                                Card Modal
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                       <p>My card modal</p>
                    </IonContent>
            </IonModal>

            <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                <IonFabButton id="card-modal">
                    <IonIcon icon={addOutline}/>
                </IonFabButton>
            </IonFab>
        </IonPage>
    );
};

export default List;
