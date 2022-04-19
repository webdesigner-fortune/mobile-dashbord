import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
    FirebaseDataProvider,
    FirebaseAuthProvider,
} from "react-admin-firebase";


import { createMuiTheme } from '@material-ui/core/styles';
import CommentIcon from "@material-ui/icons/Comment";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import UserIcon from '@material-ui/icons/Group';
import { firebaseConfig as config } from './FIREBASE_CONFIG';
import { SubscriptionList, SubscriptionCreate, SubscriptionEdit } from "./Subscription/subscription";
import { AdmobList, AdmobCreate, AdmobEdit } from "./Admob/admob";
import { homeCategoriesList, homeCategoriesCreate, homeCategoriesEdit } from "./home-categories/homeCategories";
import { visibleCategoriesList, visibleCategoriesreate, visibleCategoriesEdit } from "./visible-categories/visibleCategories";
import { AdvertismentList, AdvertismentCreate, AdvertismentEdit } from "./advertisement/advertisement";

const options = {
    logging: true,
    persistence: 'session',
}

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4f3cc9',
        },
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#001064',
            contrastText: '#fff',
        },
        background: {
            default: '#fcfcfe',
        },
        type: 'light' ,
    },
    shape: {
        borderRadius: 1,
    },
    sidebar: {
        width: 200,
        backgroundColor:'black',
    },
    overrides: {
        RaMenuItemLink: {
            root: {
                borderLeft: '3px solid #fff',
            },
            active: {
                borderLeft: '3px solid #4f3cc9',
            },
        },
        MuiPaper: {
            elevation4: {
                boxShadow: 'none',
            },
            root: {
                border: '1px solid #e0e0e3',
                backgroundClip: 'padding-box',
            },
        },
        MuiDrawer:{
             root: {
                backgroundColor: '#ededed',
            },
            elevation1: {
                boxShadow: 'none',
            },
        },
        MuiButton: {
            contained: {
                backgroundColor: '#fff',
                color: '#4f3cc9',
                boxShadow: 'none',
            },
        },
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    // recreate a static ripple color
                    // use the currentColor to make it work both for outlined and contained buttons
                    // but to dim the background without dimming the text,
                    // put another element on top with a limited opacity
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'currentColor',
                    opacity: 0.3,
                    borderRadius: 'inherit',
                },
            },
        },
        MuiAppBar: {
            colorSecondary: {
                color: '#808080',
                backgroundColor: '#ededed',
            },
        },
        MuiLinearProgress: {
            colorPrimary: {
                backgroundColor: '#f5f5f5',
            },
            barColorPrimary: {
                backgroundColor: '#d7d7d7',
            },
        },
        MuiFilledInput: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            },
        },
        MuiSnackbarContent: {
            root: {
                border: 'none',
            },
        },
    },
    props: {
        MuiButtonBase: {
            // disable ripple for perf reasons
            disableRipple: true,
        },
    },
});

class App extends React.Component {
    render() {
        return ( <Admin 
            theme={theme}
            dataProvider = { dataProvider } 
            authProvider={authProvider}>

            <Resource name = "subscriptions"
            icon={UserIcon}
            list = { SubscriptionList }
            create = { SubscriptionCreate }
            edit = { SubscriptionEdit }/>
            <Resource name = "ads"
            list = { AdvertismentList }
            create = { AdvertismentCreate }
            edit = { AdvertismentEdit }/>
          
            <Resource name = "home-categories" 
            icon = { CommentIcon }
            list = { homeCategoriesList }
            create = { homeCategoriesCreate }
            edit = { homeCategoriesEdit }/>
            <Resource name = "ad-mobs"
            list = { AdmobList }
            create = { AdmobCreate }
            edit = { AdmobEdit }/>
            <Resource name = "visible-categories"
            list = { visibleCategoriesList }
            create = { visibleCategoriesreate }
            edit = { visibleCategoriesEdit }/>


            </Admin>
        );
    }
}

export default App;