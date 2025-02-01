import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log(result);
  } catch (error) {
    if (error.message.includes("Request aborted")) {
      console.log('User cancelled the request.');
      // Handle cancellation gracefully, e.g., display a message to the user
    } else {
      console.error('An unexpected error occurred:', error);
      // Handle other errors
    }
  }
}
//This handles the cancellation more gracefully by catching the specific "Request aborted" error and logging an appropriate message.  Other errors are also caught and handled separately.