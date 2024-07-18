function Table(props){
    return(



        <>
            <table className="table table-success border border-primary text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Action</th>
                        <th>Expenditure</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item)=>
                        {
                            return(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.item}</td>
                                        <td>{item.expense}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                )
                        }
                        )
                    }               
                </tbody>
            </table>
        </>
    )
}


export default Table