import React from "react";
import Image from 'next/image';
import location from '../assets/location.png';
import telephone from '../assets/telephone.png';
import email from '../assets/email.png';
import chat from '../assets/chat.png';

const Contact = () => {
    const data = [
        {
            img: location,
            title: 'Our Main Office',
            description: `Svarstid: mellan 13:00 och 15:00 alla dagar Kontor: fröknegårdsvägen 18 Kristianstad`,
            dimensions: 'h-20 w-20'
        },
        {
            img: telephone,
            title: 'Telephone',
            description: '0700333433',
            dimensions: 'h-20 w-20'
        },
        {
            img: email,
            title: 'Email',
            description: 'Support@smartboost.se',
            dimensions: 'h-20 w-20'
        },
        {
            img: chat,
            title: 'Chat',
            description: 'Chat Now',
            dimensions: 'h-20 w-24'
        },
    ]

  return (
    <div className="bg-[#272935] pb-16 mt-24">
        <h1 className="text-white text-3xl m-2">Contact:</h1>
        <div className="flex flex-col gap-4 items-center mt-8 md:flex-row md:flex-wrap  md:justify-center md:items-center xl:gap-[5%] ">
            {  
                data.map((el,i) => (
                        <div className="w-[80%] md:w-[35%] lg:w-[18.75%] h-64 p-2 flex flex-col items-center  border-2 bg-white">
                            <Image className={el.dimensions}  src={el.img} alt={el.title} />
                            <p className="text-bold text-xl text-[#E52226]">{el.title}</p>
                            <p className="mt-4 text-[#616162]">{el.description}</p>
                            {i === 1 ? (
                                <a href="tel://0700333433" className="mt-4 bg-[#E52226] p-2 text-white rounded-lg" >Call Now</a>
                            ): i === 2 ? (
                                <a className="mt-4 bg-[#E52226] p-2 text-white rounded-lg" onClick={() => window.location.href = "mailto:support@smartboost.se"}>Email Now</a>
                            ): ''}

                        </div>
                ))
            }
        </div>
    </div>
  )
};

export default Contact;
