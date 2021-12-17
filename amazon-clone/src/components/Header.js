import { ShoppingCartIcon } from "@heroicons/react/outline";
function Header() {
    return (
        <header className="border-2 border-green-500">

            {/* top nav */}
            <div className="border-2 border-blue-500">

                <div>
                    {/* logo image */}
                </div>

                {/* searchbar */}
                <div>
                    <input type="text" className="border-2 border-black"/>
                    {/* search icon */}
                </div>

                {/* Right section */}
                <div className="">

                    {/* account */}
                    {/* apply custom utilty class named "link" */}
                    <div className="link">
                        <p>Hello Kapil</p>
                        <p> Account & Lists</p>
                    </div>

                    {/*returns and orders*/}
                    {/* apply custom utilty class named "link" */}
                    <div className="link">
                        <p>Returns</p>
                        <p>Orders</p>
                    </div>

                    {/* cart basket icon*/}
                    {/* apply custom utilty class named "link" */}
                    <div className="border-2 border-red-600 link relative">

                        {/* adding a icon over the basket*/}
                        <span className="absolute top-0 left-7 h-4 w-4 bg-yellow-400 text-black rounded-full font-bold 
                                        flex items-center justify-center animate-pulse">
                            0
                        </span>
                        
                        {/* shopping cart icon */}
                        <ShoppingCartIcon className="h-10"/>
                        <p>Basket</p>

                    </div>

                </div>

            </div>


            {/* bottom nav */}
            <div className="border-2 border-pink-600 space-x-2 flex items-center">
                
                {/* apply custom utilty class named "link" */}
                <p className="link">
                    {/* menu icon */}
                    All
                </p>

                {/* apply custom utilty class named "link" */}
                <p className="link">
                    Prime Video
                </p>
                
                {/* apply custom utilty class named "link" */}
                <p className="link">
                    Today's Deals
                </p>

                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Electronics
                </p>
                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Food & Grocery
                </p>
                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Prime
                </p>
                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Buy Again
                </p>
                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Shopper Toolkit
                </p>
                {/* apply custom utilty class named "link" */}
                <p className="link hidden lg:inline-flex">
                    Health & Personal Care
                </p>

            </div>

        </header>
    )
}

export default Header
