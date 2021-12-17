import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ fetchProductsFromFakeStoreAPI }) {
  return (
    
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="border-2 border-purple-600 max-w-screen-2xl mx-auto">

        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed  fetchedProducts = {fetchProductsFromFakeStoreAPI}/>

      </main>
      
    </div>
  );
}

/*
  server side rendering in next.js:

    - https://nextjs.org/docs/basic-features/data-fetching

    - https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
*/
export async function getServerSideProps(context) {

  // https://fakestoreapi.com/
  const fetchProductsFromFakeStoreAPI = await fetch("https://fakestoreapi.com/products").then( (res) => res.json() );

  // console.log(fetchProductsFromFakeStoreAPI);

  return {
    props: {
      fetchProductsFromFakeStoreAPI: fetchProductsFromFakeStoreAPI
    }, // will be passed to the page component as props
  }
}
