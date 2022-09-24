import React from "react";
import { youtubeData } from "../../Data";
import { YoutubeItem } from "./YoutubeItem";

export let YoutubeList = (props) => {
    return (
        <div className="youtube-list">
        {props.children}
        {youtubeData.map((item) => (
          <YoutubeItem
            key={item.id}
            avatar={item.avatar == "" ? "https://i.stack.imgur.com/l60Hf.png" : item.avatar} 
            image={item.image}
            title = {item.title}
            author = {item.author}
          ></YoutubeItem>
        ))}
      </div>
    );
}