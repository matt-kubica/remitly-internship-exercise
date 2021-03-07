# Simple Currency Converter

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Launching using Docker

Easiest and recommended way to fire up **Simple Currency Converter** is launching it with Docker. Run commands in the project directory:

### `docker build -t <image_name> .`

Builds an app with the `nginx` production server, creates image that can be launch easily.

### `docker run -d -it -p 80:80/tcp --name <container_name> <image_name>:latest`

Launches an app using created image. In this case, app will be available on port `80`. Logs are not displayed since it is detached mode, to see logs:

### `docker logs -f <container_name>`




