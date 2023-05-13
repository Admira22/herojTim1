import help from '../images/help.png';
import '../css/main.css'
function Help(){
    return(
        <div>
            <img src={help} alt={"help"}  width={300} height={400} className={'align-right'}/>
        </div>
    )
}
export default Help