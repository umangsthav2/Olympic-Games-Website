import aryanvideo from '../../assets/videos/aryan.mp4'
import Card from '../../components/Card';
import NewsCarousel from '../../components/NewsCarousel';

import Carousel from '../../components/Carousel';


import swimming_image from '../../assets/images/Michael Phelps1.jpeg'
import gymnastic_image from '../../assets/images/gymnastic.jpeg'
import tandf_image from '../../assets/images/track and field.jpeg'
import Table from '../../components/Table';


const Schedulepage = () => {
    return (<>
        <div className="section1 text-center">
            <div className=" d-flex flex-column landing-video position-relative overflow-hidden">
                <div className="blacker position-absolute w-100 opacity-75 bg-dark">
                    <h1 className="d-flex h-100  justify-content-center align-items-center ">
                        Welcome to the Epicenter of Athletic Excellence
                    </h1>
                </div>
                <Carousel count={3} images={""} />



            </div>
            <div className="section2 p-5">
                <h2>
                    Medal Table: Celebrating Global Excellence
                </h2>
                <Table
                    column_data={['#', 'Country', 'Total', 'Gold', 'Silver', 'Bronze',]}
                    row_data={
                        [
                            ['USA', 113, 39, 41, 33],
                            ['China', 24, 8, 6, 10],
                            ['Japan', 21, 3, 10, 8],
                            ['Canada', 19, 8, 6, 5],
                            ['Germany', 12, 3, 1, 8],
                            ['Belgium', 7, 3, 1, 3],
                        ]
                    }

                />
            </div>
        </div>
    </>
    );
}

export default Schedulepage;
