import LinkCard from "../../components/LinkCard";





import athletics_icon from '../../assets/icons/Athletics.jpeg'
import Badminton_icon from '../../assets/icons/Badminton.jpeg'
import Baseball_icon from '../../assets/icons/Baseball.jpeg'
import Basketball_icon from '../../assets/icons/Basketball.jpeg'
import boxing_icon from '../../assets/icons/boxing.jpeg'
import cycling_icon from '../../assets/icons/cycling.jpeg'
import football_icon from '../../assets/icons/football.jpeg'
import Gymnastics_icon from '../../assets/icons/Gymnastics.jpeg'
import judo_icon from '../../assets/icons/judo.jpeg'
import rowing_icon from '../../assets/icons/rowing.jpeg'
import Sailing_icon from '../../assets/icons/Sailing.jpeg'
import swimming_icon from '../../assets/icons/swimming.jpeg'
import tabletennis_icon from '../../assets/icons/table tennis.jpeg'
import volleyball_icon from '../../assets/icons/volleyball.jpeg'
import Weightlifting_icon from '../../assets/icons/Weightlifting.jpeg'
import Wrestling_icon from '../../assets/icons/Wrestling.jpeg'

import skiing_icon from '../../assets/icons/skiing.jpeg'
import Snowboardin_icon from '../../assets/icons/Snowboardin.jpeg'
import icehockey_icon from '../../assets/icons/Ice_Hockey.jpeg'
import speedskating_icon from '../../assets/icons/Speed_Skating.jpeg'
import Biathlon_icon from '../../assets/icons/Biathlon.jpeg'
import Bobsleigh_icon from '../../assets/icons/Bobsleigh.jpeg'
import Curling_icon from '../../assets/icons/Curling.jpeg'
import sportluge_icon from '../../assets/icons/sport luge.jpeg'
import luge_icon from '../../assets/icons/luge.jpeg'
import Nordiccombined_icon from '../../assets/icons/Nordiccombined.jpeg'


export default function Sportspage() {
    return (
        <>
            <div className="sportspage text-center">
                <h1 className="p-5">Olympic Sports</h1>
                <div className="cardholder gap-3 d-flex flex-wrap justify-content-center">
                    <LinkCard link="/sports/athletics" image={athletics_icon} title="Athletics" />
                    <LinkCard link="/sports/swimming" image={swimming_icon} title="Swimming" />
                    <LinkCard link="/sports/gymnastics" image={Gymnastics_icon} title="Gymnastics" />
                    <LinkCard link="/sports/cycling" image={cycling_icon} title="Cycling" />
                    <LinkCard link="/sports/basketball" image={Basketball_icon} title="Basketball" />
                    <LinkCard link="/sports/football" image={football_icon} title="Football" />
                    <LinkCard link="/sports/tabletenis" image={tabletennis_icon} title="Table Tenis" />
                    <LinkCard link="/sports/volleyball" image={volleyball_icon} title="Volleyball" />
                    <LinkCard link="/sports/rowing" image={rowing_icon} title="Rowing" />
                    <LinkCard link="/sports/boxing" image={boxing_icon} title="Boxing" />
                    <LinkCard link="/sports/wrestling" image={Wrestling_icon} title="Wrestling" />
                    <LinkCard link="/sports/weightlifting" image={Weightlifting_icon} title="Weight Lifting" />
                    <LinkCard link="/sports/judo" image={judo_icon} title="Judo" />
                    <LinkCard link="/sports/sailing" image={Sailing_icon} title="Sailing" />
                    <LinkCard link="/sports/baseball" image={Baseball_icon} title="Baseball" />
                    <LinkCard link="/sports/badminton" image={Badminton_icon} title="Badminton" />
                </div>
                <hr />
                <h1>Winter Olympics Sports</h1>
                <div className="cardholder gap-3 d-flex flex-wrap justify-content-center">
                    <LinkCard link="/sports/Skiing" image={skiing_icon} title="Skiing" />
                    <LinkCard link="/sports/snowboarding" image={Snowboardin_icon} title="Snow boarding" />
                    <LinkCard link="/sports/icehockey" image={icehockey_icon} title="Ice Hockey" />
                    <LinkCard link="/sports/speedskating" image={speedskating_icon} title="Speed Skating" />
                    <LinkCard link="/sports/baithlon" image={Biathlon_icon} title="Biathlon" />
                    <LinkCard link="/sports/bobsleigh" image={Bobsleigh_icon} title="Bobsleigh" />
                    <LinkCard link="/sports/curling" image={Curling_icon} title="Curling" />
                    <LinkCard link="/sports/luge" image={sportluge_icon} title="Luge" />
                    <LinkCard link="/sports/skeleton" image={luge_icon} title="Skeleton" />
                    <LinkCard link="/sports/nordiccombined" image={Nordiccombined_icon} title="Nordic Combined" />
                </div>
            </div>
        </>
    );
}