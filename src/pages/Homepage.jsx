import aryanvideo from '../assets/videos/aryan.mp4'
import Card from '../components/Card';
import NewsCarousel from '../components/NewsCarousel';



import swimming_image from '../assets/images/Michael Phelps1.jpeg'
import gymnastic_image from '../assets/images/gymnastic.jpeg'
import tandf_image from '../assets/images/track and field.jpeg'



const Homepage = () => {
    return (<>
        <div className="section1 text-center">
            <div className=" d-flex flex-column landing-video position-relative overflow-hidden">
                <div className="blacker position-absolute w-100 opacity-75 bg-dark h-100">
                    <h1 className="d-flex h-100  justify-content-center align-items-center ">
                        Welcome to the Epicenter of Athletic Excellence
                    </h1>
                </div>
                <video autoPlay muted loop className='w-100'>
                    <source src={aryanvideo} type="video/mp4" />
                </video>



            </div>
            <div className="section2 p-5">
                <h4>
                    Embark on a journey where dreams are forged, limits are shattered, and the human spirit soars. The Olympic Games beckon, summoning warriors from every corner of the globe to partake in a symphony of athleticism, passion, and unity.
                </h4>
                <hr />
                <h5>
                    Feel the pulse of the arena as champions rise, challengers push boundaries, and underdogs defy the odds. Whether you're captivated by the elegance of swimming, the grace of gymnastics, or the raw power of track and field, the Olympic stage awaits your applause.
                </h5>

                <div className="d-flex justify-content-center p-5">
                    <div className="row row-cols-3 row-cols-md-5 gap-5">
                        <Card link='/hellow' image={swimming_image} title='Swimming' desc='Dive into the pool with Olympic swimmers breaking records.' />
                        <Card image={gymnastic_image} title='Gymnastics' desc='Watch as gymnasts defy gravity and showcase their strength and grace.' />
                        <Card image={tandf_image} title='Track and Field' desc="Witness the world's fastest athletes compete for gold." />
                    </div>
                </div>

                <div className="section3 p-5">
                    <h1>Latest News</h1>
                    <NewsCarousel />
                </div>
            </div>
        </div>
    </>
    );
}

export default Homepage;
