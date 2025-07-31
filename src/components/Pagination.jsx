import { Link } from "react-router-dom";

export default function Pagination(props) {
    var currentLocation = window.location.href;
    return (

        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to={''}>Previous</Link></li>
                    <li className="page-item"><Link className="page-link active" to={''}>1</Link></li>
                    <li className="page-item"><Link className="page-link" to={''}>2</Link></li>
                    <li className="page-item"><Link className="page-link" to={''}>3</Link></li>
                    <li className="page-item"><Link className="page-link" to={''}>Next</Link></li>
                </ul>
            </nav>


        </>

    );
}
