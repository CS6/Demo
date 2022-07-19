import "./Document.css";
import useWindowDimensions from "./util/useWindowDimensions";
import { convert } from "./util/convert.js";
import { useState, useEffect } from "react";

let texts = `
# 開源社群

&nbsp;

先<せん>週<しゅう>、大<おお>声<ごえ>大<たい>会<かい>というお祭<まつ>りについて読<よ>みました。面<おも>白<しろ>い大<たい>会<かい>だと思<おも>って、私<わたし>はその大<たい>会<かい>に参<さん>加<か>したら何<なん>と言<い>うだろうと考<かんが>えました。

大<おお>声<ごえ>大<たい>会<かい>は嫌<いや>なことを忘<わす>れるためですが、今<いま>、特<とく>に忘<わす>れたいことがないから、ちょっと難<むずか>しいですね。しかし、今<いま>ではなく、もし今<こ>年<とし>の二<に>月<がつ>に参<さん>加<か>したら、言<い>いたいことは必<かなら>ずあります。その時<とき>、私<わたし>は他<ほか>の大<だい>学<がく>の入<にゅう>学<がく>試<し>験<けん>に失<しっ>敗<ぱい>したばかりなので、とても悲<かな>しかったです。「嫌<いや>なんだ。今<こん>度<ど>はもっと頑<がん>張<ば>ろう」と言<い>いたかったです。だから、もしその頃<ころ>、大<たい>会<かい>に参<さん>加<か>したら、絶<ぜっ>対<たい>に、大<おお>大<おお>大<おお>きい声<こえ>で、そのことを叫<さけ>ぶと思<おも>います。実<じつ>は、大<たい>会<かい>に参<さん>加<か>しなくても、うちでそのことを叫<さけ>んだことがありますよ。今<いま>、シンガポール国<こく>立<りつ>大<だい>学<がく>に入<にゅう>学<がく>できるのは、私<わたし>の努<ど>力<りょく>以<い>外<がい>、その時<とき>のかげでもあるでしょう。

大<おお>声<ごえ>大<たい>会<かい>は忘<わす>れたいことを言<い>う所<ところ>であり、大<たい>会<かい>だからコンクールでもあります。一<いち>番<ばん>大<おお>きい声<こえ>を叫<さけ>ぶ人<ひと>を探<さが>すこともありますね。では、私<わたし>は一<いち>番<ばん>大<おお>きい声<こえ>で叫<さけ>べるでしょうか。私<わたし>は大<おお>きすぎる音<おと>が嫌<きら>いだから、普<ふ>通<つう>にあまり大<おお>声<ごえ>で言<い>いません。ですが、大<たい>会<かい>は大<おお>声<ごえ>の大<たい>会<かい>だし、その時<とき>はすごく悲<かな>しかったし、多<た>分<ぶん>私<わたし>はとても大<おお>きい声<こえ>で叫<さけ>べると思<おも>います。しかし、まだ大<おお>声<ごえ>大<たい>会<かい>に本<ほん>当<とう>に参<さん>加<か>したことがなくて、一<いち>番<ばん>大<おお>きい声<こえ>は、どのぐらい大<おお>きいか知<し>らないから、私<わたし>がそのレベルより大<おお>きい声<こえ>を叫<さけ>べるか、私<わたし>は全<ぜん>然<ぜん>わかりません。

私<わたし>の妹<いもうと>も日<に>本<ほん>的<てき>なものが好<す>きだから、もし私<わたし>は日<に>本<ほん>の大<おお>声<ごえ>大<たい>会<かい>に行<い>く機<き>会<かい>があったら、きっと彼<かの>女<じょ>も一<いっ>緒<しょ>に行<い>きますよ。彼<かの>女<じょ>は何<なん>と言<い>うでしょうか。今<いま>、私<わたし>は留<りゅう>学<がく>しているので、彼<かの>女<じょ>にこの質<しつ>問<もん>を聞<き>くのがちょっと難<むずか>しいです。しかし、まだ小<しょう>学<がく>生<せい>である彼<かの>女<じょ>は、私<わたし>にとって、誰<だれ>よりもやさしくて、ずっと明<あ>かりを広<ひろ>げるから、もし彼<かの>女<じょ>は大<たい>会<かい>に参<さん>加<か>したら、必<かなら>ず、家<か>族<ぞく>とか、友<とも>達<だち>とか、他<ほか>の人<ひと>のためのことを言<い>うと思<おも>います。読<よ>み物<もの>の「トーホク！ガンバロー！」と叫<さけ>んだ人<ひと>みたいですね。

ああ、妹<いもうと>と会<あ>いたいんです！`

