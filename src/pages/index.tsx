import Image from 'next/image'
import { Inter, Lexend_Deca } from 'next/font/google'
import DataCard from '../components/dataCard'

import header_mobile from '../../public/image-header-mobile.jpg'
import header_desktop from '../../public/image-header-desktop.jpg'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })
const lexend_deca = Lexend_Deca({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <main className='w-screen h-screen overflow-hidden flex
      justify-center items-center bg-very_dark_blue'>
      <div className='rounded-lg bg-dark_desaturated_blue flex
        flex-col md:flex-row-reverse w-[80%] h-[80%] md:h-[60%]'>
        <div className='flex-1 relative'>
          <div className='absolute left-0 top-0 w-full h-full bg-soft_violet/90'>
          </div>
          <Image src={header_desktop} alt='header' className='h-full w-full rounded-lg opacity-70'/>
        </div>
        <div className='flex-1 flex flex-col items-center justify-around px-5 md:pl-10 md:pr-20'>
          <h1 className={`${inter.className} text-3xl text-center md:text-left md:text-[3.7em] 
            leading-[1] font-semibold text-white mt-5 md:mt-10`}>
            Get <span className='text-soft_violet'>insights</span> that help your business grow.
          </h1>
          <h1 className={`${lexend_deca.className} text-slightly_transparent_white_h text-sm
           text-center md:text-left md:text-2xl mt-5 md:mt-0`}>
            Discover the benefits of data analytics and make better decisions regarding avenue, 
            customer experience, and overall efficiency.
          </h1>
          <div className='flex justify-center md:justify-between flex-col items-center md:flex-row 
            md:items-start w-full my-10 gap-5'>
            <DataCard stat='10k+' area='COMPANIES'/>
            <DataCard stat='314' area='TEMPLATES'/>
            <DataCard stat='12M+' area='QUERIES'/>
          </div>
        </div>
      </div>
    </main>
  )
}
