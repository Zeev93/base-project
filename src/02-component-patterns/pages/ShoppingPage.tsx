import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";

import '../styles/custom-styles.css'
import { products } from "../data/products";

const product = products[0]


export default function ShoppingPage({}) {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
                <ProductCard 
                    product={ product } 
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        // maxCount: 15
                    }}
                >
                    {
                    ({ reset, increaseBy, maxCount, count, isMaxCountReached, ...args }) => (
                       <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold text-16 upperCase" />
                            <ProductButtons className="custom-buttons"/>
                            
                            <button onClick={reset}> Reset </button>

                            <button className={`${ isMaxCountReached  ? 'disabled' : '' }`} onClick={ () => increaseBy(2) }> + 2 </button>
                            <button className={`${ count === 2 || count < 2? 'disabled' : '' }`} onClick={ () => increaseBy(-2) }> - 2 </button>

                            { JSON.stringify(args, null, 3)}
                        </>
                    ) }
                </ProductCard>
        </div>  
    )
};
