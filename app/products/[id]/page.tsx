import React from 'react';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import { Product } from '@/types/product_module';

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    // Ensure params is awaited
    const { id } = await params;
  
    let singleProduct: Product | null = null;
  
    try {
      const response = await fetch(`${process.env.BASE_URL}/products/${id}`, {
        next: { revalidate: 10 }, // Optional for ISR
      });
  
      if (!response.ok) {
        throw new Error("Error fetching product");
      }
  
      singleProduct = await response.json();
    } catch (err: any) {
      console.error("Error fetching product:", err.message);
      throw new Error("Error fetching product");
    }
  
    if (!singleProduct) {
      return (
        <div>
          <h1>Product Not Found</h1>
        </div>
      );
    }
  
    return (
      <>
        <section className="py-8 bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <h1 className="text-3xl font-bold my-3">Product Details</h1>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <Image
                  src={singleProduct.images[0]}
                  alt={singleProduct.title}
                  width={300}
                  height={400}
                  layout="responsive"
                  className='w-full'
                  loading="lazy" 
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1
                  className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                >
                  {singleProduct.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p
                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                  >
                    Rs.{singleProduct.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <p
                      className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                    >
                    {singleProduct.rating}
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <AddToCartButton singleProduct={singleProduct}/>
                </div>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                {singleProduct.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default ProductDetails;