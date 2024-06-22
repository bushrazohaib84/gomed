import React from 'react'
import Image from 'next/image'
import gnc from '/public/gnc.jpg'
import webber from '/public/webber.jpg'
import black from '/public/black.jpg'
import nutrain from '/public/nutrain.jpg'
import centrum from '/public/centrum.jpg'
import factors from '/public/factors.jpg'

function PopularBrands() {
  return (
    <main>
    <div className='justify-center text-center  font-bold text-blue-600 text-4xl'>
      <span className='font-mono text-green-500'>Popular</span> Brands
    </div>
    <div className='flex gap-10 p-28'>
      <Image 
      src={gnc}
      alt='g'
      width={170}
      height={170}
      />
       <Image 
      src={webber}
      alt='w'
      width={170}
      height={170}
      />
        <Image 
      src={black}
      alt='b'
      width={170}
      height={170}
      />
        <Image 
      src={nutrain}
      alt='n'
      width={170}
      height={170}
      />
       <Image 
      src={centrum}
      alt='c'
      width={170}
      height={170}
      />
       <Image 
      src={factors}
      alt='f'
      width={170}
      height={170}
      />
    </div>
    </main>
  )
}

export default PopularBrands
