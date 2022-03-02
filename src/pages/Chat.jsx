import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

const Chat = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Layout>
      <section className='App-chat'>
        <form className='App-chat-input'>
          <input type='text' className='input' />
          <input
            type='image'
            src='/src/images/icons8-send-64.png'
            className='send'
          />
        </form>
      </section>
    </Layout>
  );
};

export default Chat;
