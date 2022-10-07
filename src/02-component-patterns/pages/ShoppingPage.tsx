import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";
import '../styles/custom-styles.css'


const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

export default function ShoppingPage({}) {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-bold text-16 upperCase" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ product } 
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold text-16 upperCase" />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>


                <ProductCard 
                    product={ product } 
                    style={{ 'background': '#70d1f8' }}
                >
                    <ProductImage style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, .5)'}}/>
                    <ProductTitle style={{ fontWeight: 'bold'}}/>
                    <ProductButtons style={{display : 'flex', justifyContent: 'end'}}/>
                </ProductCard>
            </div>
        </div>
    )
};
