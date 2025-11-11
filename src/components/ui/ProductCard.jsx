export default function ProductCard({
  image,
  title,
  price,
  description,
  onBuy,
  disabled = false,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-center h-32 bg-linear-to-br from-amber-100 to-amber-200 text-6xl">
        {image}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-amber-900 mb-1">{title}</h3>
        <p className="text-amber-700 font-semibold mb-2">{price} Moedas</p>
        <p className="text-sm text-amber-800 mb-4 line-clamp-2">
          {description}
        </p>
        <button
          onClick={onBuy}
          disabled={disabled}
          className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors duration-200"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