let start_chars = "「『［【〔｛〈《（"; // characters that should be shifted down
let end_chars = "」』］】〕｝〉》）。、"; // characters that should be shifted up
function check_display(char, cnt) {
    let char_cnt = 0;
    let allchar_cnt = 0;

    let furigana = false;
    let furigana_cnt = 0;

    if (char === "<") {
        furigana = true;
        return '<div class="furigana">';
    }
    if (char === ">") {
        let out_html = "";
        if (furigana_cnt > 2) {
            out_html = '<div class="furigana-crushed-check"></div>';
        }
        furigana = false;
        furigana_cnt = 0;
        return out_html + "</div>";
    }
    if (furigana) {
        furigana_cnt++;
        return char;
    }
    allchar_cnt++;
    for (let i = 0; i < start_chars.length; i++)
        if (char === start_chars[i])
            return '</div><div class="tategaki-character tategaki-start">' + char;
    for (let i = 0; i < end_chars.length; i++)
        if (char === end_chars[i])
            return `<div style="position: absolute; top: ${23 - 10 + 10 * cnt
                }px;">${char}</div>`;
    // Normal characters INCLUDING NUMBERS: rotate the character
    // Thus, please write dates with kanji. Don't write dates with numbers in tategaki in
    // general, such writing style doesn't make sense to me.
    char_cnt++;
    if (
        "０".codePointAt(0) <= char.codePointAt(0) &&
        char.codePointAt(0) <= "９".codePointAt(0)
    ) {
        return (
            '</div><div class="tategaki-character tategaki-rotate"><div class="tategaki-rotate-character">' +
            char +
            "</div>"
        );
    }
    if (
        "ａ".codePointAt(0) <= char.codePointAt(0) &&
        char.codePointAt(0) <= "ｚ".codePointAt(0)
    ) {
        return (
            '</div><div class="tategaki-character tategaki-rotate"><div class="tategaki-rotate-character">' +
            char +
            "</div>"
        );
    }
    if (
        "Ａ".codePointAt(0) <= char.codePointAt(0) &&
        char.codePointAt(0) <= "Ｚ".codePointAt(0)
    ) {
        return (
            '</div><div class="tategaki-character tategaki-rotate"><div class="tategaki-rotate-character">' +
            char +
            "</div>"
        );
    }
    // "Small" kana
    let small_kana = "ぁぃぅぇぉァィゥェォっッゃゅょャュョ";
    for (let i = 0; i < small_kana.length; i++)
        if (char === small_kana[i])
            return (
                '</div><div class="tategaki-character tategaki-small-kana">' + char
            );
    // All normally
    return '</div><div class="tategaki-character tategaki-none">' + char;
}

function Doc() {
    let s = texts;
    let cnt = 0;
    let lines = [];
    document.querySelectorAll(".container p").forEach((el) => {
        // A whitespace at the beginning
        // let html = '<div class="tategaki-character">　';
        let HTML = "";
        let cnt = 0;
        for (let i = 0; i < s.length; i++) {
            let char = convert(s[i]);
            let inside = false;
            for (let j = 0; j < end_chars.length; j++) {
                if (char === end_chars[j]) {
                    inside = true;
                    break;
                }
            }
            if (inside) cnt++; else cnt = 0;
            HTML += check_display(char, cnt);
        }
        // $(this).html(html + "</div>");
        lines.push(

            <div
                className="tategaki-character"
                dangerouslySetInnerHTML={{ __html: HTML }}
            ></div>
        );
    })
    console.log("Character count: " + char_cnt);
    console.log("All characters (including punctuations) count: " + allchar_cnt);
    document.querySelectorAll(".container h1, .container h2, .container h3").forEach((el) => {
        let HTML = ""
        for (let i = 0; i < s.length; i++) {
            let char = convert(s[i]);
            let inside = false;
            for (let j = 0; j < end_chars.length; j++) {
                if (char === end_chars[j]) {
                    inside = true;
                    break;
                }
            }
            if (inside) cnt++;
            else cnt = 0;
            // html += check_display(char, cnt);
            // return check_display(char, cnt);
            // let html = '<div class="tategaki-character">　';
            // html += check_display(char, cnt);
            HTML += check_display(char, cnt);

            // let HTML = check_display(char, cnt);
            // const doc = new DOMParser().parseFromString(HTML, "application/xml");
            // const htmlSections = doc.childNodes[0].childNodes;
            console.log(HTML);
            // lines.push(

            //     <div
            //         className="tategaki-character"
            //         dangerouslySetInnerHTML={{ __html: HTML }}
            //     ></div>
            // );
        }
        lines.push(

            <div
                className="tategaki-character"
                dangerouslySetInnerHTML={{ __html: HTML }}
            ></div>
        );

    })


    //     // "Crushed furigana"


    return lines;

}



let loading_cnt = 0;

let char_cnt = 0;
let allchar_cnt = 0;

let furigana = false;
let furigana_cnt = 0;


