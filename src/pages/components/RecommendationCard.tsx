import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

const Recommendation: React.FC = () => {

    const [items, setItems] = useState<string[]>([]);

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(`Item ${1 + items.length + i}`);
      }
      setItems([...items, ...newItems]);
    };

    useEffect(() => {
        generateItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      

      
  return (
    <IonContent>
     <h4 className='ion-padding-start'>Recommendations</h4>
      <div style={{display:'flex', overflowX: 'auto'}}>
        {items.map((item, index) => (
          <div className="home" style={{ display: 'flex', flexDirection: 'row' }}>
            
          <IonCard key={item} className="relative" style={{width: '110px', position: 'relative' }}>
            <img
              className="rounded-2xl shadow-xl object-fit"
              src={'https://picsum.photos/80/80?random=' + index}
              alt="avatar"
              style={{height: '200px'}}
            />

              <div  style={{
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
                 {item}
              
            </div>
          </IonCard>
    
        </div>
      ))}
      </div>
    </IonContent>
  );
};

export default Recommendation;
