const products = [
  {
    id: 1,
    name: "Klosterengen",
    href: "#",
    price: "$48",
    imageSrc: "src/assets/house1.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Klosterengen",
    href: "#",
    price: "$35",
    imageSrc: "src/assets/house1.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Klosterengen",
    href: "#",
    price: "$89",
    imageSrc: "src/assets/house1.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Klosterengen",
    href: "#",
    price: "$35",
    imageSrc: "src/assets/house1.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const Gallery = () => {
  return (
    <>
      <div className="mx-auto py-16 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900 pb-4">
                  {product.price}
                </p>
                <div className="pt-4 border-t border-grey">info</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button className="p-4 bg-accent rounded-sm text-white mx-auto block">
        Se alle boliger
      </button>
    </>
  );
};

export default Gallery;
