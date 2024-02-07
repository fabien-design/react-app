import logo from './logo.svg';
import videoThumbnail from "./video.svg";
import './App.css';


Object.prototype.propAccess = function(path) {
  var array = path.split("."); // Split le path
  var result = this; // Correspond a l'objet qui appelel 
  array.forEach(element => {
    if(result.hasOwnProperty(element)){ // verif si l'element du path existe dans 'l'object
      result = result[element]; // si oui alors on avance dans l'objet
    }else{
      return undefined // autrement on return rien car ça n'existe pas
    }
  });
  return result;
}

String.prototype.toto = function(Object) {
  // var path = this.replace(/\{|\}/g,""); // on replace pour ne garder que le path
  var path = this.replace(/^\{+|\}+$/g,""); // on replace pour ne garder que le path
  return Object.propAccess(path);
}

function App({ video }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World, Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     <main>
      <Video video={video} />
     </main>
    </div>
  );
}

function Thumbnail({video}) {
  return (
    <div className="thumbnail"> 
      <a href={video.url}>
      <img src={videoThumbnail} alt="video " />
      </a>
    </div>
  )
}

function Video({ video }) {
  return (
    <div className="video">
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      {/* <LikeButton video={video} /> */}
    </div>
  );
}

export { App, Video };