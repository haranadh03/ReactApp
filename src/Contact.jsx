import wave from './assets/wave-haikei.png';
import './App.css';
import "Animate.css";

function Contact(){

    return (
        <>
        <div className='contact'>
            <h1 className='animate__heartBeat'>Login Form</h1>
            <input type="text" placeholder='EnterYournameplease'/><br />
            <input type="text" placeholder='ProvideEmail'/><br />
        </div>
        </>
    )
}
export default Contact