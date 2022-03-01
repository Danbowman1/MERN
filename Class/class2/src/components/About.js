import {Link, useNavigate, useParams} from 'react-router-dom'

const About = (props) => {

    const navigate = useNavigate()

    const { big } = useParams()

    const goHome = () => {
        navigate('/')
    }

    return (

        <div>
            <button onClick={goHome}>Go Home Button</button>

            {
                big?
                <h1 style={{color: 'blue', fontSize:  big + 'px' }}>
                    About Component
                </h1>
                :
                <h1 style={{color: 'blue'}}>
                    About Component
                </h1>
            }


            <Link to={'/'}>Home</Link>
            
        </div>

    )
}

export default About