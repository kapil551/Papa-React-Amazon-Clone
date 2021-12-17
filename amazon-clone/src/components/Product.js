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
        
        <div className="border-2 border-yellow-600 flex flex-col m-5 bg-white p-10 z-30 relative">
            
            <p className="absolute top-2 right-2 text-xs italic text-gray-400"> {category} </p>

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

                            <StarIcon className="h-5 text-yellow-500"/>
                        )
                    })
                }
            </div>

            <p className="text-xs my-2 line-clamp-2"> {description} </p>

            <div className="mb-5">
                <Currency
                    quantity={price}
                    symbol="₹"
                />
            </div>

            {
                hasPrime && <div className="flex items-center space-x-2 -mt-5">
                    <img src="https://links.papareact.com/fdw" alt="" className="w-12"/>
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                </div>
            }

            {/* custom utility class called "customButton" */}
            <button className="mt-auto customButton"> Add to Cart </button>

        </div>
    )
}

export default Product;
