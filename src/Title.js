import "./Document.css";
import useWindowDimensions from "./util/useWindowDimensions";
import { convert } from "./util/convert.js";
import { useState, useEffect } from "react";



let start_chars = "「『［【〔｛〈《（"; // characters that should be shifted down
let end_chars = "」』］】〕｝〉》）。、"; // characters that should be shifted up

let loading_cnt = 0;

let char_cnt = 0;
let allchar_cnt = 0;

let furigana = false;
let furigana_cnt = 0;


export default function Title({ content = "" }) {
    const { height, width } = useWindowDimensions();
    const [containerHeight, setCHeight] = useState();



    useEffect(() => {
        //let container_height = $(".container-wrapper").height();
        let container_height = height / 3;
        container_height = container_height - (container_height % 23) - 1;
        setCHeight(container_height);
        // $(".container-wrapper").height(container_height);
    }, [height]);

    useEffect(() => {



    }, [height, width]);

    return (
        <div className="Document">
            <div className="container-wrapper" style={{ height: containerHeight }}>
                <div className="container">
                    {/* <h1 id="開源社群" style="margin-block-start: 0px;"><div className="tategaki-character tategaki-none">大</div><div className="tategaki-character tategaki-none">声</div><div className="tategaki-character tategaki-none">大</div><div className="tategaki-character tategaki-none">会</div></h1> */}
                    <h1 id="開源社群" style={{ marginBlockStart: "0px" }}>
                        <div className="tategaki-character tategaki-none">開</div>
                        <div className="tategaki-character tategaki-none">者</div>
                        <div className="tategaki-character tategaki-none">札</div>
                        <div className="tategaki-character tategaki-none">記</div>

                    </h1>
                    <p>
                        <div className="tategaki-character">　</div>
                        <div className="tategaki-character tategaki-none">大<div className="furigana">Big</div></div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Meta<div className="furigana-crushed-check"></div></div></div>
                        <div className="tategaki-character">　</div>
                        <div className="tategaki-character tategaki-none">開<div className="furigana">おお</div></div>
                        <div className="tategaki-character tategaki-none">源<div className="furigana">ごえ</div></div>
                        <div className="tategaki-character tategaki-none">社<div className="furigana">たい</div></div>
                        <div className="tategaki-character tategaki-none">群<div className="furigana">かい</div></div>
                        <div className="tategaki-character tategaki-none">と</div>
                        <div className="tategaki-character tategaki-none">い</div>
                        <p>
                        </p>
                        <div className="tategaki-character">　</div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Meta<div className="furigana-crushed-check"></div></div></div>
                        <div className="tategaki-character tategaki-none">祭<div className="furigana">まつ</div></div>
                        <div className="tategaki-character tategaki-none">り</div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Coin<div className="furigana-crushed-check"></div></div></div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Dollar<div className="furigana-crushed-check"></div></div></div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Epoch<div className="furigana-crushed-check"></div></div></div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana furigana-crushed"> Meta<div className="furigana-crushed-check"></div></div></div>

                        <div className="tategaki-character tategaki-none">読<div className="furigana">よ</div></div>
                        <div className="tategaki-character tategaki-none">み</div>
                    </p>
                    <p>
                        <div className="tategaki-character">　</div>
                    </p>
                    <p>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none"></div>
                        <div className="tategaki-character tategaki-none">─</div>
                        <div className="tategaki-character tategaki-none">─</div>
                        <div className="tategaki-character tategaki-none">大<div className="furigana">Da</div></div>
                        <div className="tategaki-character tategaki-none">元<div className="furigana">Yuan</div></div>



                        {/* <div className="tategaki-character">　</div> */}
                    </p>
                    {/* <p>
                        <div className="tategaki-character"></div>
                        <div className="tategaki-character tategaki-none">&nbsp;</div>
                    </p> */}
                    {/* <div className="tategaki-character">せん週しゅう、大おお声ごえ大たい会かいというお祭まつり</div> */}



                </div>
            </div>
        </div>
    );
}


