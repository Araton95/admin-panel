import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  Create,
  EditButton
} from 'react-admin';


export const UserList = props => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="type" label="Type" />
        <TextField source="company.name" label="Company" />
        {/*<TextField source="name" />*/}
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" label="Address" />
        <TextField source="phone" />
        <UrlField source="website" />
        <EditButton />
               
      </Datagrid>
    </List>
  );

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
     {/* <DisabledInput source="id" /> */}
     <TextField source="id" />
     <TextField source="type" label="Type" />
        <TextField source="company.name" label="Company" />
{/*<TextField source="name" />*/}
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
          </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
   
   
    <Create {...props}>
      <SimpleForm>
      <TextField source="id" />
      <TextField source="type" label="Type" />
        <TextField source="company.name" label="Company" />
     {/*<TextField source="name" />*/}
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <TextInput source="website" />
        
      </SimpleForm>
    </Create>
  );