export const siteConfig = {
  name: "First Advertisement",
  tagline: "数理モデルで広告効果を予測",
  description: "データ駆動型の広告戦略で、投資対効果を最大化。",
};

export const hero = {
  catchphrase: "出稿前に、\nROASがわかる",
  subCatchphrase: "AIが広告効果を科学的に予測。失敗リスクを最小化。",
  description:
    "「広告を出したいけど、本当に効果あるの？」\nその不安を、データで解消。出稿前に予測ROASを確認できます。",
  stats: [
    { value: "±15", unit: "%以内", label: "予測精度", sublabel: "予測精度" },
    { value: "2.5x", unit: "", label: "ROAS予測", sublabel: "予測実績" },
    { value: "500", unit: "+", label: "予測実績", sublabel: "キャンペーン数" },
    { value: "3", unit: "分", label: "分析時間", sublabel: "結果出力まで" },
    { value: "無料", unit: "", label: "初回診断", sublabel: "お試し可能" },
  ],
  cta: {
    primary: "今すぐ無料で予測",
    primaryUrl: "https://lin.ee/xN9WWHl",
    secondary: "予測の仕組みを見る",
  },
};

export const problems = {
  title: "広告投資、こんな不安ありませんか？",
  items: [
    {
      title: "効果が出るか分からない",
      description:
        "広告費を投入しても、本当にリターンがあるのか不安。失敗したら大きな損失に。",
      icon: "question",
    },
    {
      title: "適正予算が分からない",
      description:
        "いくらかければいいのか見当もつかない。多すぎても少なすぎても非効率。",
      icon: "money",
    },
    {
      title: "過去データがない",
      description:
        "初めての広告出稿で参考になるデータがない。勘に頼るしかないのか...",
      icon: "database",
    },
    {
      title: "競合との比較ができない",
      description:
        "自社の商品が広告で売れるのか、市場と比較した客観的な判断ができない。",
      icon: "chart",
    },
  ],
};

export const simulator = {
  title: "今すぐ効果を予測してみる",
  subtitle: "商品情報を入力するだけで、推奨予算とROAS予測を表示",
  fields: {
    category: {
      label: "商品ジャンル",
      options: [
        { value: "fashion", label: "ファッション・アパレル" },
        { value: "beauty", label: "美容・コスメ" },
        { value: "food", label: "食品・飲料" },
        { value: "electronics", label: "家電・ガジェット" },
        { value: "health", label: "健康・サプリメント" },
        { value: "hobby", label: "趣味・ホビー" },
        { value: "other", label: "その他" },
      ],
    },
    price: {
      label: "販売単価（税込）",
      placeholder: "例: 5000",
      unit: "円",
    },
    cost: {
      label: "原価（税込）",
      placeholder: "例: 2000",
      unit: "円",
    },
    monthlyRevenue: {
      label: "現在の月商",
      placeholder: "例: 1000000",
      unit: "円",
    },
  },
  result: {
    recommendedBudget: "推奨広告予算",
    predictedRoas: "予測ROAS",
    additionalSales: "追加売上予測",
    paybackPeriod: "回収期間",
  },
  disclaimer: "※ 予測値は過去データに基づく参考値です。実際の結果を保証するものではありません。",
};

export const solution = {
  title: "出す前に、勝ち負けがわかる",
  subtitle: "「このまま出して大丈夫？」その不安を、データで解消。",
  features: [
    {
      title: "ROAS予測（精度±15%）",
      description: "500件超の実績データから、あなたの商品の広告効果を事前に予測。",
      icon: "brain",
    },
    {
      title: "最適な予算がわかる",
      description: "「いくらかければいい？」に回答。無駄な出費を防ぐ。",
      icon: "calculator",
    },
    {
      title: "リスクも見える化",
      description: "最悪〜最良のシナリオを提示。「やる/やらない」の判断材料に。",
      icon: "shield",
    },
  ],
};

export const features = {
  title: "予測の精度を支える4つの技術",
  items: [
    {
      title: "機械学習モデル",
      description:
        "過去500件以上の広告運用データを学習。カテゴリ別の成功パターンを高精度で予測。",
      icon: "cpu",
      details: [
        "カテゴリ別学習モデル",
        "季節変動の考慮",
        "市場トレンド反映",
      ],
    },
    {
      title: "競合ベンチマーク",
      description:
        "同カテゴリの競合データと比較し、あなたの商品の相対的なポジションを分析。",
      icon: "chart",
      details: [
        "同業種比較分析",
        "価格帯別ベンチマーク",
        "広告効率スコア算出",
      ],
    },
    {
      title: "シナリオ分析",
      description:
        "楽観・中立・悲観の3シナリオを提示。リスクを把握した上で意思決定が可能。",
      icon: "layers",
      details: [
        "3シナリオ予測",
        "確率分布の可視化",
        "リスク許容度設定",
      ],
    },
    {
      title: "リアルタイム更新",
      description:
        "市場データを常に取り込み、予測モデルを継続的にアップデート。精度を維持。",
      icon: "refresh",
      details: [
        "週次モデル更新",
        "市場変動への追従",
        "予測精度モニタリング",
      ],
    },
  ],
};

export const howItWorks = {
  title: "3ステップで予測完了",
  steps: [
    {
      number: 1,
      title: "商品情報を入力",
      description:
        "ジャンル、販売価格、原価、月商を入力。最短30秒で完了。",
      icon: "edit",
    },
    {
      number: 2,
      title: "AIが分析・予測",
      description:
        "機械学習モデルが類似商品のデータと比較し、ROASと最適予算を算出。",
      icon: "cpu",
    },
    {
      number: 3,
      title: "レポートを受け取る",
      description:
        "予測結果と推奨アクションを記載したレポートをLINEでお届け。",
      icon: "send",
    },
  ],
};

export const faq = {
  title: "よくある質問",
  items: [
    {
      question: "予測の精度はどのくらいですか？",
      answer:
        "過去の検証では、実際のROASとの誤差は平均15%以内です。特にファッション・美容カテゴリでは93%の精度を達成しています。ただし、市場環境や競合状況により変動する可能性があります。",
    },
    {
      question: "どんな商品でも予測できますか？",
      answer:
        "EC販売が可能な有形商品であれば、ほとんどのカテゴリで予測可能です。ただし、一部のニッチカテゴリや新規市場では、比較データが少なく精度が下がる場合があります。",
    },
    {
      question: "予測にはどのくらい時間がかかりますか？",
      answer:
        "基本的な予測は入力完了後、即座に表示されます。詳細レポートは24時間以内にLINEでお届けします。",
    },
    {
      question: "予測は無料ですか？",
      answer:
        "簡易予測は完全無料です。より詳細な分析レポートや、継続的なモニタリングが必要な場合は有料プランをご用意しています。",
    },
    {
      question: "入力した情報はどう扱われますか？",
      answer:
        "お客様の情報は予測にのみ使用し、第三者への提供は一切行いません。データは暗号化して保管し、プライバシーを厳重に保護しています。",
    },
  ],
};

export const cta = {
  title: "まずは無料で、効果を予測してみませんか？",
  subtitle: "商品情報を送るだけで、AIがROASを予測",
  description:
    "公式LINEで商品情報を送信するだけ。広告を出す前に、期待できる効果が分かります。",
  primary: "LINEで無料予測",
  primaryUrl: "https://lin.ee/xN9WWHl",
  benefits: [
    "入力は最短30秒",
    "予測は完全無料",
    "詳細レポートをお届け",
  ],
};
