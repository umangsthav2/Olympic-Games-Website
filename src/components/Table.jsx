export default function Table(props) {
    var i = 0;
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {
                            props.column_data.map(

                                (col_data) => {
                                    return (
                                        <th key={col_data} scope="col">{col_data}</th>);
                                }
                            )
                        }
                    </tr>
                    {
                        props.row_data.map(

                            (row_data) => {
                                i++;
                                return (
                                    <tr key={row_data}>
                                        <td key={row_data}>{i}</td>
                                        {
                                            row_data.map(
                                                (field_data) => {

                                                    return (
                                                        <td key={field_data + Math.random()}>{field_data}</td>
                                                    )
                                                }
                                            )
                                        }
                                    </tr>
                                )
                            }
                        )
                    }
                </thead>
            </table>
        </>
    );
}

