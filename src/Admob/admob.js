import * as React from "react";
import {
    Datagrid,
    List,
    Create,
    Edit,
    SimpleForm,
    TextField,
    TextInput,
    EditButton,
    DeleteButton,
} from "react-admin";
const postFilters = [
    <TextInput label="Search" source="adMobType" alwaysOn />,
];
export const AdmobList = (props) => (
    <List filters={postFilters} {...props}>
        <Datagrid>
            <TextField source="adMobType"/>
            <TextField source="id"/>
            <EditButton label=""/>
            <DeleteButton label="" redirect={true}/>
        </Datagrid>
    </List>
);

export const AdmobCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="adMobType"/>
            <TextInput source="id"/>
        </SimpleForm>
    </Create>
);

export const AdmobEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="adMobType"/>
            <TextInput source="id"/>
        </SimpleForm>
    </Edit>
);