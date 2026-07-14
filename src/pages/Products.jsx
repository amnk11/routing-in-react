import React from "react";

const products = [
  {
    id: 1,
    title: "Gaming Laptop",
    price: "$999",
    description:
      "Powerful laptop for gaming, programming, and content creation.",
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: "$99",
    description:
      "RGB mechanical keyboard with smooth switches and premium build.",
  },
  {
    id: 3,
    title: "Wireless Mouse",
    price: "$49",
    description:
      "Ergonomic wireless mouse with long battery life.",
  },
  {
    id: 4,
    title: "27-inch Monitor",
    price: "$299",
    description:
      "High-resolution display perfect for coding and gaming.",
  },
  {
    id: 5,
    title: "Noise Cancelling Headphones",
    price: "$199",
    description:
      "Crystal clear sound with active noise cancellation.",
  },
  {
    id: 6,
    title: "USB-C Dock",
    price: "$79",
    description:
      "Expand your laptop with multiple high-speed ports.",
  },
];

const Products = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-5xl font-bold">
          Our <span className="text-amber-400">Products</span>
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-zinc-400">
          Explore our collection of modern tech products designed for
          developers, gamers, and creators.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10"
            >
              <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-zinc-800 text-5xl">
                📦
              </div>

              <h2 className="mb-2 text-xl font-semibold">
                {product.title}
              </h2>

              <p className="mb-4 text-sm leading-6 text-zinc-400">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-amber-400">
                  {product.price}
                </span>

                <button className="rounded-lg bg-amber-400 px-4 py-2 font-medium text-black transition hover:bg-amber-300 active:scale-95">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;