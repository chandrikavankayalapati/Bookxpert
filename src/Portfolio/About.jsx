import React from 'react'


const About = () => {
  return (
    <div id="About" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20'>
        <div className='flex flex-col justify-center  max-w-screen-lg h-full w-full'>
            <div className='pb-8 px-6 md:pl-44'>
                <h1 className='text-4xl font-bold border-b-4 border-gray-500 inline  '>About</h1>
                <p className='text-lg pb-6 pt-10'>I'm Chandrika — a passionate React.js Developer with 3 years of hands-on experience in building scalable and user-friendly web applications. I previously worked at Accenture, where I contributed to a Microfinance Banking Application by developing dynamic dashboards, reports, and client-facing modules. I played a key role in creating detailed financial reports that supported decision-making in the application. I'm skilled in React, JavaScript, HTML, CSS, and Tailwind CSS, and I enjoy writing clean, efficient code with beautiful interfaces. I'm always eager to learn new technologies and solve real-world problems through software.</p>
           <p  className='text-lg'> As part of the Microfinance Banking Application at Accenture, I was actively involved in designing and developing various reports that were essential for operational and financial analysis. These included client repayment reports, disbursement summaries, delinquency tracking, outstanding loan balance (OLB) reports, and loan loss provisioning (LLP) reports. I worked closely with the backend team to fetch and display real-time data in a clean and readable format using React components. My focus was on creating user-friendly interfaces with filtering, sorting, and export functionality to help users quickly interpret financial data and make informed decisions.</p>
            </div>
        </div>
    </div>
  )
}

export default About; 