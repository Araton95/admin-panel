import React,  { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import {ReportList, ReportEdit, ReportCreate } from './reports';
import {UserList, UserEdit, UserCreate } from './users';
//import {PostList, PostEdit, PostCreate } from './posts';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
//import jsonServerProvider from 'ra-data-json-server';

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/coursewarefactory/lab');
//const dataProvider = jsonServerProvider('http://localhost:3000');


class App extends Component {
    render() {
      return (
       


//const App = () => (
<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
{/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />*/}
<Resource name="reports" list={ReportList} edit={ReportEdit} create={ReportCreate} />
<Resource name="users"   list={UserList}   edit={UserEdit}   create={UserCreate} />

  </Admin>
       );
    }
}

export default App;
