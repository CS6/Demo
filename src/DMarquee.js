import logo from './logo.svg';
import './App.css';
// import { Footer } from "@cs6/branding"
import Marquee from "react-fast-marquee";
import './App.css';
import { Logo } from "./Logo"


function MBox({ children, ...props }) {
  return (
    <div class="box" {...props}>
      <Logo style={{ width: 84, height: 84, margin: "auto 30px" }} color="#b0b0b0" />
      <div style={styles.text} >{children}</div>
    </div>
  )
}

function KeepOutBox({ children, ...props }) {
  return (
    <div class="box" {...props}>
      <Logo style={{ width: 84, height: 84, margin: "auto 30px" }} color="#b0b0b0" />
      <div style={styles.text} >{children}</div>
    </div>
  )
}

function LgooLine({ children, ...props }){
  return (
    <div class="LgooLine-content" {...props}>
      <div style={styles.text} >{children}</div>
    </div>
  )
}


function DMarquee() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningMarquee />
        <WarningMarquee />
      </header>
      <div className="App-float">
      <KeepMarquee />
      </div>
      {/* <Footer
        date="10. January"
        year="2022"
        link1={<a href="https://github.com/dayuan/drei">dayuan/drei</a>}
        link2={<a href="https://codesandbox.io/s/0mgum">s/0mgum</a>}
      /> */}
    </div>
  );
}
function KeepMarquee() {
  return (
    <div class="KeepMarquee-content" >
      <Marquee speed={168} gradient={false} style={styles.keepOutContainer}>
        <KeepOutBox class="box" style={styles.keepOutBorder}>
         KEEP OUT
        </KeepOutBox>
        <KeepOutBox class="box" style={styles.keepOutBorder}>
         KEEP OUT
        </KeepOutBox> <KeepOutBox class="box" style={styles.keepOutBorder}>
         KEEP OUT
        </KeepOutBox> <KeepOutBox class="box" style={styles.keepOutBorder}>
         KEEP OUT
        </KeepOutBox> <KeepOutBox class="box" style={styles.keepOutBorder}>
         KEEP OUT
        </KeepOutBox>
      </Marquee>


    </div>
  );
}

function WarningMarquee() {
  return (
    <div class="content" >
      <Marquee speed={168} gradient={false} style={styles.warning}>
        <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox>
        <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox>
      </Marquee>
      <Marquee direction={"right"} speed={128} gradient={false} style={styles.road}>
        <MBox class="box" style={styles.road}>
          Hello road
        </MBox>
        <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox>
      </Marquee>
      <Marquee speed={168} gradient={false} style={styles.warning}>
        <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox>
        <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox> <MBox class="box" style={styles.warning}>
          Hello warning
        </MBox>
      </Marquee>
      <Marquee direction={"right"} speed={128} gradient={false} style={styles.road}>
        <MBox class="box" style={styles.road}>
          Hello road
        </MBox>
        <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox> <MBox class="box" style={styles.road}>
          Hello road
        </MBox>
      </Marquee>

    </div>
  );
}


const styles = {
  warning: {
    backgroundColor: "#FFCC00",
    color: "black"
  }, road: {
    backgroundColor: "black",
    color: "white"
  }, text: {
    fontSize: "96pt",
    fontWeight: "bold",
  }, keepOutContainer: {
    backgroundColor: "#FFCC00",
    color: "black",
    borderTop: "11px inset #000000",
    borderBottom: "11px ridge #000000",
    paddingTop: "5px",
    paddingBottom: "5px",
  }, keepOutBorder: {
    backgroundColor: "#FFCC00",
    color: "black",
    borderTop: "5px inset #000000",
    borderBottom: "5px ridge #000000",
  }
}

export default DMarquee;
