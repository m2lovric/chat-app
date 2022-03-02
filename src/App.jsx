import { useEffect, useState } from 'react';
import './App.scss';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/init';
import Layout from './pages/Layout';
import { Link } from 'react-router-dom';

function App() {
  const [collections, setCollections] = useState([]);
  useEffect(async () => {
    onSnapshot(collection(db, 'collections'), (snapshot) => {
      snapshot.docs.map((el) => {
        setCollections(el.data().collectionsArr);
      });
    });
  }, []);

  return (
    <Layout>
      <section className='App-container'>
        <main className='App-main'>
          <button className='App-main-group_btn'>+ Make Group Chat</button>
          {collections.length > 0 &&
            collections.map((el) => {
              return (
                <Link
                  to={`/chat/${el}`}
                  className='App-main-group_btn'
                  key={el}
                >
                  {el}
                </Link>
              );
            })}
        </main>
      </section>
    </Layout>
  );
}

export default App;
