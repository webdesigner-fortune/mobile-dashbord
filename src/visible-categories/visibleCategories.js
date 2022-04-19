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
    SelectInput,
    DeleteButton,
} from "react-admin";
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
    <TextInput label="Search" source="name" alwaysOn />,
    <TextInput label="slug" source="slug" />,
];
export const visibleCategoriesList = props => {
    return(
    <List filters={postFilters} {...props}>
        <Datagrid >
            <TextField source="group"/>
            <TextField source="link"/>
            <TextField source="name"/>
            <TextField source="rank"/>
            <TextField source="slug"/>
            <TextField source="visible"/>
            <MyEditButton  label="Edit"/>
            <DeleteButton label="" redirect={true}/>
        </Datagrid>
    </List>
);}

export const visibleCategoriesreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="group"/>
            <TextInput source="link"/>
            <TextInput source="name"/>
            <TextInput source="rank" />
            <TextInput source="slug"/>
            <SelectInput source="visible" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
        </SimpleForm>
    </Create>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.clientName}"` : ''}</span>;
};

export const visibleCategoriesEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="group"/>
            <TextInput source="link"/>
            <TextInput source="name"/>
            <DateInput source="rank" />
            <TextInput source="slug"/>
            <SelectInput source="visible" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
        </SimpleForm>
    </Edit>
);