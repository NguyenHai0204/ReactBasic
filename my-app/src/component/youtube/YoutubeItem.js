import React from "react";

export let YoutubeItem = (props) => {
    return (
      <div className="youtube-item">
        <div className="youtube-header">
          <img src={props.image} alt="" className="youtube-image"></img>
        </div>
        <div className="youtube-footer">
          <img className="youtube-avatar" src={props.avatar}></img>
          <div className="youtube-info">
            <h6 className="youtube-title">{props.title || "Title is Empty"}</h6>
            <h6 className="youtube-author">
              {props.author || "Author is Empty"}
            </h6>
          </div>
        </div>
      </div>
    );
  };

