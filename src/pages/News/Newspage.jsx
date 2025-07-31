import Pagination from '../../components/Pagination';
import placehodlerImage from '../../assets/images/pexels-photo-20514931.jpeg'

export default function Newspage(props) {
    return (
        <>
            <div className="d-flex flex-column align-items-center newspage">
                <h1>News Headline+ {props.id}</h1>
                <div className="img-containerw w-50 overflow-hidden">
                    <img className="w-100 " src={placehodlerImage} alt="" />
                </div>
                <div className="news-content">
                    <p className='fs-4 p-5 lh-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum inventore, quo tenetur iusto illum esse aperiam saepe maxime, expedita, adipisci ut nulla quam doloremque quod autem quidem obcaecati natus! Similique.
                        Error ducimus odio dolorum numquam eligendi delectus soluta, enim quas, maiores, omnis et perferendis? Debitis voluptates quaerat fugiat quidem consequuntur incidunt in sit, ex repellat vitae neque saepe autem amet.
                        Commodi maxime voluptas numquam iure officiis saepe ratione eveniet! Dolorem ex consectetur corporis praesentium nesciunt nostrum, culpa fugit nemo accusamus nihil magni voluptatibus animi odit obcaecati hic commodi! Culpa, asperiores.
                        Minima soluta sapiente nisi hic quos aspernatur praesentium numquam commodi magnam atque nihil quas, neque sunt omnis autem? Excepturi dolorum delectus ad, nemo facere expedita temporibus cupiditate voluptate! Sapiente, unde?
                        Provident dolor nam, doloremque maiores magnam accusamus est itaque illo laudantium expedita voluptatum a ad, repellat excepturi sequi pariatur? Eius obcaecati repellendus dolor explicabo suscipit quidem sint sapiente ab natus.
                        Sunt quibusdam laboriosam commodi, expedita aspernatur adipisci facilis doloremque fuga voluptatem? Quo, ab blanditiis? Alias, doloremque. Ea cum culpa fuga provident! Excepturi aliquam repudiandae cupiditate at quam, quae officiis unde!</p>
                </div>
                <Pagination />
            </div>
        </>
    )

}
