import '../Dummy/dummy.component.css';


export function MyDummy() {

    let Product = {

        ID: 1,
        Name: "Natasha",
        Email: "natasha@gmail.com"


    }
    let Product1 = {

        ID: 2,
        Name: "Iron Man",
        Email: "ironman@gmail.com"


    }
    let Product2 = {
        ID: 3,
        Name: "Thor",
        Email: "thor@gmail.com"
    }

    let Product3 = {
        ID: 4,
        Name: "Tony Strak",
        Email: "tony@gmail.com"


    }


    let Products = [Product, Product1, Product2, Product3]

    Products.push(
        {

            ID: 5,
            Name: "Ethan Hunt",
            Email: "ethan@gmail.com"

        }

    );

    Products.unshift(
        {

            ID: 6,
            Name: "Apple",
            Email: "apple@gmail.com"

        }
       
    );




    return (
        <div>
            <table className=" table table-hover table-bordered table-striped " style={{ textAlign: "center" }}>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody className="table-warning">

                    {
                        Products.map((item) =>
                            <tr>
                                <td>{item.ID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                            </tr>

                        )
                    }


                   
                </tbody>
            </table>
        </div>
    )
}




