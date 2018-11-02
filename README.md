example-fh
================
Example Vue SPA e-commerce Site, started with vue-cli 3, using vue-router and vuex.  Using the Pilon REST APIs for product catalog, customer auth, cart and checkout.

# Get the project up and running locally

## Clone the repo
```bash
git clone git@github.com:pilon-io/example-fh.git
cd example-fh
```

## Run npm install
```bash
npm install
```

## Enter your Pilon Environment credential

Make sure your have registered an environment on the Pilon platform.  You may also want to have setup some products in your catalog at this point.

Open `src/config.js` in the project and enter your environment key:
```javascript
...

export default {
  pilonApiBaseUrl,
  environmentId: 'YOUR_ENVIRONMENT_KEY_HERE',
  pilonApi: axiosInstance,
};
```

## Run the local dev server
```bash
npm run serve
```

## Open the local site in your browser

Open `http://localhost:8080/`

And there you go:
![fh homepage](https://raw.githubusercontent.com/pilon-io/example-fh/master/docs/fh_homepage_image.png)
