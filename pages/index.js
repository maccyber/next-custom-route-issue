import Link from 'next/link'

export default () => (
  <div>
    <h1>Welcome to our Next.js website!</h1>
    <p>View our <Link href='/product?name=espresso' as='/product/espresso'><a>espresso product</a></Link>!</p>
  </div>
)
