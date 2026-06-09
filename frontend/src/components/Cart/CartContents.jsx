import React from 'react';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 15,
            image: "/image/man.jpg"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            price: 25,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
        },
    ];

    return ( 
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-4 border-b'>
                    <div className='flex items-start gap-4'>
                        {/* Image element */}
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-20 h-20 object-cover rounded"
                        />
                        {/* Product details text */}
                        <div>
                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500">Size: {product.size} | Color: {product.color}</p>
                            <p className="text-sm font-semibold mt-1">${product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;