import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tech1 from '../../public/tech1.jpg'
import tech2 from '../../public/tech6.jpg'
import tech3 from '../../public/tech3.jpg'
import tech4 from '../../public/tech4.jpg'

const PicGrid = () => {
  return (
    <div>
      
<div className="grid grid-cols-2 gap-2 p-4 mb-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={tech1} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={tech2} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={tech3} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={tech4} alt=""/>
        </div>
    </div>

    </div>
  );
}

export default PicGrid;
