import {interactiveLogin, InteractiveLoginOptions, UserTokenCredentials} from 'ms-rest-azure';
import {TokenCredentials} from 'ms-rest';
// import {DataLakeStoreFileSystemClient} from 'azure-arm-datalake-store';
let adls = require('azure-arm-datalake-store');

let options: InteractiveLoginOptions = {
};

let accountName = 'dprepdemostore';
interactiveLogin(options, (err, credentials) => {
    let fileSystemClient = new adls.DataLakeStoreFileSystemClient(credentials);
    fileSystemClient.fileSystem.listFileStatus(accountName, '/opendata/swiss/SBB', (error, result) => {
        if (error) {
            console.log(err);
        }
        // sigh, the plural of status is stati...
        result.fileStatuses.fileStatus.forEach((file) => {
            console.log(`type: ${file.type}, name: ${file.pathSuffix}`);
        });
    });
});