import React from 'react'
import PhotoCard from './PhotoCard'

const TopGenerations = async () => {
    const res = await fetch ('https://pixgen-opal-nine.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0,8)

  return (
    <div> 
        <h1 className='text-3xl text-center font-bold my-10 '>Top Generations Photo</h1>

       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
         {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
       </div>

    </div>
  )
}

export default TopGenerations;