import moreHorizontal from '../Images/moreHorizontal.png'

export default function ListPatient (picture, name, gender, age) {
    return(
        <div className='listpatient'>
            <img src={picture} alt='Patient profile picture'/>
            <div className='patientlistinfo'>
                <p>{name}</p>
                <p>{`${gender}, ${age}`}</p>
            </div>
            <img src={moreHorizontal} alt="more icon"/>
        </div>
    )
}