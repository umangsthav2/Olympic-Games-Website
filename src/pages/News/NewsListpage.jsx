import sampleImage from '../../assets/images/pexels-photo-20514931.jpeg'

import Pagination from "../../components/Pagination";
import Newscard from "./Newscard";
export default function NewsListpage() {
    return (
        <div className="newslistpage d-flex flex-column align-items-center">
            <h1 className="p-5">Latest News</h1>
            <div className="newscard-container px-5">
                <Newscard newsId={1} link={'news/post/'+1} image={sampleImage} title={"Card Title"} desc={"This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. "} edittime={"20 minutes ago"} />
                <Newscard newsId={1} link={'news/post/'+0} image={sampleImage} title={"Card Title"} desc={"This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. "} edittime={"20 minutes ago"} />
                <Newscard newsId={1} link={'news/post/'+0} image={sampleImage} title={"Card Title"} desc={"This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. This is news description. "} edittime={"20 minutes ago"} />
            </div>
            <Pagination currentPage={2} link={"hello"} />
        </div>

    );
}
