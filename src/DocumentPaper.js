import "./Document.css";
import Document, { BackgroundPaper } from "./Paper";

import {Doc} from "./Title"
import useWindowDimensions from "./util/useWindowDimensions";
import { useLayoutEffect, useEffect,useRef, useState } from 'react'
import Scene from "./3DScene/Scene"


export default function DocumentPaper() {
  const container = useRef()
  const domContent = useRef()
  
  const { height, width } = useWindowDimensions();
  const [containerHeight, setCHeight] = useState();
  const [BGHeight, setBGHeight] = useState();

  // $(window).on("load", () => {
  //     loading_cnt++;
  //     if (loading_cnt === 2) $("#loading").fadeOut(200);
  // });
let TXT = "由於中華民國國民小學基礎教育教<Meta>授注音符號作為中文拼字方法，所以只要<Meta>知曉該字的發音，就能以此輸入法輸入文字。在台灣為最普遍的中文輸入法之一。\n"

  useEffect(() => {
    //let container_height = $(".container-wrapper").height();
    let container_height = height - 400;
    container_height = container_height - (container_height % 23) - 1;
    let BG_height = height - 400;
    container_height = container_height - (container_height % 23) - 1;
    setCHeight(container_height);
    setBGHeight(BG_height);
    // $(".container-wrapper").height(container_height);
  }, [height]);
  return (
    <div className="paper-background">
      <div className="DocumentPaper">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <div
          id="loading"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "white",
            zIndex: 1000,
            fontSize: 25,
            // display: "grid",
            display: "none",
            placeItems: "center"
          }}
        >
          <div>
            <h1>ローディング</h1>
            <p>ちょっと待ってください。</p>
          </div>
        </div> */}


      <div className="info-container"  >
        <div className="container-wrapper" style={{ height: containerHeight }}>
        <Doc content={TXT} />

          {/* <Document /> */}
        </div>
        <div className="title-container" style={{ height: containerHeight }} >
          <div className="info-card">
            <div className="info-card-name">健康應用</div>
            <div className="info-card-logo">Health-BOX</div>
          </div>
          <div className="illustrate">{"兼顧隱私的 \n\n 自主健康管理工具"}</div>
        </div>
      </div>
      <Scene/>
      <BackgroundPaper style={{ height: BGHeight }} />

      {/* <div id="3D" ref={container} className="content-container"> */}
      {/* Container for the HTML view */}
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden',zIndex:"10" }} ref={domContent} /> */}
      {/* Container for THREEJS */}
    {/* </div> */}

    </div>
    </div >
  );
}
