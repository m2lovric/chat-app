import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/init';
import Layout from './Layout';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';

const Chat = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const userId = 'matteo';

  useEffect(() => {
    onSnapshot(collection(db, id), (snapshot) => {
      snapshot.docs.map((el) => {
        console.log(el.data());
        setData((oldArr) => [...oldArr, el.data()]);
      });
    });
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    addDoc(collection(db, id), {
      date: new Date(),
      message: message,
      userId: 'matteo',
    });
    setMessage('');
  };

  return (
    <Layout>
      <section className='App-chat'>
        {data.reverse().map((el, i) => {
          return (
            <article
              key={i}
              className={
                el.userId === userId
                  ? 'App-chat-message me'
                  : 'App-chat-message'
              }
            >
              <p>{el.message}</p>
            </article>
          );
        })}
        <form className='App-chat-input' onSubmit={handleSendMessage}>
          <input
            type='text'
            className='input'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
