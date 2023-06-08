import React from 'react'
// import Message from './Message'
import ListGroup from './components/ListGroup'

const App = () => {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Harare",
    "London",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      {/* <Message/> */}
      <ListGroup items = {items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App