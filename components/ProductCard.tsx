import { Product } from '@/types/product_module';
import Image from 'next/image';
import Link from 'next/link'
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ allProducts }: { allProducts: Product[] }) => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold my-3">Trending Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
                    {allProducts.map((product) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href={`/products/${product.id}`}>
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                width={300}
                                height={400}
                                layout="responsive"
                                loading="lazy"
                            />
                            </Link>
                            <div className="px-5 pb-5">
                                <Link href={`/products/${product.id}`}>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                                </Link>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{product.rating}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs.{product.price}</span>
                                    <AddToCartButton singleProduct={product} />
                                    {/* <Link href={`/products/${product.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</Link> */}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default ProductCard;