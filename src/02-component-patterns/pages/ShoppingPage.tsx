import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components";



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
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title/>
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle title="adasdsa" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
};
