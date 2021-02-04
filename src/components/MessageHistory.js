import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table } from 'bumbag'
import Time from 'react-time-format'
// import Home from './Home';
// const RAILS_LEDMATRIX_BASE = 'http://localhost:3000/messages'
const RAILS_LEDMATRIX_BASE = 'https://647ba0d71fed.ngrok.io/messages'


const MessageHistory = (props)=> {

  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    // console.log('fetchMessages');
    axios.get(RAILS_LEDMATRIX_BASE)
    .then((res) => {
      // console.log('response', res.data);
      setMessages(res.data)

    })
    .catch(console.warn);
  };

  useEffect( () => {
    // console.log("History Component Mounted");
    fetchMessages();
  }, []);

  useEffect( () => {
    // console.log("Last message", props.lastMessage);
    setMessages([props.lastMessage, ...messages])
  }, [props.lastMessage]);






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
                    messages.map(message =>
                      <Table.Row>
                        <Table.Cell color="black" key={message.message_content}>
                          {message.message_content}
                        </Table.Cell>
                        <Table.Cell color="black" key={message.created_at} textAlign="right">
                          {new Date(message.created_at).toLocaleString()}
                        </Table.Cell>
                      </Table.Row>)

                  }

            </Table.Body>
          </Table>
          </div>
        </div>

        );


}///class

export default MessageHistory;
