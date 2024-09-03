import logo from './logo.svg';
import './App.css';
import data from "./component/data.json"
import { Fragment } from 'react';


function App() {
  // console.log(data.videos)
  const { videos } = data;
  return (
    <div className="App">
      {
        videos.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.title}
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
