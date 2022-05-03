import pic from './car2.jpg';
import './Card1.css';

function Card(){
    return(
        <div>
            <img src={pic} />
            <h4><b>Cars Gallery</b></h4>
            <p>Welcome to Cars gallery</p>
        </div>
    );
}
export default Card;