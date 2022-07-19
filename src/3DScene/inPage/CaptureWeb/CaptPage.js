/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useImperativeHandle, forwardRef, useEffect, Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { Popover, Transition } from '@headlessui/react'
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon
// } from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'
import { exportImg } from './tool/Html2Canvas'

import Hello from './svg/hello'
import Home from './svg/home'
import Cam from './svg/cam'
import Upload from './svg/upload'
import Info from './svg/info'
import Logo from './svg/logo'
import "./CaptPage.css"
// const features = [
//   {
//     name: 'Analytics',
//     href: '#',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon
//   },
//   {
//     name: 'Engagement',
//     href: '#',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorClickIcon
//   },
//   { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
//   {
//     name: 'Integrations',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: ViewGridIcon
//   },
//   {
//     name: 'Automations',
//     href: '#',
//     description: 'Build strategic funnels that will drive your customers to convert',
//     icon: RefreshIcon
//   }
// ]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon }
// ]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon
//   },
//   {
//     name: 'Guides',
//     description: 'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon
//   },
//   {
//     name: 'Events',
//     description: 'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon
//   },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
// ]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' }
// ]

//
function Example(props, ref) {
  const [pages, setPages] = useState(false)
  const [isCapture, setIsCapture] = useState(false)

  useImperativeHandle(ref, () => ({
    isCapture: isCapture,
    getFromData: () => {
      setIsCapture(false)
    }
  }))
  // useImperativeHandle(ref, () => '111')
  // useEffect(() => {
  //   if (props.pages) {
  //     setPages(props.pages)
  //   }
  //   console.log('execute function in useEffect')
  // }, [props])

  const ThePage = ({ pages }) => {
    switch (pages) {
      case 'Home':
        return <Home className=" svgs" />
      case 'Cam':
        return (
          <div className="iframe_se3" style={{ position: 'relative' }}>
            <iframe
              id="shots"
              // style={{transform: 'rotate(90deg)'}}
              className="relative w-full h-full"
              // src="https://dayuan.dev/"
              src="https://aframe.io/examples/showcase/anime-UI/"
              title="W3Schools Free Online Web Tutorials"></iframe>
            <div style={{ position: 'absolute', bottom: 0, backgroundColor: '#000000' }}>
              <Cam
                onClick={() => {
                  setIsCapture(true)
                  console.log('setIsCapture')
                }}
              />
              {/* <Cam onClick={() => exportImg()} /> */}

              {/* // <button }>Capture Image</button> */}
            </div>
          </div>
        )
      case 'Hello':
        return <Hello className=" svgs " style={{ width: 360, height: 780 }} />
      case 'Upload':
        const myHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_fq0rbawt.json"  background="transparent"  speed="0.9"  style="width: 100px; height: 100px;"    autoplay></lottie-player> `

        return (
          <div style={{ width: 360, height: 780, position: 'relative' }}>
            <div style={{ position: 'absolute', width: 360, height: 780 }}>
              <Player
                autoplay
                src="https://assets8.lottiefiles.com/packages/lf20_fq0rbawt.json"
                style={{ height: '620px', width: '300px', background: 'rgba(0, 0, 0, 0.22)' }}>
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
            </div>
            <Upload className=" svgs" />
          </div>
        )
      case 'Info':
        return <Info className=" svgs" />
      default:
        return <Logo className=" svgs-logo" />
    }
  }
  return (
    <div style={{ overflow: 'hidden' }} className=" bg-black mx-auto max-w-7xl w-full pt-14 pb-5 text-center h-full">
      <ThePage pages={props.pages} />
 
      {/* <Hello className=" svgs " style={{ width: 360, height: 780 }} /> */}
      {/* <Home className=" svgs" /> */}
      {/* <div className="iframe_se3" style={{ position: 'relative' }}>
        <iframe
          // style={{transform: 'rotate(90deg)'}}
          className="relative w-full h-full"
          // src="https://dayuan.dev/"
          src="https://aframe.io/examples/showcase/anime-UI/"
          title="W3Schools Free Online Web Tutorials"></iframe>
        <div style={{ position: 'absolute', bottom: 0, backgroundColor: '#000000' }}>
          <Cam />
        </div>
      </div> */}
      {/* <Logo className=" svgs-logo" /> */}
      {/* <Upload className=" svgs" /> */}
      {/* <Info className=" svgs" /> */}
    </div>
  )
}

export default forwardRef(Example)
