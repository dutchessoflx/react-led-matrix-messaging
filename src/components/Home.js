import React, {useState} from 'react';
import MessageHistory from './MessageHistory';
import axios from 'axios';
import {  Box,Container,PageContent,Button, Input } from 'bumbag';

const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'



const Home = (props) => {
    const [message, setMessage] = useState('');
    const [lastMessage, setLastMessage] = useState('');

    const handleChange = (ev) => {
      console.log('message', ev.target.value);
      setMessage(ev.target.value);
      console.log(message);
    }

    const handleSubmit = (ev) =>{
      ev.preventDefault();
      console.log("message", message);
      axios.post(RAILS_LEDMATRIX_BASE,{message_content: message})
        .then((res) =>{
          console.log(res.data);
          console.log(res.data.message_content);

          setLastMessage(res.data);
        })
        .catch(console.warn);

      }

      return (
        <div>
        <Container breakpoint="mobile" marginTop="major-2">
          <Box borderRadius="20px" alignY="center" backgroundColor="rgba(46, 120, 125, 0.67)" padding="1rem">
            <form onSubmit={handleSubmit}>
              <Input marginBottom="10px"
                onChange={handleChange}
                alignX="center"
                borderRadius="20px"
                label="Write a Message"
                backgroundColor="rgba(46, 120, 125, 0.67)"
                placeholder="Enter your message here..." />
              <button id='post'>
                Send your Message to the Matrix
              </button>
            </form>

          </Box>
        </Container>
        <PageContent>
          <MessageHistory lastMessage={lastMessage}/>
        </PageContent>


        </div>
      );

};


export default Home;
