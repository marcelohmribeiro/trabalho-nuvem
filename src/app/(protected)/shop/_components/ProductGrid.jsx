"use client";

import { useState } from "react";
import { useGame } from "@/hooks/useGame";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    id: 1,
    image: "🖼️",
    title: "Coffee Machine Upgrade",
    price: 500,
    bonusCoffee: 1,
    bonusCoins: 2,
    description:
      "Máquina de café profissional. +1 café e +2 moedas por clique.",
  },
  {
    id: 2,
    image: "🖼️",
    title: "Expert Barista",
    price: 1000,
    bonusCoffee: 2,
    bonusCoins: 4,
    description:
      "Barista experiente para sua equipe. +2 cafés e +4 moedas por clique.",
  },
  {
    id: 3,
    image: "☕",
    title: "Premium Coffee Beans",
    price: 300,
    bonusCoffee: 1,
    bonusCoins: 1,
    description:
      "Grãos de café arábica premium. +1 café e +1 moeda por clique.",
  },
  {
    id: 4,
    image: "🏪",
    title: "Coffee Shop Expansion",
    price: 2500,
    bonusCoffee: 5,
    bonusCoins: 10,
    description:
      "Expanda sua cafeteria com mais equipamentos. +5 cafés e +10 moedas por clique.",
  },
];

export default function ProductGrid() {
  const { gameState, buyProduct } = useGame();
  const [message, setMessage] = useState("");

  const handleBuy = async (product) => {
    const result = await buyProduct(product);

    if (result.success) {
      setMessage(`Você comprou ${product.title}!`);
    } else {
      setMessage(result.error);
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      {/* Mensagem */}
      {message && (
        <div
          className={`p-4 rounded-lg text-center font-semibold ${
            message.includes("insuficientes")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            onBuy={() => handleBuy(product)}
            disabled={gameState.coins < product.price}
          />
        ))}
      </div>
    </>
  );
}
