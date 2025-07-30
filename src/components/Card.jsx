import { Link } from "react-router-dom";
import Modal from './Modal'

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat culpa voluptate quod temporibus nisi laboriosam nesciunt alias maiores fugit! Obcaecati, rerum perspiciatis omnis eos dolorum est veritatis fuga sunt.";
export default function Card(props) {
    return (
        <>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</button>
                    <Modal title={props.title} long_desc={lorem} />

                </div>
            </div>

        </>




    );



}


