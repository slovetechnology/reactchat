import React from 'react'
import { useSelector } from 'react-redux'
import ActiveChatside from '../Components/ActiveChatside';
import NewChatside from '../Components/NewChatside';
const FirstBody = () => {
  const {chatside} = useSelector((state) => state.chattoggle);
  return (
    chatside ? <NewChatside /> : <ActiveChatside />
  )
}

export default FirstBody