function check_space_dot_comma() {
    const paragraphElements = Array.from(document.querySelectorAll('.container p'));
    const codePoints = Object.fromEntries(['！', '～'].map((string) => [string, Number(string.codePointAt(0))]));
    paragraphElements.forEach((paragraphElement) => {
        const nodes = Array.from(paragraphElement.children);
        const elements = nodes.filter((node) => node.nodeType === Node.ELEMENT_NODE);
        elements.forEach((element, i) => {
            const elementParent = paragraphElement;
            const elementText = element.textContent || '';
            if (elementText.length > 1) {
                const comma = elementText.split('').some((char) => end_chars.includes(char));
                if (comma) {
                    insertSpacingElementAfterIfNeed(element);
                }
                return;
            }
            if (start_chars.includes(elementText)) {
                insertSpacingElementBeforeIfNeed(element);
            }
            if (elementText === '　') {
                if (i === 0) return;
                if (i === elements.length - 1) {
                    elementParent.removeChild(element);
                    return;
                }
                const prevText = elements[i - 1].textContent || '';
                const nextText = elements[i + 1].textContent || '';
                if (prevText.length > 1 || nextText.length > 1) {
                    elementParent.removeChild(element);
                    return;
                }
                const prevCodePoint = Number(prevText.codePointAt(0));
                const nextCodePoint = Number(nextText.codePointAt(0));
                if (
                    prevCodePoint < codePoints['！'] ||
                    prevCodePoint > codePoints['～'] ||
                    nextCodePoint < codePoints['！'] ||
                    nextCodePoint > codePoints['～']
                ) {
                    elementParent.removeChild(element);
                    return;
                }
            }
        });
    });
    function createSpacingElement() {
        const spacingElement = document.createElement('div');
        spacingElement.className = 'tategaki-character';
        spacingElement.textContent = '　';
        return spacingElement;
    }
    function insertSpacingElementAfterIfNeed(element) {
        const elementParent = element.parentNode;
        const spacingElement = createSpacingElement();
        if (element.nextSibling) {
            elementParent.insertBefore(element.nextSibling, spacingElement);
        } else {
            elementParent.appendChild(spacingElement);
        }
        removeSpacingElementIfNeed(spacingElement, element);
    }
    function insertSpacingElementBeforeIfNeed(element) {
        const elementParent = element.parentNode;
        const spacingElement = createSpacingElement();
        elementParent.insertBefore(element, spacingElement);
        removeSpacingElementIfNeed(spacingElement, element);
    }
    function removeSpacingElementIfNeed(spacingElement, element) {
        const elementParent = element.parentNode;
        const elementOffset = element.getBoundingClientRect();
        const spacingElementOffset = spacingElement.getBoundingClientRect();
        if (spacingElementOffset.top - elementOffset.top < 0) {
            elementParent.removeChild(spacingElement);
        }
    }
}

export default function Document({ content = "" }) {
    const { height, width } = useWindowDimensions();

    //     useEffect(() => {
    //         check_space_dot_comma()

    // document.querySelectorAll(".furigana").forEach(function (value) {
    //     let $el = value.children(".furigana-crushed-check");
    //     if ($el.length > 0)
    //     Array.from($el).forEach((el) => el.classList.add('...'))
    //         value.addClass("furigana-crushed");
    // });
    //         //"resize"
    //         //     $("#loading").fadeIn(200);
    //         //     setTimeout(() => {
    //         //         set_container_height();
    //         //         check_space_dot_comma();
    //         //         $("#loading").fadeOut(200);
    //         //     }, 200);
    //     }, [height, width]);

    return (
        <div className="container">
            {/* <Doc /> */}

            <div className="tategaki-character">せん
                週しゅう、大おお声ごえ大たい会かいというお祭まつり</div>

            <div className="tategaki-character">せん
                週しゅう、大おお声ごえ大たい会かいというお祭まつり</div>

            <div className="tategaki-character">せん
                週しゅう、大おお声ごえ大たい会かいというお祭まつり</div>

            <div className="tategaki-character">せん
                週しゅう、大おお声ごえ大たい会かいというお祭まつり</div>

            <div className="tategaki-character">
            </div>
            {/* width: {width} ~ height: {height}
            123123123 wewe */}
            {/* <div className="tategaki-character">{Doc}</div> */}

            {/* {"{"}
{"{"} content {"}"}
{"}"} */}
            {/* {content} */}
        </div>
    );
}



export const BackgroundPaper = () => {
    // const { height, width } = useWindowDimensions();

    //     useEffect(() => {
    //         check_space_dot_comma()

    // document.querySelectorAll(".furigana").forEach(function (value) {
    //     let $el = value.children(".furigana-crushed-check");
    //     if ($el.length > 0)
    //     Array.from($el).forEach((el) => el.classList.add('...'))
    //         value.addClass("furigana-crushed");
    // });
    //         //"resize"
    //         //     $("#loading").fadeIn(200);
    //         //     setTimeout(() => {
    //         //         set_container_height();
    //         //         check_space_dot_comma();
    //         //         $("#loading").fadeOut(200);
    //         //     }, 200);
    //     }, [height, width]);

    return (
        <div className="container-wrapper-background BackgroundPaper" >
            <div className="container ">
                {/* <Doc /> */}
                <div className="tategaki-character">
                </div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
                <div className="tategaki-character"></div>
            </div>
        </div>
    );
}
