import Image from 'next/image'
import React from 'react'

const Postinfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
      <Image
        src="/icons/infoMore.svg"
        alt=""
        width={16}
        height={16}
        className="w-10 h-10 rounded-full overflow-hidden relative"
      />
    </div>
  )
}

export default Postinfo
