import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";

import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../data/products";


export default function ShoppingPage({}) {

   const {shoppingCart, handleProductChange} = useShoppingCart()

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( (product, i) => (
                        <ProductCard 
                        product={ product } 
                        className="bg-dark text-white"
                        key={i}
                        onChange={ handleProductChange }
                        value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold text-16 upperCase" />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart"> 
               {
                Object.entries(shoppingCart).map(( [key, product] ) => (
                    <ProductCard 
                    key={ key }
                    product={ product } 
                    className="bg-dark text-white"
                    style={{ width: '100px' }}
                    onChange={ handleProductChange }
                    value={ product.count }
                    >
                        <ProductImage className="custom-image"/>
                        <ProductButtons 
                            className="custom-buttons" 
                            style={{ display: 'flex', justifyContent: 'center'}}
                        />
                    </ProductCard>
                ))
               }
            </div>
        </div>
    )
};
