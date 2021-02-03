import React from 'react';
import MessageHistory from './MessageHistory';
import axios from 'axios';
import {  Box,Container,PageContent,Button, Input, InputField } from 'bumbag';

const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'



class Home extends React.Component{

    state = {
      messsage : " "
    }

    handleChange = (ev) => {
      this.setState({message: ev.target.value});
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
          <Box backgroundColor="whitesmoke" padding="0.5rem">
            <form onSubmit= {this.handleSubmit}>
            <InputField alignX="center" border="default"label="Write a Message" placeholder="Enter your message here..." />
            <Button alignX="center" border="default">Send your Message to the Matrix</Button>
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
