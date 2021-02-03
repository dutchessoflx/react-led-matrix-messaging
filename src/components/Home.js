import React from 'react';
import MessageHistory from './MessageHistory';
import axios from 'axios';
import {  Box,Container,PageContent,Button, Input } from 'bumbag';

const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'



class Home extends React.Component{

    state = {
      messsage : " "
    }

    handleChange = (ev) => {
      console.log('message', ev.target.value);
      this.setState({message: ev.target.value});
      console.log(this.state.message);
    }

    handleSubmit = (ev) =>{
      ev.preventDefault();
      console.log("message", this.state.message);
      axios.post(RAILS_LEDMATRIX_BASE,{message_content: this.state.message})
        .then((res) =>{
          console.log(res.data);
          this.setState({
            message:[res.data, ...this.state.message]
          });
        })
        .catch(console.warn);

      }





  render(){

      return (
        <div>
        <Container breakpoint="mobile" marginTop="major-2">
          <Box borderRadius="20px" alignY="center" backgroundColor="rgba(46, 120, 125, 0.67)" padding="1rem">
            <form onSubmit= {this.handleSubmit}>

            <Input marginBottom="10px"
              onChange={this.handleChange}
              alignX="center"
              borderRadius="20px"
              label="Write a Message"
              backgroundColor="rgba(46, 120, 125, 0.67)"
              placeholder="Enter your message here..." />
            <button id='post'>Send your Message to the Matrix</button>
            </form>

          </Box>
        </Container>
        <PageContent>
          <MessageHistory />
        </PageContent>


          </div>
        )

}
}

export default Home;
