// Header Component

// import Image from Next.js
import Image from "next/image";

function Header() {
    return (

        <header>

            {/* Top Section of header */}
            <div>

               <div>
                   {/* Img */}
                   <Image 
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}      
                    />

               </div>

            </div>

            {/* Bottom Section of Header */}
            <div>

            </div>

        </header>
    )
}

export default Header;

