# Expo WebBrowser openBrowserAsync Cancellation Error

This repository demonstrates a bug in Expo's `WebBrowser.openBrowserAsync` function where it throws an error if the user cancels the browser request before the page fully loads.  The issue is primarily in how it handles cancellation events and its resulting error reporting.  This can lead to unexpected crashes in applications that don't explicitly handle this scenario. 

The solution involves implementing better error handling to gracefully manage cancelled requests.