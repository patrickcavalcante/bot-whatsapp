import React, { useEffect, useState } from 'react';
import Loading from '../Loading/index';
import { BotMessage, BotMessageBalloon, Text } from './styles'

const StageOne = () => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSession(true);
    }, "1500");
  },[]);

  return (
    <React.Fragment>
      <Loading />  
      {session ? <>
        <BotMessage>
          <BotMessageBalloon>
            <Text>Vamos começar? Primeiro, nos informe seu nome.</Text>
          </BotMessageBalloon>
        </BotMessage>
      </> : <></>}
    </React.Fragment>
  )
}

export default StageOne;
