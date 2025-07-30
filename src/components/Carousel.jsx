import Card from "./Card";


import { Link } from "react-router-dom";

import news_image_01 from '../assets/images/gold medal ceremony.jpeg'
import news_image_02 from '../assets/images/olympic village life.jpeg'
import news_image_03 from '../assets/images/opening ceremony1.jpeg'
import news_image_04 from '../assets/images/swimming1.jpeg'
import news_image_05 from '../assets/images/sportmanship.jpeg'



export default function Carousel(props) {


    let array = [1, 2, 3, 4];




    return (
        <>


            <div id="carouselExampleCaptions" className="carousel slide p-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />

                    {
                        // array.map(() => (<></>))
                    }
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-current="true" aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-current="true" aria-label="Slide 5" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-current="true" aria-label="Slide 6" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-current="true" aria-label="Slide 7" />
                </div>
                <div className="carousel-inner">

                    <Link to="/news/1">
                        <div className=" carousel-item active" data-bs-interval="3000">
                            <img src={news_image_01} className="d-block w-100" alt="..." />
                            <div className="text-light carousel-caption bg-dark">
                                <h1>Gold Medal Ceremony: A Celebration of Excellence</h1>
                                <h3>The winners of the 100m sprint and 200m freestyle events receive their well-deserved gold medals.</h3>
                            </div>
                        </div>
                    </Link>

                    <Link to="/news/2">
                        <div className=" carousel-item" data-bs-interval="3000">
                            <img src={news_image_02} className="d-block w-100" alt="..." />
                            <div className="text-light carousel-caption bg-dark">
                                <h1>Behind the Scenes: Olympic Village Life</h1>
                                <h3>Explore the daily routines and camaraderie among athletes in the Olympic Village</h3>
                            </div>
                        </div>
                    </Link>

                    <Link to="/news/3">
                        <div className=" carousel-item" data-bs-interval="3000">
                            <img src={news_image_03} className="d-block w-100" alt="..." />
                            <div className="text-light carousel-caption bg-dark">
                                <h1>Opening Ceremony: Uniting the World</h1>
                                <h3>The spectacular opening ceremony marks the beginning of the Olympic Games, bringing together athletes and spectators from around the globe.</h3>
                            </div>
                        </div>
                    </Link>

                    <Link to="/news/4">
                        <div className=" carousel-item" data-bs-interval="3000">
                            <img src={news_image_04} className="d-block w-100" alt="..." />
                            <div className="text-light carousel-caption bg-dark">
                                <h1>Record-Breaking Performances in Swimming Events</h1>
                                <h3>Swimmers from various countries have shattered records in the pool, setting new benchmarks for excellence</h3>
                            </div>
                        </div>
                    </Link>

                    <Link to="/news/5">
                        <div className=" carousel-item" data-bs-interval="3000">
                            <img src={news_image_05} className="d-block w-100" alt="..." />
                            <div className="text-light carousel-caption bg-dark">
                                <h1>Heartwarming Moments: Athletes' Acts of Sportsmanship</h1>
                                <h3>Despite the intense competition, athletes have shown remarkable sportsmanship, demonstrating the true spirit of the Olympic Games</h3>
                            </div>
                        </div>
                    </Link>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </>
    );
}
