import React, {useState} from 'react';
import MessageHistory from './MessageHistory';
import axios from 'axios';
import {  Text, Box,Container,PageContent,Button, Input } from 'bumbag';
import '../App.css';

// const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'
const RAILS_LEDMATRIX_BASE = ' https://f9e88e561ffd.ngrok.io/messages'
// - changes with every reboot of server


const Home = (props) => {
    const [message, setMessage] = useState('');
    const [lastMessage, setLastMessage] = useState('');

    const handleChange = (ev) => {
      // console.log('message', ev.target.value);
      setMessage(ev.target.value);
      // console.log(message);

    }///handleChange

    const handleSubmit = (ev) =>{
      ev.preventDefault();
      console.log("message", message);


      // if(message === ''){
      //   console.log("message is null");
      //   return
      // } //if condiiton so you cannot send blank messages

      // console.log("message", message);
      axios.post(RAILS_LEDMATRIX_BASE,{message_content: message})
        .then((res) =>{
          // console.log(res.data);
          // console.log(res.data.message_content);
          setLastMessage(res.data);
        })
        .catch(console.warn);

      }//handleSubmit

      return (
        <div>
        <Container breakpoint="mobile" marginTop="major-2">

          <h2>LED Messaging Service</h2>

          <Box borderRadius="20px" alignY="center" backgroundColor="rgba(46, 120, 125, 0.67)" padding="1rem">
            <Text.Block >
              <Text align="right" textAlign="right"padding="20px"  fontWeight="bold">Any message you send from here will be transmitted to an Arduino powered 16 x 8 LED Matrix. You can choose to add your name to the end of your message, or send it anonymously.
              </Text>
            </Text.Block>
            <form onSubmit={handleSubmit}>
              <Input marginBottom="10px"
                marginTop="20px"
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

};//Home end


export default Home;
