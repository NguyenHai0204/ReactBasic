import logo from "./logo.svg";
import "./App.css";

// parent component
let AppHeader = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
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
  );
};

let YoutubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img
        src={props.avatar}
          alt=""
          className="youtube-avatar"
        ></img>

        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || 'Title is Empty'}</h3>
          <h4 className="youtube-author">{props.author || 'Author is Empty'}</h4>
        </div>
      </div>
    </div>
  );
};

//children component
function App() {
  return (
    <div className="App">
    <div className="youtube-list">
      <YoutubeItem title= "title1" author = "HaiN1" avatar="https://images.unsplash.com/photo-1662969351302-86633de54a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></YoutubeItem>
      <YoutubeItem title= "titl2" author="HaiNguyen" avatar="https://images.unsplash.com/photo-1663542803736-f9f71f03539d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></YoutubeItem>
    <YoutubeItem avatar="https://images.unsplash.com/photo-1662796653457-8721078fd863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></YoutubeItem>
    </div>
    </div>
  );
}

export default App;
