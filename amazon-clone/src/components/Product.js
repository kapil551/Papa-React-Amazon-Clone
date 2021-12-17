import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {

    // useState
    const [rating] = useState(

        // Return a random number between MIN_RATING and MAX_RATING
        // https://www.w3schools.com/jsref/jsref_random.asp
        Math.floor((Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    );

    // useState
    const [hasPrime] = useState(
        Math.random() < 0.5
    );
    
    return (
        
        <div className=" border-2 border-yellow-600">
            
            <p> {category} </p>

            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            <h4> {title} </h4>

            {/* Showing the star ratings */}
            <div className="flex">
                {
                    // create a new array of length equal to value of rating and fill it with empty values and then map over it
                    Array(rating).fill().map((val, idx) => {

                        return (

                            <StarIcon className="h-5"/>
                        )
                    })
                }
            </div>

            <p> {description} </p>

            <div>
                <Currency
                    quantity={price}
                    symbol="₹"
                />
            </div>

            {
                hasPrime && <div>
                    <img src="https://links.papareact.com/fdw" alt="" />
                    <p>Free Next-day Delivery</p>
                </div>
            }

            <button> Add to Cart </button>

        </div>
    )
}

export default Product;
