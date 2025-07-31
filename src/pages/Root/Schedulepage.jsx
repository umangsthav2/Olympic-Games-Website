import Table from '../../components/Table';


const Schedulepage = () => {
    return (<>
        <div className="section1 text-center">
            <div className="section2 text-center p-5">
                <h1>
                    Olympic Games Full Schedule
                </h1>
                <Table
                    column_data={['#', 'Date', 'Event', 'Location', 'Time']}
                    row_data={
                        [
                            ["August 1, 2024", "Opening Ceremony", "Olympic Stadium", "20:00"],
                            ["August 2, 2024", "Swimming - Men's 100m Freestyle Final", "Olympic Aquatics Center", "18:00"],
                            ["August 3, 2024", "Athletics - Women's 100m Final", "Olympic Stadium", "19:30"],
                            ["August 4, 2024", "Track and Field - Men's 100m", "Final	Olympic Stadium", "21:00"],
                            ["August 5, 2024", "Gymnastics - Women's Team All-Around Final", "Olympic Gymnastics Arena", "15:00"],
                            ["August 6, 2024", "Basketball - Men's Semifinals", "Olympic Basketball Arena", "13:00"],
                            ["August 7, 2024", "Badminton - Women's Singles Final", "Olympic Badminton Center", "16:30"],
                            ["August 8, 2024", "Shooting - Men's 10m Air Pistol Final", "Olympic Shooting Range", "09:00"],
                            ["August 9, 2024", "Table Tennis - Men's Singles Semifinals", "Olympic Table Tennis Arena", "10:30"],
                            ["August 9, 2024", "Trampoline - Women's Individual Final", "Olympic Trampoline Center", "15:30"],
                            ["August 10, 2024", "Volleyball - Women's Gold Medal Match", "Olympic Volleyball Arena", "19:00"],
                            ["August 11, 2024", "Taekwondo - Men's -68kg Final", "Olympic Taekwondo Hall", "14:00"]
                        ]
                    }

                />
            </div>
        </div>
    </>
    );
}

export default Schedulepage;
