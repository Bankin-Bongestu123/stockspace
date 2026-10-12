"use client";

import { useState } from "react";

const stocks = [
  { code: "BBCA", name: "Bank Central Asia", price: 9250, change: 1.42 },
  { code: "BBRI", name: "Bank Rakyat Indonesia", price: 3820, change: 0.78 },
  { code: "BMRI", name: "Bank Mandiri", price: 5275, change: -0.45 },
  { code: "ANTM", name: "Aneka Tambang", price: 3250, change: 2.15 },
  { code: "TLKM", name: "Telkom Indonesia", price: 2980, change: -0.67 },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredStocks = stocks
    .filter((stock) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        stock.code.toLowerCase().includes(keyword) ||
        stock.name.toLowerCase().includes(keyword);

      const matchesFilter =
        filter === "all" ||
        (filter === "up" && stock.change > 0) ||
        (filter === "down" && stock.change < 0);

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100">
      <aside className="fixed inset-y-0 left-0 hidden w-60 border-r border-slate-800 bg-[#0e1627] p-6 md:block">
        <h1 className="text-2xl font-bold tracking-tight">
          Stock<span className="text-emerald-400">Space</span>
        </h1>

        <p className="mt-2 text-xs text-slate-500">
          YOUR MARKET DASHBOARD
        </p>

        <nav className="mt-10 space-y-2">
          <div className="rounded-lg bg-emerald-400/10 px-4 py-3 text-emerald-300">
            ▦ Dashboard
          </div>
          <div className="rounded-lg px-4 py-3 text-slate-400">
            ☆ Watchlist
          </div>
          <div className="rounded-lg px-4 py-3 text-slate-400">
            ◷ Market News
          </div>
          <div className="rounded-lg px-4 py-3 text-slate-400">
            ◉ Portfolio
          </div>
        </nav>

        <div className="absolute bottom-6 left-6 text-xs text-slate-500">
          StockSpace · Demo v1.0
        </div>
      </aside>

      <section className="md:ml-60">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-5 md:px-10">
          <div>
            <p className="text-sm text-slate-400">Market overview</p>
            <h2 className="mt-1 text-2xl font-semibold">
              Dashboard
            </h2>
          </div>

          <div className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            IDX · Indonesia
          </div>
        </header>

        <div className="space-y-8 p-6 md:p-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-[#111c30] p-6">
              <p className="text-sm text-slate-400">IHSG</p>
              <p className="mt-3 text-3xl font-bold">8,250.00</p>
              <p className="mt-2 text-sm text-emerald-400">
                +1.25% <span className="text-slate-500">· Demo</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#111c30] p-6">
              <p className="text-sm text-slate-400">Top Gainer</p>
              <p className="mt-3 text-3xl font-bold">ANTM</p>
              <p className="mt-2 text-sm text-emerald-400">+2.15%</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#111c30] p-6 sm:col-span-2 xl:col-span-1">
              <p className="text-sm text-slate-400">Market status</p>
              <p className="mt-3 text-3xl font-bold">Demo mode</p>
              <p className="mt-2 text-sm text-slate-400">
                Belum terhubung ke data pasar
              </p>
            </div>
          </div>

          <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111c30]">
            <div className="flex flex-col gap-4 border-b border-slate-800 p-6">
  <div className="flex flex-wrap items-center justify-between gap-3">
    <div>
      <h3 className="text-lg font-semibold">Popular Stocks</h3>
      <p className="mt-1 text-sm text-slate-400">
        Saham pilihan untuk dipantau
      </p>
    </div>

    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
      SAMPLE DATA
    </span>
  </div>

  <input
    type="text"
    placeholder="Cari kode atau nama saham..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    className="w-full rounded-lg border border-slate-700 bg-[#0b1120] px-4 py-3 text-sm outline-none focus:border-emerald-400"
  />

  <div className="flex flex-wrap gap-3">
    <select
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
      className="rounded-lg border border-slate-700 bg-[#0b1120] px-3 py-2 text-sm"
    >
      <option value="all">Semua saham</option>
      <option value="up">Harga naik</option>
      <option value="down">Harga turun</option>
    </select>

    <select
      value={sort}
      onChange={(event) => setSort(event.target.value)}
      className="rounded-lg border border-slate-700 bg-[#0b1120] px-3 py-2 text-sm"
    >
      <option value="default">Urutan awal</option>
      <option value="low">Harga terendah</option>
      <option value="high">Harga tertinggi</option>
    </select>
  </div>
</div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-[#0e1627] text-slate-400">
                  <tr>
                    <th className="px-6 py-4 font-medium">Stock</th>
                    <th className="px-6 py-4 font-medium">Price (Rp)</th>
                    <th className="px-6 py-4 font-medium">Change</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredStocks.map((stock) => (
                    <tr
                      key={stock.code}
                      className="border-t border-slate-800 transition hover:bg-slate-800/40"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold">{stock.code}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {stock.name}
                        </p>
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {stock.price.toLocaleString("id-ID")}
                      </td>

                      <td
                        className={`px-6 py-4 font-medium ${
                          stock.change >= 0
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }`}
                      >
                        {stock.change > 0 ? "+" : ""}
                        {stock.change.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <p className="text-center text-xs text-slate-500">
            StockSpace · Prototype for learning · Prices shown are fictional demo data.
          </p>
        </div>
      </section>
    </main>
  );
}