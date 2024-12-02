export default function Home() {
  return (
    <>
    <div className="max-w-screen-xl py-4 mx-auto">
    <h1 className="text-2xl font-bold">Using Next.js version 15.0.3:</h1>
    <ul className="mt-4">
      <li className="mb-3">
      This application includes the following routes: home(root), /products, /products/1, /server, and /add_to_cart.
      </li>
      <li className="mb-3">
      For product listing, I am using a fake dummy API - https://dummyjson.com/products/ to fetch product items. When a user clicks on a product tile, they are redirected 
      to the product details page based on the product ID.
      </li>
      <li className="mb-3">
      For the "Add to Cart" functionality, I am storing products in localStorage and displaying cart products on the /add_to_cart page. A confirmation modal appears when 
      a product is successfully added to the cart.
      </li>
      <li className="mb-3">
      A common layout for the header component is used in layout.jsx.
      </li>
      <li className="mb-3">
      The application is using Tailwind CSS for the default layout.
      </li>
      <li>On the /server page, I am using React Suspense fallback to display a loading state while fetching user data.</li>
      <li className="mb-3">
      The .env file stores the fake API URLs.
      </li>
      <li className="mb-3">
      I have used the Image component from Next.js.
      </li>
      <li className="mb-3">
        The third-party image URL is configured in next.config.js.
      </li>
    </ul>
    <br/>
    <br/>
    <h2 className="text-1xl font-bold">Behavior of next.js version 15.0.3 </h2>
    <ul className="mt-4">
      <li className="mb-3">getServerSideProps and getStaticProps are no longer supported in version 13 or above because these methods only work with the pages Router.</li>
      <li className="mb-3">Event binding cannot be used in server components. To use events, you need to convert the component to a client component by declaring 'use client' at the top.</li>
      <li className="mb-3">In useRouter, the query object does not exist as expected.</li>
      <li className="mb-3">Tailwind CSS modal popup's default hide and show functionality does not work. You need to implement manual functionality for this.</li>
      <li className="mb-3">In version 15.0.3, the App Router is used instead of the Pages Router, and the framework defaults to recognizing page.jsx as the file for rendering.</li>
    </ul>
</div>
    </>
  );
}
