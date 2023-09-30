import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


function App() {

  //とってきたデータを保存する箱（postの中にデータを入れていく）
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //データを取得する
    const postData = collection(db, "posts"); //collectionでpostsの中のデータを見る
    //getDocsでそのデータを取得して、それができたら(then)そのデータをsnapShotという形で取ってくる
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({...doc.data()})))
      //snapShotの中のdocsの中の、1つ1つのデータをdocという形でスプレッド構文で見る
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))

      // リアルタイムで取得
      onSnapshot(postData, (post) => {
        setPosts(post.docs.map((doc) => ({ ...doc.data() })))
      });
    })

  }, []);

  return (
    <>

      <div className="App">
        <div>
          {posts.map((post) => (
            <div key={post.title}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
