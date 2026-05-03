import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';



const PhotoCard = ({photo}) => {

  return (
    <Card className='border'>
         <div className='relative w-full aspect-square'>
             <Image
             src ={photo.imageUrl}
             fill
             sizes='(max-width:768px) 100vw,(maz-width:1200px)50vw,33vw'
             alt = {photo.title}
             className=' object-cover rounded-xl'
             />
             <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
         </div>

         <div>
            <h1 className='font-medium'>{photo.title}</h1>
         </div>
       
       <div className='flex gap-8'>
         <div className='flex gap-2 items-center'>
          <p><FaHeart /></p>
          <p>{photo.likes}</p>
        </div>
     
       <Separator orientation='vertical'/>

        <div className='flex gap-2 items-center'>
            <p><FiDownload /></p>
            <h2>{photo.downloads}</h2>
        </div>
       </div>

       <Button variant="outline" className={'w-full'}>View</Button>

    </Card>
  );
}

export default PhotoCard;