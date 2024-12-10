import PropTypes from 'prop-types'
import EducationalSection from './EducationSection'


function CVDisplay({name, email, phone}){

    return (

        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <EducationalSection/>
        </div>
    )

}


CVDisplay.propTypes ={
    name: PropTypes.string,
    email: PropTypes.string,
    phone:PropTypes.number,
}



export default CVDisplay