import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/init';
import Layout from './Layout';
import { onSnapshot, collection } from 'firebase/firestore';

const Chat = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, id), (snapshot) => {
      snapshot.docs.map((el) => {
        console.log(el.data());
        setData((oldArr) => [...oldArr, el.data()]);
      });
    });
  }, []);

  return (
    <Layout>
      <section className='App-chat'>
        {data.reverse().map((el, i) => {
          return (
            <article key={i} className='App-chat-message'>
              <p>{el.message}</p>
            </article>
          );
        })}
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
