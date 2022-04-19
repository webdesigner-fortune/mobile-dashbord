import * as React from "react";
import {
    Datagrid,
    List,
    Create,
    Edit,
    SimpleForm,
    TextField,
    SelectInput,
    TextInput,
    PasswordInput,
    EditButton,
    DeleteButton,
    Show,
    ReferenceInput,
    TabbedShowLayout,
    Tab,
    ShowButton,
    SimpleShowLayout,
    BooleanField
} from "react-admin";

export const SubscriptionList = (props) => (
    <List filters={postFilters} {...props}>
        <Datagrid>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <TextField source="email"/>
            <TextField source="username"/>
            <TextField source="active"/>
            <ShowButton label=""/>
            <EditButton label=""/>
            <DeleteButton label="" redirect={true}/>
        </Datagrid>
    </List>
);
const postFilters = [
    <TextInput label="Search" source="firstName" alwaysOn />,
    <TextInput label="Last Name" source="lastName" />,
    <TextInput label="Email" source="email" />,
    <TextInput label="Username" source="username" />,
];

export const SubscriptionCreate = (props) => (
    <Create {...props} transform={transform}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email"/>
            <TextInput source="username"/>
            <SelectInput source="active" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
            <PasswordInput source="password"/>
        </SimpleForm>
    </Create>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.firstName}"` : ''}</span>;
};
  const transform = async data => {
    let storeProducts =   await fetch(`https://addisfortune.news/mobile_api/wp_encrypt_password.php?password=${data.password}`).then(res => res.json()).then((responseJson) => responseJson.encrypted);
    var hashed_pass=storeProducts
    console.log(hashed_pass)
    return {
      ...data,
      password: hashed_pass
    }
  };
export const SubscriptionEdit = (props) => (
    <Edit title={<PostTitle />} {...props} transform={transform}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email"/>
            <TextInput source="username"/>
            <SelectInput source="active" choices={[
                            {id: 'true', name: 'True'},
                            {id: 'false', name: 'False'},
                        ]}/>
            <PasswordInput source="password"/>
        </SimpleForm>
    </Edit>
);
export const SubscriptionShow = (props) => (
    <Show {...props}>
            <TabbedShowLayout>
            <Tab label="Summary">
            <BooleanField  label="Active" source="active"/>
            <TextField source="firstName"/>
            <TextField source="lastNamem"/>
            <TextField source="email"/>
            <TextField source="username"/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);