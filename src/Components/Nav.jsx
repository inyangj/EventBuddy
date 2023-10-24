import React from 'react'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
 const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate("/")
  }


    return(
        <div className='bg-[#222] w-[212px] h-screen fixed '>
            <h1 className="text-[28px] text-[#fff] text-center font-semibold pt-12 pb-[78px]">Event<span className="text-[#669083]">Buddy</span>
          </h1>

            <p className='hover:bg-[#669083] pl-[30px] w-full flex gap-2 text-white mb-[48px]'><img src="/images/dashboard.png" alt="icon" />Dashboard</p>
          <ul className='grid gap-[48px] text-white justify-center'>
          <Link to="upcoming" smooth={true}><li className='flex gap-2 hover:bg-[#669083]'><img src="/images/upcoming.png" alt="icon" />Upcoming Events</li></Link>
          <Link to="registered" smooth={true}><li className='flex gap-2 hover:bg-[#669083]'><img src="/images/register.png" alt="icon" />Registered Events</li></Link>
          <Link to="event" smooth={true}><li className='flex gap-2 hover:bg-[#669083]'><img src="/images/events.png" alt="icon" />My Events</li></Link>
          <Link to="analytics" smooth={true}><li className='flex gap-2 hover:bg-[#669083]'><img src="/images/analytics.png" alt="icon" />Analytics</li></Link>
            <li className='flex gap-2 hover:bg-[#669083]'><img src="/images/settings.png" alt="icon" />Settings</li>
          </ul>
          <div className='text-white mt-24 pl-[30px] flex gap-2 hover:bg-[#669083]'>
          <img src="/images/settings.png" alt="icon" />
          <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
    )
}

export default Nav;