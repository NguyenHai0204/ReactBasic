//stateless funtional component: Component nhung k use state
//statefull funtional component: Component co use state

import React, { useState } from "react";
import "./ToggleStyle.css";

//stateless
export let ToggleStateLess = () => {
  return <div className="ToggleStateLess"></div>;
};

//statefull
export let ToggleStateFull = () => {
  // 1.Enabling state: import {useState(...)}
  // 2.Initialize state: useState(false)
  // 3. Reading sate:
  // 4. Update state

  const [on, setOn] = useState(false);
  // console.log(on)

  const handleToggle = () => {
    setOn(on => !on)
  };

  return (
    // <div className="ToggleStateFull">
    //     <button type="button" onClick={() => {
    //         setOn(true);
    //     }}>Toggle {on ? "On" : "Off"}</button>
    // </div>

    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-controller">
        <div className="toggle-on" onClick={() => {setOn(true)}}>On</div>
        <div className="toggle-off" onClick={() => {setOn(false)}}>Off</div>
      </div> */}
    </div>
  );
};
