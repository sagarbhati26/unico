import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart, increaseCartItem, decreaseCartItem, cartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  // Determine quantity in cart for this specific product and size
  const quantity = cartItems[productId]?.[selectedSize] || 0;

  return productData ? (
    <div className="border-t pt-8 px-6 sm:px-16 bg-gray-50 transition-opacity ease-in duration-200">
      <div className="flex flex-col sm:flex-row gap-16">
        <ProductImageGallery
          images={productData.image}
          selectedImage={image}
          onSelectImage={setImage}
        />
        <ProductInfo
          productData={productData}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          addToCart={() => addToCart(productId, selectedSize)}
          increaseCartItem={() => increaseCartItem(productId, selectedSize)}
          decreaseCartItem={() => decreaseCartItem(productId, selectedSize)}
          quantity={quantity}
        />
      </div>
      <ProductDetails description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias sapiente placeat dolorem consectetur voluptates modi provident tempore, nobis tempora amet enim voluptas suscipit nulla, odit inventore labore velit hic?" />
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="text-center py-20 text-gray-500">Loading...</div>
  );
};

const ProductImageGallery = ({ images, selectedImage, onSelectImage }) => (
  <div className="flex-1 flex flex-col items-center gap-4">
    <div className="flex gap-3 mb-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product thumbnail ${index + 1}`}
          className={`w-16 h-16 object-cover cursor-pointer rounded-lg border-2 transition-transform hover:scale-110 ${
            img === selectedImage ? "border-green-500" : "border-gray-300"
          }`}
          onClick={() => onSelectImage(img)}
          aria-label={`Select image ${index + 1}`}
        />
      ))}
    </div>
    <div className="w-full flex items-center justify-center">
      <img
        className="w-full max-w-md object-cover border border-green-500 shadow-lg rounded-lg"
        src={selectedImage}
        alt="Selected Product"
      />
    </div>
  </div>
);

const ProductInfo = ({ productData, selectedSize, onSelectSize, addToCart, increaseCartItem, decreaseCartItem, quantity }) => (
  <div className="flex-1 text-gray-800">
    <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
    <div className="flex items-center gap-1 mb-6">
      {Array(5)
        .fill()
        .map((_, index) => (
          <img key={index} src={assets.star_icon} alt="star" className="w-5 h-5 text-yellow-500" />
        ))}
    </div>
    <p className="text-2xl font-semibold text-green-600 mb-4">${productData.price}</p>
    <p className="text-gray-600 leading-relaxed mb-6">{productData.description}</p>

    {/* Size Selection */}
    <div className="mb-8">
      <p className="font-medium text-gray-700 mb-3">Select Size</p>
      <div className="flex gap-3">
        {productData.sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
              selectedSize === size
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-800 border-gray-300 hover:border-green-500"
            }`}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Add to Cart / Counter Buttons */}
    {quantity > 0 ? (
      <div className="flex items-center gap-3">
        <button
          onClick={decreaseCartItem}
          className="px-4 py-2 bg-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-400 transition"
        >
          -
        </button>
        <span className="font-semibold text-xl">{quantity}</span>
        <button
          onClick={increaseCartItem}
          className="px-4 py-2 bg-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-400 transition"
        >
          +
        </button>
      </div>
    ) : (
      <button
        onClick={addToCart}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg mb-6"
      >
        Add to Cart
      </button>
    )}

    <div className="text-sm text-gray-500 mt-4 space-y-2">
      <p>100% Original</p>
      <p>Cash on Delivery Available</p>
      <p>Easy Returns and Exchanges</p>
    </div>
  </div>
);

const ProductDetails = ({ description }) => (
  <div className="mt-20">
    <div className="flex border-b">
      <p className="border-r px-5 py-5 text-sm cursor-pointer">Description</p>
      <p className="px-5 py-5 text-sm cursor-pointer">Reviews (122)</p>
    </div>
    <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
      <p>{description}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default Product;
