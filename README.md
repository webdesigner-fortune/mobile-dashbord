This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration
In the project directory, run 

### `yarn install`
and this will add all project dependencies. After installing all dependencies, you need to add the private Firebase connection file: `src/FIREBASE_CONFIG.js` with the following format from firebase:

```
export const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxx.xxxxxxxxxxx.xxx",
    databaseURL: "xxxxx://xxx.xxxxxxxxxx.xxx",
    projectId: "xxx",
    storageBucket: "xxx.xxxxxxx.xxx",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "x:xxxxxxxxxxxx:xxx:xxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "x-xxxxxxxxxx"
};
```

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


