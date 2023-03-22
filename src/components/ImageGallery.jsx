import React, { useRef, useEffect } from 'react'

function ImageGallery(data) {
  const myImageRef = useRef(null)
  const imageLinks = []
  let path

  const imageArrayLength = data.data.images.length

  function fillArray() {
    for (let i = 0; i < imageArrayLength; i += 1) {
      imageLinks.push(data.data.images[i].thumb)
    }
    // console.log(imageLinks)
    return imageLinks
  }

  fillArray()

  const changeImg = (t) => {
    path = imageLinks[t]
    // console.log(`Path${path}`)
    return path
  }

  useEffect(() => {
    let t = 1
    const interval = setInterval(() => {
      myImageRef.current.src = changeImg(t)
      //  myImageRef.current.classList.remove('animate__zoomIn')
      //   myImageRef.current.classList.toggle('animate__fadeIn')
      t += 1
      if (t === imageArrayLength) {
        t = 0
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  /* const imageSlider = () => {
    let t = 1
    setInterval(
      () => {
        myImageRef.current.src = changeImg(t)
        //  myImageRef.current.classList.remove('animate__zoomIn')
        //   myImageRef.current.classList.toggle('animate__fadeIn')
        t += 1
        if (t === imageArrayLength) {
          t = 0
        }
      },
      3000

    )
  }
 */

  // imageSlider()

  return (
    <img id="slideshow" className="lg:w-[300px] lg:h-[400px] mt-5 mx-auto animate__animated animate__zoomIn" ref={myImageRef} src={data.data.images[0].thumb} />
  )
}

export default ImageGallery
