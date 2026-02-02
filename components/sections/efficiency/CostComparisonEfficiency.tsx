"use client";

import { Section } from "@/components/ui/Section";

const comparisonData = {
  title: "コスト削減効果を見える化",
  subtitle: "月10本のクリエイティブを制作した場合の比較",
  before: {
    label: "代理店に依頼",
    items: [
      { name: "クリエイティブ制作費", amount: 400000, color: "bg-gray-500" },
      { name: "修正費用（平均2回）", amount: 60000, color: "bg-gray-400" },
      { name: "急ぎ対応費", amount: 40000, color: "bg-gray-300" },
    ],
    total: 500000,
  },
  after: {
    label: "First Advertisement",
    items: [
      { name: "月額固定費", amount: 200000, color: "bg-electric-500" },
      { name: "修正費用", amount: 0, color: "bg-electric-400" },
      { name: "急ぎ対応費", amount: 0, color: "bg-electric-300" },
    ],
    total: 200000,
  },
  savings: {
    amount: 300000,
    percentage: 60,
  },
  // 売上増加シミュレーション
  salesImpact: {
    roas: 300, // ROAS 300%
    additionalAdSpend: 300000, // 削減分をそのまま広告費に
    expectedSalesIncrease: 900000, // 30万 × 3 = 90万
  },
};

