let APIURL = "";

switch (window.location.hostname) {
    //this is the local host naem of you react app
    case 'localhost' || '127.0.0.1':
    //this is the local host name of your API
        APIURL = 'http://localhost:4000';
        break;
    //this is the deployed react application
    case 'nwh-disc-golf-assistant-client.herokuapp.com':
        //this is the full url of your deployed API
        APIURL = "https://nwh-disc-golf-assistant.herokuapp.com"
}

export default APIURL