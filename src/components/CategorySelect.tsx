import React from 'react';
import { IonCard, IonCardContent, IonRouterLink } from '@ionic/react';
import uniqolor from 'uniqolor';
import { useHistory } from 'react-router';

const CategoryLink: React.FC<{ category: string; image: string; path: string }> = ({ category, image, path }) => {
  // Generate a random color
  const randColor = uniqolor.random();
  const cardStyle = {
    // backgroundColor: randColor.color,
    backgroundColor: '#f5f6f9',


  };

  const textStyle ={
      color: 'brown',
      fontSize: '16px',
      fontWeight: 'bold',
      paddingTop: '10px',
      paddingBottom: '10px'
  };
  const imageStyle = {
    right: '-20px',
    bottom: '-5px',
    maxWidth: '90px',
    transform: 'rotate(-40deg)',
    position: 'absolute',
    filter: 'contrast(0.60)',
    
  };
 
  const history = useHistory();

  const handleCardClick = () => {
    history.push(path);
  };
  

  return (
    <IonRouterLink href={path}>
      <IonCard style={cardStyle} className="rounded-xl aspect-square relative" onClick={handleCardClick} >
        <IonCardContent className=" ion-text-weight-bold">
          <div className=" pt-3 pl-4 ion-padding-top ion-padding-bottom" style={textStyle}>{category}</div>
          <img src={image || ''} style={imageStyle} alt=""  />
        </IonCardContent>
      </IonCard>
    </IonRouterLink>
  );
};

export default CategoryLink;
