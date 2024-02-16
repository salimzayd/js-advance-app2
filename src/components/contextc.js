import React, { useContext } from 'react';
import { UserContext,NameContext,ChannelContext } from '../App';

const Contextc = () => {

  const f1 =useContext(NameContext) 
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {f1} - {user} - {channel}

    </div>
  )
}

export default Contextc;