import { IonAvatar, IonButton, IonButtons, IonCard, IonDatetime, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSegment, IonSegmentButton, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter, IonGrid, IonRow, IonCol, IonBackButton } from '@ionic/react';
import { add, addCircleOutline, addCircleSharp, addOutline, listOutline, partlySunnyOutline, trashBinOutline } from 'ionicons/icons';
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
        const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=programmingbooks&key=AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw');
        const booksData = await data.json();
        return booksData.items; // Use .items to access the list of books
        
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
                           
                            <IonItem lines="none" >
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

               <div>
                  <h4 className='ion-padding-start'>Recommendations</h4>
                    <div style={{display:'flex', overflowX: 'auto'}}>
                        {books.map((book, index) => (
                        <div className="home" style={{ display: 'flex', flexDirection: 'row' }}>
                            
                        <IonCard key={index} onClick={() => setSelectedBook(book)} className="relative" style={{width: '110px', position: 'relative' }}>
                            <IonImg
                            className='object-fit-cover'
                            src={book.volumeInfo.imageLinks?.thumbnail} 
                            alt="avatar"
                            style={{
                                width: '100%', // Ensure the image takes up the full width of the card
                                height: '100%', // Ensure the image takes up the full height of the card
                                objectFit: 'cover', // Use 'cover' to fit the image within the card without distortion
                              }}
                           
                            />

                            {/* <div  style={{
                                    fontWeight: 'bold',
                                    color: 'darkgray',
                                    fontSize:'15px',
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    padding: '10px 10px',
                                    borderRadius: '0 0 0px 0px',
                                    backgroundImage: 'linear-gradient(to top, #808289, transparent)',
                                }}>
                                {book.volumeInfo.title}
                            
                            </div> */}
                        </IonCard>
                    
                        </div>
                    ))}
                    </div>
               </div>


                {books.map((book, index)  => (
                    <IonCard key= {index} onClick={() => setSelectedBook(book)}>
                        {/* <IonCardHeader>
                            <IonCardTitle>Tes</IonCardTitle>
                        </IonCardHeader> */}
                        <IonCardContent className='ion-no-padding'>
                           
                            <IonItem lines="none">
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

                <IonModal breakpoints={[0, 0.5, 0.8]} initialBreakpoint={1} 
                     ref={modal} 
                     isOpen={selectedBook !== null} 
                     onIonModalDidDismiss={() => setSelectedBook(null)}>
                    <IonHeader>
                        <IonToolbar color={''}>
                            <IonButtons slot='start'>
                                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                         
                        </IonToolbar>
                        <IonToolbar color={''}>
                            <IonSegment value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value)}>
                                <IonSegmentButton value="details" >Details</IonSegmentButton>
                                <IonSegmentButton value="calendar" >Calendar</IonSegmentButton>
                            </IonSegment>

                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {activeSegment === 'details' && (
                            <IonCard style={{display: 'flex', justifyContent: 'center'}}>
                               
                                <IonCardContent className='ion-no-padding'> 
                                   <div style={{display:'flex',justifyContent: 'center', padding:'30px', borderBottom: 'solid'}}>
                                     <IonImg src={selectedBook?.volumeInfo.imageLinks?.thumbnail} style={{height:'230px'}}  />                             
                                   </div>
                                   
                                  
                                    <IonItem lines='none'>
                                        <IonLabel className='ion-text-wrap ion-color-primary'>
                                            <div className='ion-color-primary ion-padding-top'>
                                                <h2 style={{fontWeight: 'bold', fontSize: '23px'}} className='ion-color-primary'>{selectedBook?.volumeInfo.title}</h2>                       
                                                <p>{selectedBook?.volumeInfo.authors?.join(', ')}</p>
                                            
                                            </div>

                                            <div style={{display:'flex',color:'lightgrey', justifyContent:'end', paddingTop: '10px' }}>
                                            
                                               <div style={{display:'flex', alignItems:'center'}}>
                                                        <IonIcon icon={listOutline} ></IonIcon>
                                                        {selectedBook?.volumeInfo.pageCount} pages
                                             </div>      
                                                       

                                              
                                            </div>
                                            <IonGrid style={{dispay:'flex',paddingTop:'20px', justifyContent: 'center'}}>
                                                <IonRow>
                                                    <IonCol size='1'>
                                                    </IonCol>
                                                    <IonCol size='8'>
                                                       <IonButton expand='block' size='default' >
                                                          <IonLabel style={{fontSize: '16px', color:'white'}}>Read</IonLabel>
                                                       </IonButton>
                                                    </IonCol>
                                                    <IonCol style={{display:'flex', justifyContent:'start'}} size='3'>
                                                       <div  style={{borderRadius: '100%', display:'flex', margin:'5px', backgroundColor: 'lightgray'}}>
                                                            <IonIcon icon={add} size='large' color='white'></IonIcon>
                                                       </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                            
                                            <p className='ion-padding-top'><b>Description: </b>{selectedBook?.volumeInfo.description}</p>
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
