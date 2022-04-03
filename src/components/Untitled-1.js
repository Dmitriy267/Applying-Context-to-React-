import React from "react";
export default function XKCDComic(props){
    return (
        <a href={`https://xkcd.com/${props.number}/`}>
        <img
          src={`https://imgs.xkcd.com/comics/${props.path}.png`}
          title={props.altText}
        />
      </a>
    )
}