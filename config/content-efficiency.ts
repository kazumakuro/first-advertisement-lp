export const siteConfig = {
  name: "First Advertisement",
  tagline: "クリエイティブ費用を半減、広告費に回せる",
  description: "既存の広告運用をさらに効率化。制作コスト削減でROAS向上を実現。",
};

export const hero = {
  catchphrase: "クリエイティブ費用を\n半減、広告費に回せる",
  subCatchphrase: "AI×自動化で、制作コストを最適化",
  description:
    "代理店への制作費、もっと効率化できる。\n削減した費用を広告費に回して、ROAS向上を実現。",
  stats: [
    { value: "50", unit: "%", label: "制作費削減" },
    { value: "30", unit: "%", label: "広告費増加" },
    { value: "2x", unit: "", label: "ROAS改善" },
  ],
  cta: {
    primary: "効果を試算する",
    primaryUrl: "https://lin.ee/gVIckSF",
    secondary: "事例を見る",
  },
};

export const costSavings = {
  title: "制作費削減がROAS向上に直結",
  subtitle: "削減した制作費を広告費に転用することで、広告効果を最大化",
  flow: [
    {
      title: "制作費削減",
      amount: "月 -15万円",
      description: "AI生成で外注費カット",
      icon: "scissors",
    },
    {
      title: "広告費に転用",
      amount: "月 +15万円",
      description: "削減分をそのまま運用へ",
      icon: "arrow-right",
    },
    {
      title: "ROAS向上",
      amount: "+30%",
      description: "インプレッション増加で売上UP",
      icon: "trending-up",
    },
  ],
  example: {
    title: "月間30万円の広告運用の場合",
    before: {
      adSpend: 200000,
      creativeCost: 100000,
      total: 300000,
      roas: 150,
    },
    after: {
      adSpend: 250000,
      creativeCost: 50000,
      total: 300000,
      roas: 195,
    },
  },
};

export const comparison = {
  title: "従来の代理店との比較",
  subtitle: "同じ予算で、より多くの広告を打てる",
  headers: ["項目", "従来の代理店", "First Advertisement"],
  rows: [
    {
      item: "クリエイティブ制作",
      traditional: "1本 3-5万円",
      ours: "月額固定で無制限",
    },
    {
      item: "制作期間",
      traditional: "1-2週間",
      ours: "即日〜翌日",
    },
    {
      item: "修正対応",
      traditional: "追加費用発生",
      ours: "何度でも無料",
    },
    {
      item: "バリエーション",
      traditional: "限定的",
      ours: "AIで大量生成可能",
    },
    {
      item: "運用レポート",
      traditional: "月1回",
      ours: "リアルタイム",
    },
  ],
};

export const showcase = {
  title: "AI生成クリエイティブ",
  subtitle: "高品質なクリエイティブを、最短即日で",
  categories: [
    {
      name: "静止画広告",
      description: "SNS・ディスプレイ広告向け",
    },
    {
      name: "動画広告",
      description: "TikTok・YouTube向け",
    },
    {
      name: "バナー広告",
      description: "各種サイズに最適化",
    },
  ],
};

export const process = {
  title: "シンプルな3ステップ",
  subtitle: "面倒な打ち合わせは不要。すぐに広告配信を開始",
  steps: [
    {
      number: 1,
      title: "ブリーフ入力",
      description: "商品情報とターゲットを入力するだけ。テンプレートで簡単。",
      duration: "5分",
    },
    {
      number: 2,
      title: "AI生成",
      description: "複数のクリエイティブバリエーションを自動生成。",
      duration: "30分",
    },
    {
      number: 3,
      title: "配信開始",
      description: "審査通過後、すぐに配信。A/Bテストも自動で実施。",
      duration: "即日",
    },
  ],
};

