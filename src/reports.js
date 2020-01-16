import React from 'react';
import { SimpleList, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const ReportList = (props) => (
    <List {...props}>
          <Datagrid rowClick="edit">
            <TextField source="id" />
       {/*   <ReferenceField label="User" source="user" reference="users"/> */}
            <TextField source="user:" />
            <TextField source="pH:" />
            <TextField source="Hardness:" />
            <TextField source="TDS:" />
            <TextField source="Company Address:" />
            <EditButton />
        </Datagrid>
    </List>
);

//const ReportTitle = ({ record }) => {
  //  return <span>Report {record ? `"${record.title}"` : ''}</span>;
//};

export const ReportEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
           {/* <DisabledInput source="id" />*/}
           <TextField source="id" />
       {/*    <ReferenceInput label="User" source="username" reference="users"> 
                <SelectInput optionText="name" />
</ReferenceInput> */}
             <TextField source="user:" />
            <TextInput source="pH:" />
            <TextInput source="Hardness:" />
            <TextInput source="TDS:" />
            <TextInput source="Company Address:" />
           
        </SimpleForm>
    </Edit>
);

export const ReportCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextField source="id" />
       {/*      <ReferenceInput label="User" source="username" reference="users">
                <SelectInput optionText="name" />
</ReferenceInput> */}
            <TextField source="user:" />
             <TextInput source="pH:" />
            <TextInput source="Hardness:" />
            <TextInput source="TDS:" />
            <TextInput source="Company Address:" />
        {/*    <LongTextInput source="body" />*/}
        </SimpleForm>
    </Create>
);