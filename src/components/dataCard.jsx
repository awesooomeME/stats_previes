import { Inter, Lexend_Deca } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })
const lexend_deca = Lexend_Deca({ subsets: ['latin'], weight: ['400'] })

const DataCard = ({stat, area}) => {
    return (
        <div className='md:w-full flex flex-col items-center md:items-start justify-center'>
            <h1 className={`${inter.className} text-white text-xl md:text-3xl font-bold`}>
                {stat}
            </h1>
            <h1 className={`${lexend_deca.className} text-slightly_transparent_white_p
                text-sm md:text-lg`}>
                {area}
            </h1>
        </div>
    )
}

export default DataCard;