export const caseStudies = {
  title: "導入実績",
  subtitle: "数字で見る効率化の成果",
  cases: [
    {
      industry: "EC・通販",
      companyType: "アパレルD2Cブランド",
      metrics: [
        { label: "制作費削減", value: "-52%", description: "月15万円→7万円" },
        { label: "広告費増加", value: "+40%", description: "削減分を転用" },
        { label: "売上向上", value: "+35%", description: "3ヶ月後" },
      ],
    },
    {
      industry: "サービス",
      companyType: "オンラインスクール",
      metrics: [
        { label: "制作期間短縮", value: "-80%", description: "10日→2日" },
        { label: "クリエイティブ数", value: "3x", description: "月間制作本数" },
        { label: "CPA改善", value: "-25%", description: "獲得単価" },
      ],
    },
    {
      industry: "店舗",
      companyType: "飲食チェーン（5店舗）",
      metrics: [
        { label: "運用工数削減", value: "-60%", description: "週8h→3h" },
        { label: "来店数増加", value: "+28%", description: "広告経由" },
        { label: "月次ROI", value: "+45%", description: "投資対効果" },
      ],
    },
  ],
};

export const pricing = {
  title: "料金プラン",
  subtitle: "運用規模に応じた、明確な料金体系",
  plans: [
    {
      name: "スタンダード",
      adSpendRange: "月10-30万円",
      fee: "15%",
      features: [
        "AI クリエイティブ生成（月10本）",
        "3媒体まで運用",
        "週次レポート",
        "チャットサポート",
      ],
      recommended: false,
    },
    {
      name: "プロフェッショナル",
      adSpendRange: "月30-100万円",
      fee: "12%",
      features: [
        "AI クリエイティブ生成（無制限）",
        "全媒体対応",
        "リアルタイムダッシュボード",
        "専任担当者",
        "A/Bテスト自動化",
      ],
      recommended: true,
    },
    {
      name: "エンタープライズ",
      adSpendRange: "月100万円以上",
      fee: "要相談",
      features: [
        "全機能利用可能",
        "カスタム開発対応",
        "優先サポート",
        "月次戦略MTG",
        "ROI保証",
      ],
      recommended: false,
    },
  ],
  note: "※ 広告費は別途。最低契約期間なし。",
};

export const faq = {
  title: "よくある質問",
  items: [
    {
      question: "既存の広告アカウントをそのまま使えますか？",
      answer:
        "はい、既存のGoogle・Meta・TikTokなどのアカウントにそのまま連携可能です。過去の運用データも引き継げるため、学習を活かした最適化が可能です。",
    },
    {
      question: "代理店からの切り替えはスムーズにできますか？",
      answer:
        "はい、並行運用期間を設けることも可能です。既存のクリエイティブ資産の移行サポートも行っています。",
    },
    {
      question: "AIが作るクリエイティブの品質は？",
      answer:
        "プロのデザイナーが監修したテンプレートとAIを組み合わせることで、高品質なクリエイティブを生成します。必要に応じて人による調整も可能です。",
    },
    {
      question: "最低契約期間はありますか？",
      answer:
        "ありません。月単位でいつでも解約可能です。まずは1ヶ月お試しいただき、効果を実感してください。",
    },
    {
      question: "どの広告媒体に対応していますか？",
      answer:
        "Google（検索・ディスプレイ・YouTube）、Meta（Instagram・Facebook）、TikTok、X、LINE、Yahoo!など主要媒体に対応しています。",
    },
    {
      question: "レポートはどのように確認できますか？",
      answer:
        "リアルタイムダッシュボードで24時間いつでも確認可能。媒体横断でのパフォーマンス分析、クリエイティブ別の効果測定など詳細なデータを提供します。",
    },
  ],
};

export const cta = {
  title: "今すぐ効果を試算する",
  subtitle: "現在の運用状況をヒアリングし、削減可能なコストと期待効果をご提示します",
  description:
    "無料相談では、貴社の広告運用状況を分析し、具体的な改善提案をお伝えします。",
  primary: "無料で相談する",
  primaryUrl: "https://lin.ee/gVIckSF",
  secondary: "資料をダウンロード",
  benefits: [
    "相談は完全無料",
    "オンラインで30分",
    "具体的な削減額を試算",
  ],
};
