import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../public/lotties/loading.json';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, "1500");
  },[]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <React.Fragment>
      {loading ?  
        <Lottie 
          options={defaultOptions}
          width={100}
          height={100}
          style={{ 
            margin: 0,
            marginTop: -17,
            marginBottom: -20,
            marginLeft: -300}}
        /> : null}
    </React.Fragment>
  )
}

export default Loading;
