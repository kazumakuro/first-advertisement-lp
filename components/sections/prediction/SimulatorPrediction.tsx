"use client";

import { useState, useCallback } from "react";
import { simulator } from "@/config/content-prediction";
import { Section } from "@/components/ui/Section";
import { trackSimulatorInput, trackSimulatorResult } from "@/lib/analytics";
import { ComingSoonDialog } from "@/components/shared/ComingSoonDialog";
import Image from "next/image";

interface SimulatorResult {
  recommendedBudget: number;
  predictedRoas: number;
  additionalSales: number;
  paybackPeriod: number;
}

// カテゴリ別の基準ROAS（簡易的なモデル）
const categoryRoasBase: Record<string, number> = {
  fashion: 280,
  beauty: 350,
  food: 220,
  electronics: 200,
  health: 400,
  hobby: 250,
  other: 250,
};

export function SimulatorPrediction() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [result, setResult] = useState<SimulatorResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const calculatePrediction = useCallback(() => {
    const priceNum = parseInt(price) || 0;
    const costNum = parseInt(cost) || 0;
    const revenueNum = parseInt(monthlyRevenue) || 0;

    if (!category || priceNum <= 0 || costNum <= 0 || revenueNum <= 0) {
      return;
    }

    // Analytics
    trackSimulatorResult({
      category,
      price: priceNum,
      budget: 0,
      roas: 0,
      additionalSales: 0,
    }, "effect-prediction");

    // Show coming soon dialog
    setShowDialog(true);
  }, [category, price, cost, monthlyRevenue]);

  const handleInputChange = (field: string, value: string) => {
    trackSimulatorInput(field, value, "effect-prediction");
  };

  return (
    <Section background="dark" id="simulator">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {simulator.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {simulator.subtitle}
        </p>
      </div>

      {/* 予測グラフイメージ */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-md rounded-lg overflow-hidden bg-dark-50">
          <Image
            src="/images/prediction/graph.jpeg"
            alt="ROAS予測グラフのイメージ"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">商品情報を入力</h3>

            <div className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {simulator.fields.category.label}
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    handleInputChange("category", e.target.value);
                  }}
                  className="w-full bg-dark-100 border border-white/20 text-white px-4 py-3 focus:border-trust-500 focus:outline-none transition-colors"
                >
                  <option value="">選択してください</option>
                  {simulator.fields.category.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {simulator.fields.price.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                      handleInputChange("price", e.target.value);
                    }}
                    placeholder={simulator.fields.price.placeholder}
                    className="w-full bg-dark-100 border border-white/20 text-white px-4 py-3 pr-12 focus:border-trust-500 focus:outline-none transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {simulator.fields.price.unit}
                  </span>
                </div>
              </div>

              {/* Cost */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {simulator.fields.cost.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={cost}
                    onChange={(e) => {
                      setCost(e.target.value);
                      handleInputChange("cost", e.target.value);
                    }}
                    placeholder={simulator.fields.cost.placeholder}
                    className="w-full bg-dark-100 border border-white/20 text-white px-4 py-3 pr-12 focus:border-trust-500 focus:outline-none transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {simulator.fields.cost.unit}
                  </span>
                </div>
              </div>

              {/* Monthly Revenue */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {simulator.fields.monthlyRevenue.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => {
                      setMonthlyRevenue(e.target.value);
                      handleInputChange("monthlyRevenue", e.target.value);
                    }}
                    placeholder={simulator.fields.monthlyRevenue.placeholder}
                    className="w-full bg-dark-100 border border-white/20 text-white px-4 py-3 pr-12 focus:border-trust-500 focus:outline-none transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {simulator.fields.monthlyRevenue.unit}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={calculatePrediction}
                disabled={!category || !price || !cost || !monthlyRevenue}
                className="w-full py-4 bg-trust-500 text-white font-semibold uppercase tracking-wider hover:bg-trust-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                予測を計算する
              </button>
            </div>
          </div>

          {/* Result */}
          <div className={`bg-gradient-to-br from-trust-500/10 to-cyan-500/5 border-2 ${showResult ? 'border-trust-500' : 'border-white/10'} p-6 md:p-8 transition-colors`}>
            <h3 className="text-xl font-bold text-white mb-6">予測結果</h3>

            {showResult && result ? (
              <div className="space-y-6">
                {/* Recommended Budget */}
                <div className="bg-white/5 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">{simulator.result.recommendedBudget}</p>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-trust-400">
                    ¥{result.recommendedBudget.toLocaleString()}
                    <span className="text-lg text-gray-400 font-normal">/月</span>
                  </p>
                </div>

                {/* Predicted ROAS */}
                <div className="bg-white/5 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">{simulator.result.predictedRoas}</p>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-cyan-400">
                    {result.predictedRoas}%
                  </p>
                </div>

                {/* Additional Sales */}
                <div className="bg-white/5 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">{simulator.result.additionalSales}</p>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-white">
                    ¥{result.additionalSales.toLocaleString()}
                    <span className="text-lg text-gray-400 font-normal">/月</span>
                  </p>
                </div>

                {/* Payback Period */}
                <div className="bg-white/5 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">{simulator.result.paybackPeriod}</p>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-white">
                    {result.paybackPeriod}ヶ月
                  </p>
                </div>

                <p className="text-gray-500 text-xs">
                  {simulator.disclaimer}
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p>左のフォームに入力すると<br />予測結果がここに表示されます</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        featureName="効果予測シミュレーター"
        pageName="effect-prediction"
      />
    </Section>
  );
}
