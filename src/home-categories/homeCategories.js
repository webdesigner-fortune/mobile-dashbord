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
    <TextInput label="Search" source="title" alwaysOn />,
];
export const homeCategoriesList = props => {
    return(
    <List filters={postFilters} {...props}>
        <Datagrid >
            <TextField source="categoryType"/>
            <TextField source="contentCount"/>
            <TextField source="rank"/>
            <TextField source="showTitle"/>
            <TextField source="title"/>
            <TextField source="visible"/>
            <MyEditButton  label="Edit"/>
            <DeleteButton label="" redirect={true}/>
        </Datagrid>
    </List>
);}

export const homeCategoriesCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="categoryType"/>
            <TextInput source="contentCount"/>
            <TextInput source="rank"/>
            <SelectInput source="showTitle" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
            <TextInput source="title"/>
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

export const homeCategoriesEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="categoryType"/>
            <TextInput source="contentCount"/>
            <TextInput source="rank"/>
            <SelectInput source="showTitle" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
            <TextInput source="title"/>
            <SelectInput source="visible" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
        </SimpleForm>
    </Edit>
);