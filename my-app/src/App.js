import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Game from "./component/tiktoktoe/Game";



//children component
function App() {
  return (
    // <div className="youtube-list">
    //   <YoutubeItem avatar = "https://images.unsplash.com/photo-1662796653457-8721078fd863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" image ="https://images.unsplash.com/photo-1662125502527-bb106378d560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></YoutubeItem>
    //   <YoutubeItem avatar = "https://images.unsplash.com/photo-1662759508448-b5a1df24d414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" image = "https://images.unsplash.com/photo-1662535800386-271f33a9343a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"></YoutubeItem>
    //   <YoutubeItem avatar = "https://images.unsplash.com/photo-1662413915495-ff4a9f53f650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80" image = "https://images.unsplash.com/photo-1661257454984-260701259b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></YoutubeItem>
    // </div>

    // <div>
    //   <YoutubeList>
    //     {/* children */}
    //     <h2>Lorem</h2>
    //     <h3>Lorem2</h3>
    //   </YoutubeList>
    // </div>

    <div>
      <Game></Game>
    </div>

  );
}

export default App;
