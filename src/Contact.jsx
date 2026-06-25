import wave from './assets/wave-haikei.png';

function Contact(){
    const styles = {
        backgroundImage:`url(${wave})`,
        height:'100vh',
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }
    return (
        <>
        <div style={styles}>
            <input type="text" placeholder='EnterYournameplease'/><br />
            <input type="text" placeholder='ProvideEmail'/><br />
        </div>
        </>
    )
}
export default Contact