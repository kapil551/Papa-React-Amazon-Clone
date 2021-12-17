import Product from "./Product";

function ProductFeed({ fetchedProducts }) {
    return (

        <div>
            {
                    // access information using destructuring
                fetchedProducts.map(({ id, title, price, description, category, image }) => {

                    return (
                        <Product 
                            key={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    )
                })
            }

        </div>
    )
}

export default ProductFeed;
