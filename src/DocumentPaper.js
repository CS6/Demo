import "./Document.css";
import Document, { BackgroundPaper } from "./Paper";

import { Doc } from "./Title"
import useWindowDimensions from "./util/useWindowDimensions";
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import Scene from "./3DScene/Scene"
import WebBook from './3DScene/inPage/WebBook'

import { MyLog, Lifebox, NFT, BBT, Capture } from "./Logo"


export default function DocumentPaper() {
  const container = useRef()
  const domContent = useRef()

  const { height, width } = useWindowDimensions();
  const [containerHeight, setCHeight] = useState();
  const [BGHeight, setBGHeight] = useState();

  const [ready, set] = useState(false)
  const [_index, setIndex] = useState(2)


  // $(window).on("load", () => {
  //     loading_cnt++;
  //     if (loading_cnt === 2) $("#loading").fadeOut(200);
  // });
  let TXT = "由於中華民國國民小學基礎教育教<Meta>授注音符號作為中文拼字方法，所以只要<Meta>知曉該字的發音，就能以此輸入法輸入文字。在台灣為最普遍的中文輸入法之一。\n"

  let apps = [{
    index: 0,
    name: "奶油行",
    type: "地圖應用",
    color: "#FCD54C",
    model: "Bike",
    url: "",
    demo_type: "web",
    Logo: "/img/BBT_B.svg",
    Logo_OG: "/img/BBT.svg",
    Title: "自行車騎行",
    link: "",
    Docs: "自行車騎行\n"
  }, {
    index: 1,
    name: "MyLog14",
    type: "防疫應用",
    color: "#F0943E",
    model: "IPad",
    url: "",
    demo_type: "web",
    Logo: "/img/MyLog_B.svg",
    Logo_OG: "/img/MyLog.svg",
    Title: "COVID-19  \n防疫小共工具",
    link: "https://play.google.com/store/apps/details?id=tw.mydata.mylog14",
    Docs: "MyLog 的目標是協助使用者紀錄並管理自己的生活史，同時「<(>自<own>己<and>的<control>資<your>料<data>自<)>己管」，透過公民主動紀錄參與、匿名且去識別化的捐贈，協助相關單位建立健康生活數據庫。並藉此提供相關數據給醫生及專業醫療人員。\n"
  }, {
    index: 2,
    name: "Lifebox",
    type: "健康應用",
    color: "#73DCB6",
    model: "IPhone",
    url: "",
    demo_type: "web",
    Logo: "/img/Lifebox_B.svg",
    Logo_OG: "/img/Lifebox.svg",
    Title: "兼顧隱私的--\n自主健康管理工具",
    link: "https://play.google.com/store/apps/details?id=io.numbersprotocol.lifebox&hl=zh_TW&gl=US",
    Docs: "兼顧隱私的自主健康管理工具\n協助慢性病患者及疫情期間更容易紀錄身體相關數據，並藉由此軟體快速且完整的提供相關數據給醫生及專業醫療人員。(例：心衰竭病人可以記錄每日血壓、血糖、尿量...等)\n"
  }, {
    index: 3,
    name: "Capture",
    type: "區塊鏈相機",
    color: "#081FEE",
    model: "Camera",
    url: "",
    demo_type: "web",
    Logo: "/img/Capture_B.svg",
    Logo_OG: "/img/Capture.svg",
    Title: `區塊鏈相機--\n隨拍即成ＮＦＴ`,
    link: "https://www.numbersprotocol.io/#products",
    Docs: "全新的拍照體驗，自動擷取拍攝時間與地點資訊，建立影像生產履歷。它同時也是第一個區塊鏈相機，用戶可以一鍵為影像生成NFT。能讓影像成為「數位資產」。在這個「有圖」不再「有真相」的時代，我們期望重新建立影像的信任，利用區塊鏈永久保存拍照的瞬間，讓使用者再次感受與朋友分享美好且真實的時光。\n"
  }, {
    index: 4,
    name: "NFT search engine",
    type: "區塊鏈應用",
    color: "#3EB0F0",
    model: "MacBook",
    url: "",
    demo_type: "web",
    Logo: "/img/NFT_B.svg",
    Logo_OG: "/img/NFT.svg",
    Title: "ＮＦＴ搜尋引擎\n",
    link: "https://nftsearch.site/",
    Docs: "Numbers的NFT搜索引擎將基於內容和區塊鏈。\n搜索數據將基於唯一的內容地址（IPFS/Filecoin CID）。\n"
  }]
  useEffect(() => {
    //let container_height = $(".container-wrapper").height();
    let container_height = height - 300;
    container_height = container_height - (container_height % 23) - 1;
    let BG_height = height - 400;
    container_height = container_height - (container_height % 23) - 1;
    setCHeight(container_height);
    setBGHeight(BG_height);
    // $(".container-wrapper").height(container_height);
  }, [height]);
  return (
    <div className="paper-background">
      <div className="DocumentPaper-re">
        <div className="side-container">
          <div className="info-container">
            {/* <div className="container-wrapper" style={{ height: containerHeight }}>
              <Doc content={apps[_index].Docs} />
            </div>
            <div className="title-container" style={{ height: containerHeight }} >
              <div className="info-card">
                <div className="info-card-name" style={{ backgroundColor: `${apps[_index].color}` }}>
                  {apps[_index].type}
                </div>
                <div className="info-card-logo" style={{ backgroundColor: `${apps[_index].color}` }}>
                  {apps[_index].name}
                </div>
              </div>
              <div className="illustrate">
                {apps[_index].Title}
              </div>
            </div> */}

            <div className="tag-container" style={{ height: containerHeight }} >
              <div className="info-tag">
                <div className="info-name-tag" style={{ backgroundColor: `${apps[_index].color}` }}>
                  {/* Health-BOX */}
                  {apps[_index].name}
                </div>

                <a className="info-link" href={apps[_index].link} target="_blank" rel="noopener noreferrer">🔗</a>

              </div>
              <div className="info-tag-line" />
            </div>
            <div className="container-wrapper" style={{ height: containerHeight }}>
              <Doc title={apps[_index].Title} content={apps[_index].Docs} />
              {/* <Document /> */}
            </div>

          </div>
          <div className="route-container">
            {
              apps.map((app, index) => {
                return (
                  <img
                    onClick={() => { setIndex(index) }}
                    className="APP-Logo"
                    // className={index === _index ? "APP-Logo" : "APP-Logo"}
                    src={index === _index ? app.Logo_OG : app.Logo} alt={app.name}
                  />
                )
              })}
            {/* <BBT className="APP-Logo" /><MyLog className="APP-Logo" /><Lifebox className="APP-Logo" /><Capture className="APP-Logo" /><NFT className="APP-Logo" /> */}
          </div>
        </div>
        <WebBook type={apps[_index].model} />

        {/* <Scene /> */}

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
