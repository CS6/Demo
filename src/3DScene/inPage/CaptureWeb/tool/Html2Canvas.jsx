import { useState, useRef, useEffect, Suspense, useCallback } from 'react'

import html2Canvas from 'html2canvas'

//截图
/** https://github.com/pmndrs/react-three-fiber/discussions/770#discussioncomment-128545
 * i think the canvas needs a special prop for that to work. i believe it was <Canvas gl={{ preserveDrawingBuffer: true }}> the canvas in oncreated is probably zero anyway, oncreated is meant to flag that the canvas is ready to run.
 * https://stackoverflow.com/questions/26193702/three-js-how-can-i-make-a-2d-snapshot-of-a-scene-as-a-jpg-image
 * 將幀保存為 jpg 圖像需要做幾件事。

首先像這樣初始化webgl上下文

 renderer = new THREE.WebGLRenderer({
                    preserveDrawingBuffer: true
                });
preserveDrawingBufferflag 將幫助您獲取當前幀的 base64 編碼該代碼將是這樣的

var strMime = "image/jpeg";
imgData = renderer.domElement.toDataURL(strMime);
 */

export const exportImg = () => {
  html2Canvas(document.querySelector('iframe'), {
    // html2Canvas(document.querySelector('body'), {
    // 转换为图片
    useCORS: true // 解决资源跨域问题
  }).then((canvas) => {
    // imgUrl 是图片的 base64格式 代码 png 格式
    let imgUrl = canvas.toDataURL('image/png')
    //下面是 下载图片的功能。 不需要不加 注意加 .png
    downloadIamge(imgUrl, '截图.png')
  })
}

const downloadIamge = (imgsrc, Fname) => {
  //下载图片地址和图片名
  let image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function () {
    let canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    let context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    let url = canvas.toDataURL('image/png') //得到图片的base64编码数据
    let a = document.createElement('a') // 生成一个a元素
    let event = new MouseEvent('click') // 创建一个单击事件
    a.download = Fname || 'photo' // 设置图片名称
    a.href = url // 将生成的URL设置为a.href属性
    a.dispatchEvent(event) // 触发a的单击事件
  }
  image.src = imgsrc
}
