import React ,{useState,useEffect} from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const[input,setInput] = useState("")
  const[messages,setMessages] = useState([])
  const[username,setUsername] = useState("");

  //useEffect = run code on a condition in REACT

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your username'))
  }, [])

  const sendMessage =(event) =>{
    event.preventDefault()
    db.collection('messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username:username , message:input}])
    setInput('')

  }

  console.log(messages)
  return (
    <div className="App">
      <h1>hello</h1>
      <h1>Welcome{username}</h1>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel >Enter a msg</InputLabel>
          <Input  className="app__input" value={input} onChange={event =>setInput(event.target.value)}/>
          <IconButton
                className="app__iconButton"
                disabled={!input}
                variant="contained"
                color="primary"
                type="submit"
                onClick={sendMessage}
              >
                <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id,message}) =>(
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
