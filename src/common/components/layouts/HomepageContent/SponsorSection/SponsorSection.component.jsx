import styles from './SponsorSection.module.css'
import Image from 'next/image';
import Link from 'next/link';

import Marquee from "react-fast-marquee";

import Google from '@/images/google-logo.png';
import STS from '@/images/sts-logo.svg';


import { BsChevronDoubleDown } from 'react-icons/bs'



export default function SponsorSection( props ){
//Use a use state, use effect -> list of all images. 3 shown, 1 unseen. Off screen is push and pop
//https://www.npmjs.com/package/react-fast-marquee

     return ( 
        <div className={`flex flow-row ${styles['spnosor-section-container']}`}>
            <Marquee gradient={false} style={{ background: 'transparent !important', }}>
               <Image src={Google} alt="" />
               <Image src={STS} alt="" />
               <Image src={Google} alt="" />
               <Image src={Google} alt="" />
               <Image src={Google} alt="" />
               <Image src={Google} alt="" />
            </Marquee>
        </div>
    )
    
}