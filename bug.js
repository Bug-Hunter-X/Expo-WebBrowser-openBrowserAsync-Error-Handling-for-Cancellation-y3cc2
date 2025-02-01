import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log(result);
}

// This will cause an error if the user cancels the action before the page is fully loaded
//  The error message will be:  "Error: Request aborted"