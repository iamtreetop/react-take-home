import React from 'react'

const Media = ({medias}) => {
  debugger
  return (
    <>
    {medias.map((media, idx) => {
      let image = media[idx].cover_photo_url;
        return (
          <img src={image} key={idx} alt="media"/>
        )
      })
    }
    </>
  )
}

export default Media

// card.medias[0].cover_photo_url