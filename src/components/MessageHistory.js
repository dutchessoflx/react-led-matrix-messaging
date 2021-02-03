import React from 'react';
import axios from 'axios';
import { Table } from 'bumbag'
// import Home from './Home';
const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'

class MessageHistory extends React.Component{

  state = {
    messages: []
  };

  fetchMessages = () => {
    console.log('fetchMessages');
    axios.get(RAILS_LEDMATRIX_BASE)
    .then((res) => {
      console.log('response', res.data);
      this.setState({messages: res.data})

    })
    .catch(console.warn);
  };

  componentDidMount(){
    this.fetchMessages();
    window.setInterval(this.fetchMessages, 2000);
  }

  // saveMessage = (content) =>{
  //   console.log('Message-saveMessage()', {content});
  //   axios.post(RAILS_LEDMATRIX_BASE,{content: content})
  //   .then((res) =>{
  //     console.log(res.data);
  //     this.setState({
  //       messages:[res.data, ...this.state.messages]
  //     }); ///zdds the created secret to our list of secrets, so it appears rendered on the page
  //   })
  //   .catch(console.warn);
  //
  // }

  render(){

      return (
          <div >
            <div id='history'>
          <h4>Message History</h4>
          <Table isStriped>
            <Table.Head>
                <Table.Row >
                  <Table.HeadCell color="black">Message Contents</Table.HeadCell>
                  <Table.HeadCell color="black" textAlign="right"> Date/Time Sent</Table.HeadCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>

                  {
                    this.state.messages.map(message => <Table.Row><Table.Cell color="black" key={message.message_content}>{message.message_content}</Table.Cell>
                    <Table.Cell color="black" key={message.created_at} textAlign="right">{message.created_at}</Table.Cell></Table.Row>)

                  }


            </Table.Body>
          </Table>
        </div>
        </div>

        );

}//render
}///class

export default MessageHistory;
