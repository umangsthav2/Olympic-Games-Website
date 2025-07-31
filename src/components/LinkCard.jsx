import { Link } from "react-router-dom";
import Modal from './Modal'

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat culpa voluptate quod temporibus nisi laboriosam nesciunt alias maiores fugit! Obcaecati, rerum perspiciatis omnis eos dolorum est veritatis fuga sunt.";
export default function LinkCard(props) {
    return (
            <div className="card" style={{ "width": "18rem" }}>
        <Link to={props.link}>
                <img src={props.image} className="card-img-top" alt="..." />
        </Link>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>





    );



}


