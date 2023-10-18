import React, {useState,useEffect} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

function Users() {

    const [users, setUserList] = useState([])

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async() => {
        try{
            const response = await axios.get('http://localhost:4000/users');
            if(response){
                setUserList(response.data);
            }
        }
        catch(e){

        }
    }

    const actionsTemplate = (rowDate) => {
        return (
            <button className="btn btn-primary">

            </button>
        )
    }

  return (
    
    <div className="users-page">
        <div className="container">
            <h1>Welcome to CRUD App</h1>
            <h3>Users Data</h3>
            <div className="user-list">
                <DataTable value={users}>
                    <Column field="name" header="Name"></Column>
                    <Column field="username" header="Username"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="phone" header="Phone Number"></Column>
                    <Column field="website" header="Website"></Column>
                    <Column header="Actions" body={actionsTemplate}></Column>
                </DataTable>
            </div>
                
        </div>
        
    </div>
  )
}

export default Users