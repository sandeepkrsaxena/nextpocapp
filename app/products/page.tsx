import ProductCard from "@/components/ProductCard";

const Products = async () => {
    const response = await fetch(`${process.env.BASE_URL}/products`);
    if(!response.ok){
        throw new Error('something went wrong.')
    }
    const allProducts = await response.json();
    return (<>
       <ProductCard allProducts={allProducts.products}/>
    </>)
}
export default Products;