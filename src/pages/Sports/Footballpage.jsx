import football_image from '../../assets/images/football1.jpeg';
import Table from '../../components/Table';

export default function Footballpage() {
    return (

        <div className="footballpage text-center">
            <div className="section1">
                <h1>Introduction to Football</h1>
                <img className='w-100' src={football_image} alt="" />
                <div className="para px-5 py-2">
                    <p>
                        Football has a rich history in the Olympic Games, dating back to the inaugural modern Games in 1900. Initially, only amateur players were allowed to participate, reflecting the amateur ethos of the early Olympic movement.
                    </p>
                    <p>
                        Over time, the Olympic football tournament has undergone various changes, including the introduction of professional players since 1992. This change has elevated the level of competition, leading to thrilling matches and memorable moments for fans worldwide.
                    </p>
                    <hr />
                </div>
            </div>




            <div className="section2">
                <h1>History of Football</h1>
                <iframe className='w-100' height="720" src="https://www.youtube.com/embed/yyMx7SU6GLg" title="The Entire History Of Football" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="para p-5">
                    <p>
                        Football, known as soccer in some countries, is a globally beloved sport characterized by its simplicity and universality. Played by millions of people worldwide, it transcends cultural and social boundaries, uniting fans and players alike.
                    </p>
                    <p>
                        In the Summer Olympics, football takes center stage, attracting the attention of sports enthusiasts from every corner of the globe. It serves as a platform for nations to showcase their footballing talent and compete for the prestigious Olympic medals.
                    </p>
                    <hr />
                </div>
            </div>

            <div className="section3">
                <h1>Medals</h1>
                <iframe className='w-100' height="720" src="https://www.youtube.com/embed/7cM4ljysAzM" title="All Olympics Football Gold Medal Winners 1900 - 2020." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>
                    The Olympic football tournament awards gold, silver, and bronze medals to the top three teams in both the men's and women's competitions. Countries like Brazil, Hungary, and Argentina have historically dominated the men's tournament, showcasing their footballing prowess on the Olympic stage.
                </p>
                <p>
                    In the women's tournament, nations like the United States, Germany, and Norway have excelled, demonstrating their skill and determination to claim Olympic glory. The pursuit of medals in Olympic football is a testament to the passion and dedication of athletes and teams striving for excellence.
                </p>
                <hr />
                <Table
                    column_data={["S. No.", 'Year', 'Gold', 'Silver', 'Bronze']}
                    row_data={
                        [
                            ['2020', 'Argentina', 'Brazil', 'Spain'],
                            ['2016', 'Brazil', 'Germany', 'Nigeria'],
                            ['2012', 'Mexico', 'Brazil', 'South Korea'],
                            ['2008', 'Argentina', 'Nigeria', 'Brazil'],
                            ['2004', 'Argentina', 'Paraguay', 'Italy']
                        ]
                    }
                />
            </div>
        </div>

    );
}
