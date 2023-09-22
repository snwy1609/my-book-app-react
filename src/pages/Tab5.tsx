import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import CategorySelect from '../components/CategorySelect';

const Tab5: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
                <IonToolbar color={'primary'}>
                    <IonSearchbar mode='ios'
                        placeholder = 'Search stories, people or reading lists'/>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <h4 className='ion-padding-start'>Browse Tags</h4>

              
                <div className="p-8">
    
                

      <IonGrid >
        <IonRow className="">
          <IonCol sizeXl="5" sizeLg="3" sizeSm="2"  sizeMd="8" className="ion-no-padding">
            <CategorySelect category="Paid Stories" image="https://picsum.photos/id/30/400/200" />
            <CategorySelect category="The Wattys" image="https://picsum.photos/id/3/400/200" />
            <CategorySelect category="Contemporary" image="https://picsum.photos/id/32/400/200" />
            <CategorySelect category="Fanfiction" image="https://picsum.photos/id/39/400/200" />
            <CategorySelect category="Historical Fiction" image="https://picsum.photos/id/47/400/200" />
            <CategorySelect category="Humor" image="https://picsum.photos/id/45/400/200" />
            <CategorySelect category="Editor's Picks" image="https://picsum.photos/id/58/400/200" />


            
          </IonCol>
          <IonCol sizeXl="5" sizeLg="3" sizeSm="2" size="6" sizeMd="8" className="ion-no-padding">
            <CategorySelect category="Adventure" image="https://picsum.photos/id/22/400/200" />
            <CategorySelect category="Fantasy" image="https://picsum.photos/id/25/400/200" />
            <CategorySelect category="Horror" image="https://picsum.photos/id/28/400/200" />
            <CategorySelect category="LQBTQ+" image="https://picsum.photos/id/70/400/200" />
            <CategorySelect category="Mystery" image="https://picsum.photos/id/31/400/200" />
            <CategorySelect category="Non-Fiction" image="https://picsum.photos/id/30/400/200" />
            <CategorySelect category="Romance" image="https://picsum.photos/id/30/400/200" />

            
          </IonCol>
 

          {/* Repeat this IonCol block for each CategorySelect */}
          {/* You can dynamically generate CategorySelect components here */}
        </IonRow>
      </IonGrid>
    </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab5;