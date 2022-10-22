import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [clients, setClients] = useState([]);

    axios.defaults.baseURL = "http://localhost:7008/api";

    async function getAllClients() {
        setClients([]);
        try {
            const response = await axios.get(`/GetAllClients`);
            setClients(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getClientById() {
        setClients([]);
        let num = document.getElementsByClassName("id form-control")[0].value;
        try {
            const response = await axios.get(`/GetClientById?id=${num}`);
            setClients(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getClientsByFirstName() {
        setClients([]);
        let firstName = document.getElementsByClassName("fn form-control")[0].value;
        try {
            const response = await axios.get(`/GetClientsByFirstName?first_name=${firstName}`);
            setClients(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getClientsByLastName() {
        setClients([]);
        let lastName = document.getElementsByClassName("ln form-control")[0].value;
        try {
            const response = await axios.get(`/GetClientsByLastName?last_name=${lastName}`);
            setClients(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getClientsByEmail() {
        setClients([]);
        let email = document.getElementsByClassName("em form-control")[0].value;
        try {
            const response = await axios.get(`/GetClientsByEmail?email=${email}`);
            setClients(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getClientsByIpAddress() {
        setClients([]);
        let ipAddress = document.getElementsByClassName("ip form-control")[0].value;
        try {
            const response = await axios.get(`/GetClientsByIpAddress?ip_address=${ipAddress}`);
            setClients(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllClients();
    },
        []
    )

    return (
        <div className="App" >
            <div content="width=device-width">
                <img className="w-50 d-block mx-auto" src="/brundage.jpg" data-at2x="/brundage.jpg" alt=""></img>
                    <h1 className="text-center">Clients</h1>
            </div>

            <table className="m-auto w-50 table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id
                            <form className="form-inline ml-2 m-auto">
                                <input className="id form-control" type="search" placeholder="Search(Integer)" />
                                <button className="btn btn-outline-success mx-auto d-block" type="submit" onClick={(e) => { e.preventDefault(); getClientById(); }}>Search</button>
                            </form>
                        </th>
                        <th>First Name
                            <form className="form-inline ml-2  m-auto">
                                <input className="fn form-control" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success mx-auto d-block" type="submit" onClick={(e) => { e.preventDefault(); getClientsByFirstName(); }}>Search</button>
                            </form>
                        </th>
                        <th>Last Name
                            <form className="form-inline ml-2 m-auto">
                                <input className="ln form-control" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success mx-auto d-block" type="submit" onClick={(e) => { e.preventDefault(); getClientsByLastName(); }} >Search</button>
                            </form>
                        </th>
                        <th>Email
                            <form className="">
                                <input className="em form-control" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success mx-auto d-block" type="submit" onClick={(e) => { e.preventDefault(); getClientsByEmail(); }}>Search</button>
                            </form>
                        </th>
                        <th>Ip Address
                            <form className="form-inline ml-2 m-auto">
                                <input className=" ip form-control" type="search" placeholder="Search(String)" />
                                <button className="btn btn-outline-success mx-auto d-block" type="submit" onClick={(e) => { e.preventDefault(); getClientsByIpAddress(); }}>Search</button>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length >= 1 ? clients.map(
                        client =>
                            <tr key={client.id + client.last_name}>
                                <td key={client.id}>{client.id}</td>
                                <td key={client.first_name}>{client.first_name}</td>
                                <td key={client.last_name}>{client.last_name}</td>
                                <td key={client.email}>{client.email}</td>
                                <td key={client.ip_address}>{client.ip_address}</td>
                            </tr >) :
                        <tr key={clients.id + clients.last_name}>
                            <td key={clients.id}>{clients.id}</td>
                            <td key={clients.first_name}>{clients.first_name}</td>
                            <td key={clients.last_name}>{clients.last_name}</td>
                            <td key={clients.email}>{clients.email}</td>
                            <td key={clients.ip_address}>{clients.ip_address}</td>
                        </tr >}
                </tbody>
            </table>
        </div>
    );
}

export default App;