export function CostComparisonEfficiency() {
  const maxAmount = comparisonData.before.total;

  return (
    <Section background="dark" id="cost-comparison">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {comparisonData.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {comparisonData.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Before/After 比較 */}
        <div className="space-y-8 mb-12">
          {/* Before */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm uppercase tracking-wider">Before</span>
              <span className="text-white font-bold">{comparisonData.before.label}</span>
            </div>

            {/* 積み上げバー */}
            <div className="relative h-16 md:h-20 bg-dark-100 mb-4 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 flex transition-all duration-1000"
                style={{ width: `${(comparisonData.before.total / maxAmount) * 100}%` }}
              >
                {comparisonData.before.items.map((item, index) => (
                  <div
                    key={index}
                    className={`h-full ${item.color} transition-all duration-1000`}
                    style={{ width: `${(item.amount / comparisonData.before.total) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* 内訳 */}
            <div className="flex flex-wrap gap-4 mb-4">
              {comparisonData.before.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 ${item.color}`} />
                  <span className="text-gray-400">{item.name}</span>
                  <span className="text-white font-mono">¥{item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            {/* 合計 */}
            <div className="flex justify-end">
              <span className="text-2xl md:text-3xl font-bold font-mono text-white">
                ¥{comparisonData.before.total.toLocaleString()}
                <span className="text-gray-400 text-base font-normal ml-2">/月</span>
              </span>
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-electric-500/10 to-neon-500/5 border-2 border-electric-500 p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-electric-500 text-sm uppercase tracking-wider font-bold">After</span>
              <span className="text-white font-bold">{comparisonData.after.label}</span>
            </div>

            {/* 積み上げバー */}
            <div className="relative h-16 md:h-20 bg-dark-100 mb-4 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 flex transition-all duration-1000"
                style={{ width: `${(comparisonData.after.total / maxAmount) * 100}%` }}
              >
                {comparisonData.after.items.filter(item => item.amount > 0).map((item, index) => (
                  <div
                    key={index}
                    className={`h-full ${item.color} transition-all duration-1000`}
                    style={{ width: '100%' }}
                  />
                ))}
              </div>

              {/* 削減分を表示 */}
              <div
                className="absolute inset-y-0 flex items-center justify-center transition-all duration-1000 border-2 border-dashed border-neon-500/50"
                style={{
                  left: `${(comparisonData.after.total / maxAmount) * 100}%`,
                  width: `${(comparisonData.savings.amount / maxAmount) * 100}%`
                }}
              >
                <span className="text-neon-500 text-xs md:text-sm font-bold whitespace-nowrap">
                  この分を広告費に →
                </span>
              </div>
            </div>

            {/* 内訳 */}
            <div className="flex flex-wrap gap-4 mb-4">
              {comparisonData.after.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 ${item.color}`} />
                  <span className="text-gray-400">{item.name}</span>
                  <span className="text-white font-mono">
                    {item.amount === 0 ? "¥0" : `¥${item.amount.toLocaleString()}`}
                  </span>
                  {item.amount === 0 && (
                    <span className="text-neon-500 text-xs">(無料)</span>
                  )}
                </div>
              ))}
            </div>

            {/* 合計 */}
            <div className="flex justify-end">
              <span className="text-2xl md:text-3xl font-bold font-mono text-electric-500">
                ¥{comparisonData.after.total.toLocaleString()}
                <span className="text-gray-400 text-base font-normal ml-2">/月</span>
              </span>
            </div>
          </div>
        </div>

        {/* 売上増加シミュレーション - フロー図 */}
        <div className="bg-gradient-to-r from-neon-500/10 to-electric-500/10 border border-white/10 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            削減分を広告費に回すと...
          </h3>

          {/* フロー図 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* Step 1: 削減額 */}
            <div className="bg-white/5 border border-white/20 p-4 md:p-6 text-center min-w-[140px]">
              <p className="text-gray-400 text-xs mb-1">制作費削減</p>
              <p className="text-2xl md:text-3xl font-bold font-mono text-white">
                ¥{(comparisonData.savings.amount / 10000).toLocaleString()}万
              </p>
              <p className="text-gray-500 text-xs mt-1">/月</p>
            </div>

            {/* Arrow */}
            <div className="text-electric-500 text-2xl md:text-3xl rotate-90 md:rotate-0">→</div>

            {/* Step 2: 広告費に追加 */}
            <div className="bg-electric-500/10 border border-electric-500/30 p-4 md:p-6 text-center min-w-[140px]">
              <p className="text-electric-400 text-xs mb-1">広告費に追加</p>
              <p className="text-2xl md:text-3xl font-bold font-mono text-electric-500">
                +¥{(comparisonData.salesImpact.additionalAdSpend / 10000).toLocaleString()}万
              </p>
              <p className="text-gray-500 text-xs mt-1">/月</p>
            </div>

            {/* Arrow with ROAS */}
            <div className="flex flex-col items-center text-neon-500">
              <span className="text-xs text-gray-400 mb-1">ROAS {comparisonData.salesImpact.roas}%</span>
              <span className="text-2xl md:text-3xl rotate-90 md:rotate-0">→</span>
            </div>

            {/* Step 3: 売上増加 */}
            <div className="bg-gradient-to-br from-neon-500/20 to-electric-500/20 border-2 border-neon-500 p-4 md:p-6 text-center min-w-[140px]">
              <p className="text-neon-400 text-xs mb-1">売上増加</p>
              <p className="text-2xl md:text-3xl font-bold font-mono text-neon-500">
                +¥{(comparisonData.salesImpact.expectedSalesIncrease / 10000).toLocaleString()}万
              </p>
              <p className="text-gray-500 text-xs mt-1">/月</p>
            </div>
          </div>

          {/* 年間インパクト */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
              <div>
                <p className="text-gray-400 text-sm">年間の売上増加見込み</p>
                <p className="text-3xl md:text-4xl font-bold font-mono text-neon-500 mt-1">
                  +¥{((comparisonData.salesImpact.expectedSalesIncrease * 12) / 10000).toLocaleString()}万
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div>
                <p className="text-gray-400 text-sm">コスト削減だけでも年間</p>
                <p className="text-3xl md:text-4xl font-bold font-mono text-electric-500 mt-1">
                  ¥{((comparisonData.savings.amount * 12) / 10000).toLocaleString()}万お得
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-xs text-center mt-6">
            ※ ROAS {comparisonData.salesImpact.roas}%は一般的なEC広告の平均値を想定。実際の効果は商材や運用状況により異なります。
          </p>
        </div>
      </div>
    </Section>
  );
}
