import sampleImage from '../../assets/images/pexels-photo-20514931.jpeg'

import { Link } from 'react-router-dom';

export default function Newscard(props) {
    return (
        <>
            <Link className='text-decoration-none' to={props.link}>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">
                                    {props.desc}
                                </p>
                                <p className="card-text"><small className="text-body-secondary">Last edited: {props.edittime}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>



    );

}
