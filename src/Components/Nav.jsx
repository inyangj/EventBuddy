import React from 'react'


const Nav = () => {


    return(
        <div className='bg-[#222] w-[212px] h-screen fixed'>
            <h1 className="text-[28px] text-[#fff] text-center font-semibold pt-12 pb-[78px]">Event<span className="text-[#669083]">Buddy</span>
          </h1>

            <p className='bg-[#669083] pl-[30px] w-full flex gap-2 text-white mb-[48px]'><img src="/images/dashboard.png" alt="icon" />Dashboard</p>
          <ul className='grid gap-[48px] text-white justify-center'>
            <li className='flex gap-2'><img src="/images/upcoming.png" alt="icon" />Upcoming Events</li>
            <li className='flex gap-2'><img src="/images/register.png" alt="icon" />Registered Events</li>
            <li className='flex gap-2'><img src="/images/events.png" alt="icon" />My Events</li>
            <li className='flex gap-2'><img src="/images/analytics.png" alt="icon" />Analytics</li>
            <li className='flex gap-2'><img src="/images/settings.png" alt="icon" />Settings</li>
          </ul>
        </div>
    )
}

export default Nav;