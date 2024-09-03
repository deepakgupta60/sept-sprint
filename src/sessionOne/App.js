import logo from './logo.svg';
import './App.css';
import data from "./sessionOne/data.json"
import { Fragment } from 'react';
import VideosCard from './sessionOne/VideosCard';


function App() {
  // console.log(data.videos)
  const { videos } = data;
  return (
    <div className="App">
      {
        videos.map((item) => {
          return (
            <Fragment key={item.id}>
              <VideosCard cardImage={item.url} title={item.title}/>              
              {/* {item.title} */}
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