export function Doc({ content = "",title = "" }) {
    const { height, width } = useWindowDimensions();
    const [containerHeight, setCHeight] = useState();
    let text = "開發者札記開發者札記開發者札記開發者札記";
    let start_chars = "「『［【〔｛〈《（"; // characters that should be shifted down
    let end_chars = "」』］】〕｝〉》）。、"; // characters that should be shifted up

    useEffect(() => {
        //let container_height = $(".container-wrapper").height();
        let container_height = height / 3;
        container_height = container_height - (container_height % 23) - 1;
        setCHeight(container_height);
        // $(".container-wrapper").height(container_height);
    }, [height]);

    useEffect(() => {

    }, [height, width]);

    function Text(char, cnt) {
        //check_display
        // console.log("char", char.codePointAt(0) + 0)
        // console.log(`0:${char}`, "0".codePointAt(0) <= char.codePointAt(0) && char.codePointAt(0) <= "9".codePointAt(0))
        // console.log(`A:${char}`, "A".codePointAt(0) <= char.codePointAt(0) && char.codePointAt(0) <= "Z".codePointAt(0))
        // console.log(`a:${char}`, "a".codePointAt(0) <= char.codePointAt(0) && char.codePointAt(0) <= "z".codePointAt(0))

        let punctuation = `。？！，、：；『』（）「」﹁﹂『』﹃﹄——［］〔〕【】…—～-－《》〈〉﹏＿`;
        let gcin = `ㄚㄅㄒㄉㄧㄈㄐㄏㄞㄖㄎㄌㄇㄋㄛㄆㄟㄜㄙㄊㄩㄍㄝㄨㄡㄠ˙ˊˇˋㄑㄢㄣㄤㄥㄗㄓㄔㄕㄘㄦ`;
        for (let i = 0; i < gcin.length; i++) {
            if (char === gcin[i]) {
                return <div className="tategaki-character ">{char}</div>
            }
        }
        for (let i = 0; i < punctuation.length; i++) {
            if (char === punctuation[i]) {
                return <div class="tategaki-character tategaki-start">{char}</div>
            }
        }
        if (
            "0".codePointAt(0) + 0 <= char.codePointAt(0) + 0 &&
            char.codePointAt(0) + 0 <= "9".codePointAt(0) + 0
        ) {

            return (
                <div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">{char}</div></div>
            );
        }
        if (
            "a".codePointAt(0) + 0 <= char.codePointAt(0) + 0 &&
            char.codePointAt(0) + 0 <= "z".codePointAt(0) + 0
        ) {
            return (
                <div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">{char}</div></div>
            );
        }
        if (
            "A".codePointAt(0) + 0 <= char.codePointAt(0) + 0 &&
            char.codePointAt(0) + 0 <= "Z".codePointAt(0) + 0
        ) {
            return (
                <div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">{char}</div></div>
            );
        }
        else {
            return (
                char
            )
        }

    }

    function TextItem(char, inside, NotesDOM) {
        console.log("NotesTemp", NotesDOM)
        // let inside = true;
        return <div className="tategaki-character tategaki-none"> {Text(char, 0)}
            {inside ? <div className="furigana furigana-crushed">{NotesDOM}<div className="furigana-crushed-check"></div></div> : null}</div>

    }

    function DocItem(text) {
        let DocDOM = [];
        let paragraphDOM = [];
        let NotesTemp = "";
        let cnt = 0;
        let inside = false;
        let inParagraph = true;

        // const [containerHeight, setCHeight] = useState();

        // return  TextItem("大", 0)
        for (let i = 0; i < text.length; i++) {
            // console.log("text", text[i], convert(text[i]), text.length, i)
            let char = convert(text[i]);

            if (char === `\n`) {
                console.log("換行", i, paragraphDOM)
                DocDOM.push (< p > {paragraphDOM}</p >)
                // DocDOM.push([< p > {paragraphDOM}</p >, <p>
                //     <div className="tategaki-character">　</div>
                // </p>])
                paragraphDOM = [];
            } else if (i === text.length -1) {
                console.log("END", i, paragraphDOM)
                // DocDOM.push (< p > {paragraphDOM}</p >)
                DocDOM.push(< p > {paragraphDOM}</p >)
                paragraphDOM = [];
            }


            else {
                let inParagraph = true;
                if (char === "<" || char === ">") {
                    if (char === "<") {
                        inside = true;
                    }
                    if (char === ">") {
                        inside = false;
                    }
                } else {
                    if (inside) {
                        NotesTemp = NotesTemp + text[i];
                    } else {
                        paragraphDOM.push(TextItem(char, NotesTemp.length > 0, NotesTemp));
                        NotesTemp = "";
                    }
                }
            }
        }
        return DocDOM
    }

    return (
         
                <div className="container">
                    {/* <h1 id="開源社群" style="margin-block-start: 0px;"><div className="tategaki-character tategaki-none">大</div><div className="tategaki-character tategaki-none">声</div><div className="tategaki-character tategaki-none">大</div><div className="tategaki-character tategaki-none">会</div></h1> */}
                    <h1 id="開源社群" style={{ marginBlockStart: "0px" }}>
                        {/* <div className="tategaki-character tategaki-none">開</div> */}
                        {/* {DocItem("說明"+"\n")} */}
                        {DocItem(title+ "\n")}

                        {/* {TextItem("大", 0)}
                        {TextItem("1", 0)}
                        {TextItem("B", 0)}
                        {TextItem("b", 0)}
                        {TextItem("。", 0)}
                        {TextItem("，", 0)}
                        {TextItem("、", 0)}
                        {TextItem("ㄍ", 0)} */}

                        {/* <div className="tategaki-character tategaki-none"><div class="tategaki-character tategaki-start">。</div></div>
                        <div className="tategaki-character tategaki-none"><div class="tategaki-character tategaki-start">，</div></div>
                        <div className="tategaki-character tategaki-none"><div class="tategaki-character tategaki-start">！</div></div>
                        <div className="tategaki-character tategaki-none"><div class="tategaki-character tategaki-start">、</div></div>
                        <div className="tategaki-character tategaki-none"><div className="tategaki-character "> ㄍ</div></div>
                        <div className="tategaki-character tategaki-none"><div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">1</div></div></div>
                        <div className="tategaki-character tategaki-none"><div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">A</div></div></div>
                        <div className="tategaki-character tategaki-none"><div className="tategaki-character tategaki-rotate"> <div className="tategaki-rotate-character">a</div></div></div> */}

                    </h1>
                    {DocItem(content)}
                    
                    {/* {DocItem("注音輸入法，是一種以注音符<Meta>號來輸入漢字的中文輸入法。\n由於中華民國國民小學基礎教育教<Meta>授注音符號作為中文拼字方法，所以只要<Meta>知曉該字的發音，就能以此輸入法輸入文字。在台灣為最普遍的中文輸入法之一。\n")} */}



                </div>

 
    );
}
