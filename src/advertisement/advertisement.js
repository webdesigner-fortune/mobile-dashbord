import * as React from "react";
import {
    Datagrid,
    List,
    Create,
    Edit,
    SimpleForm,
    TextField,
    TextInput,
    DateInput,
    EditButton,
    ImageField,
    ImageInput,
    DeleteButton,
} from "react-admin";
import { ArrayInput, SimpleFormIterator } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        backgroundColor: '#d1d1d1',
    },
    headerCell: {
        backgroundColor: '#cb3f2f',
    },
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
});
const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};
const postFilters = [
    <TextInput label="Search" source="clientName" alwaysOn />,
    <TextInput label="ad Type" source="adType" />,
];
export const AdvertismentList = props => {
    const classes = useStyles();
    return(
    <List filters={postFilters} {...props}>
        <Datagrid >
            <TextField source="clientName"/>
            <TextField source="destination"/>
            <TextField source="adType"/>
            <TextField source="publishedDate"/>
            <TextField source="interval"/>
            <TextField source="expiryDate"/>
            <TextField source="active"/>
            <MyEditButton  label="Edit"/>
            <DeleteButton label="" redirect={true}/>
        </Datagrid>
    </List>
);}

export const AdvertismentCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="clientName"/>
            <TextInput source="destination"/>
            <TextInput source="adType"/>
            <DateInput source="publishedDate" />
            <TextInput source="interval"/>
            <DateInput source="expiryDate" />
            <TextInput source="resource"/>
            <ArrayInput source="resources">
              <SimpleFormIterator>
              <TextInput source="link" />
             </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
    </Create>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.clientName}"` : ''}</span>;
};

export const AdvertismentEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="clientName"/>
            <TextInput source="destination"/>
            <TextInput source="adType"/>
            <DateInput source="publishedDate" />
            <TextInput source="interval"/>
            <DateInput source="expiryDate" />
            <TextInput source="resource"/>
             <ArrayInput source="resources">
              <SimpleFormIterator>
              <TextInput />
             </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
    </Edit>
);