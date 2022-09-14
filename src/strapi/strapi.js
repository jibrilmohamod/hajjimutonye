import Strapi from "strapi-sdk-js"


// OR with options
const strapi = new Strapi({
 url: "https://hajibck-sim2u.ondigitalocean.app",
 prefix: "/api",
 store: {
  key: "strapi_jwt",
  useLocalStorage: false,
  cookieOptions: { path: "/" },
 },
 axiosOptions: {},
})


export default strapi