import React from 'react';
import DefaultContent from './Default.jsx';
import Cleverbot from './Cleverbot.jsx';
import Weather from './Weather.jsx';
import Yelp from './Yelp.jsx';
import EasterEgg from './EasterEgg.jsx';
import Loading from './Loading.jsx';

const ResponseCard = ({response}) => {
  let ElementName;
  console.log('response from responseCard: ',response);
  //default state: before making any request
  if(response.api === "default") {
    ElementName = DefaultContent;
  } else if(response.api === "cleverbot") {
    ElementName = Cleverbot;
  } else if (response.api === "weather") {
    ElementName = Weather;
  } else if (response.api === "yelp") {
    ElementName = Yelp;
  } else if (response.api === "easteregg") {
    ElementName = EasterEgg;
  } else if (response.api === "loading") {
    ElementName = Loading;
  }

  const divStyle = {width: '400px', marginTop: '100px'};
  const textStyle = {
    marginTop: '20px', 
    // textAlign: 'center',
    marginBottom: '200px', 
    height: '300px', 
    fontSize: '43px', 
    // font: 'cursive',
    width: '100%',
    color: 'white',
    borderStyle: 'none', 
    boxShadow: 'none', 
    wordWrap: 'normal', 
    wordBreak: 'normal', 
    whiteSpace: 'normal' 
  };

  return (
    <div style={textStyle}>
      <ElementName response={response} />
    </div>
  );
};

export default ResponseCard;


