import React from 'react'

function Gif(props:any) {
  return (
    <>
    {
      props.gifList.map((gif:any, index:number) => {
        return(
          <img key={index} src={`${gif.images.preview_gif.url}`} style={{width:'20rem'}}/>
        )
      })
    }
    </>
  )
}

export default Gif