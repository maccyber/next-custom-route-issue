## Describe bug

I'm having troubles with custom routes in next.js when running through `now dev`

I have defined a custom route in `now.json`

```json
  "routes": [
    { "src": "/product/(?<name>[^/]+)", "dest": "/product?name=$name" }
  ]
```

In `pages/product.js` `query.name` is passed from `getInitialProps`

```js
Product.getInitialProps = async ({ query }) => {
  console.log(query.name || 'NOT FOUND') // returns "NOT FOUND" when accessing
                                         // http://localhost:3000/product/test
  return { name: query.name }
}
```

## To Reproduce

```
git clone https://github.com/maccyber/next-custom-route-issue
npm i
now dev -d
open http://localhost:3000/product/test
```

