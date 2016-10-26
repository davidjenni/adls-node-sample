import {interactiveLogin, InteractiveLoginOptions} from 'ms-rest-azure';
import {} from "azure-arm-datalake-store";

let options: InteractiveLoginOptions = {
};

let accountName = 'dprepdemostore';
interactiveLogin(options, (err, credentials) => {
});