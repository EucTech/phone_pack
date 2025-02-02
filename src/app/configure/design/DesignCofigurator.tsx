import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react'

 interface DesignCofiguratorProps {
    configId: string;
    imageUrl: string;
    imageDimensions: {
        width: number;
        height: number;
    }
 }

const DesignCofigurator = ({configId, imageUrl, imageDimensions}: DesignCofiguratorProps) => {



  return (
    <div className=' relative mt-20 grid grid-cols-3 mb-20 pb-20 '>
        <div className=' relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
            <div className=' relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831] '>
                <AspectRatio ratio={896 / 1831} className=' pointer-events-none'>

                </AspectRatio>
            </div>
        </div>      
    </div>
  )
}

export default DesignCofigurator
