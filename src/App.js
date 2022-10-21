import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <img className="w-50" src="/brundage.jpg" alt=""></img>
            <h1>Clients</h1>
            <div className="row">
            </div>

            <table className="m-auto table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id
                            <form className="form-inline ml-2 d-inline">
                                <input className="form-control w-1" type="search" placeholder="Search(Integer)" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </th>
                        <th>First Name
                            <form className="form-inline ml-2 d-inline">
                                <input className="form-control w-1" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </th>
                        <th>Last Name
                            <form className="form-inline ml-2 d-inline">
                                <input className="form-control w-1" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </th>
                        <th>Email
                            <form className="form-inline ml-2 d-inline">
                                <input className="form-control w-1" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </th>
                        <th>Ip Address
                            <form className="form-inline ml-2 d-inline">
                                <input className="form-control w-1" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>First</td>
                        <td>Last</td>
                        <td>Email</td>
                        <td>Ip Address</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
