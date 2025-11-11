"use client";

import { useState, useEffect } from "react";
import { rankingService } from "@/services/ranking";

export default function RankingContent() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    loadRanking();
  }, []);

  const loadRanking = async () => {
    setLoading(true);
    const result = await rankingService.fetchRanking(15);

    if (result.success) {
      setRanking(result.ranking);
    }

    const rankResult = await rankingService.getCurrentUserRank();
    if (rankResult.success) {
      setUserRank(rankResult.position);
    }

    setLoading(false);
  };

  const top3 = ranking.slice(0, 3);
  const rest = ranking.slice(3);

  if (loading) {
    return (
      <div className="text-center text-amber-700 py-12">
        Carregando ranking...
      </div>
    );
  }

  return (
    <>
      {/* Header do Ranking */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          🏆 Top Baristas 🏆
        </h2>
        <p className="text-amber-700">Os maiores mestres do café do mundo!</p>
        {userRank && (
          <p className="text-sm text-amber-600 mt-2">
            Sua posição: #{userRank}
          </p>
        )}
      </div>

      {/* Pódio Top 3 */}
      {top3.length > 0 && (
        <div className="flex items-end justify-center gap-4 mb-8">
          {/* 2º Lugar */}
          {top3[1] && (
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🥈</div>
              <div className="bg-linear-to-br from-gray-300 to-gray-400 rounded-lg p-4 text-center w-24">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm font-bold text-gray-800 truncate">
                  {top3[1].username}
                </div>
                <div className="text-xs text-gray-700 font-semibold">
                  {top3[1].coffeeCount.toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mt-2">
                2
              </div>
            </div>
          )}

          {/* 1º Lugar */}
          {top3[0] && (
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🥇</div>
              <div className="bg-linear-to-br from-yellow-300 to-yellow-500 rounded-lg p-4 text-center w-24">
                <div className="text-4xl mb-2">👑</div>
                <div className="text-sm font-bold text-yellow-900 truncate">
                  {top3[0].username}
                </div>
                <div className="text-xs text-yellow-800 font-semibold">
                  {top3[0].coffeeCount.toLocaleString()}
                </div>
              </div>
              <div className="bg-yellow-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mt-2">
                1
              </div>
            </div>
          )}

          {/* 3º Lugar */}
          {top3[2] && (
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🥉</div>
              <div className="bg-linear-to-br from-amber-600 to-amber-700 rounded-lg p-4 text-center w-24">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm font-bold text-amber-50 truncate">
                  {top3[2].username}
                </div>
                <div className="text-xs text-amber-100 font-semibold">
                  {top3[2].coffeeCount.toLocaleString()}
                </div>
              </div>
              <div className="bg-amber-700 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mt-2">
                3
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lista Restante */}
      {rest.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-amber-900 mb-3">
            Demais Competidores
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {rest.map((player) => (
              <div
                key={player.position}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">
                  {player.position}
                </div>
                <div className="text-3xl">👤</div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900">
                    {player.username}
                  </div>
                  <div className="text-sm text-amber-700">
                    ☕ {player.coffeeCount.toLocaleString()} Cafés Servidos
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
