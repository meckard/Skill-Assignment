import navprofilepic from '../Images/Navprofilepic.png'
import settingsicon from '../Images/Settings.png'
import moreicon from '../Images/more.png'

export default function NavProfile () {

    return (
        <div className='nav-profile'>
            <img className='drimage' src={navprofilepic}/>
            <div className='drinfo'>
                <p className='drname'>Dr. Jose Simmons</p>
                <p className='specialty'>General Practitioner</p>
            </div>
            <p className='divider'></p>
            <img className='settingsicon' src={settingsicon}/>
            <img className='moreicon' src={moreicon}/>
        </div>
    )
}