export const siteConfig = {
  name: "First Advertisement",
  tagline: "クリエイティブ費用を半減、広告費に回せる",
  description: "既存の広告運用をさらに効率化。制作コスト削減でROAS向上を実現。",
};

export const hero = {
  catchphrase: "制作費50%削減、\n広告費に回せる",
  subCatchphrase: "AI×自動化で、クリエイティブ制作の常識を変える",
  description:
    "代理店への制作費、もっと効率化できる。\n削減した費用を広告費に回して、ROAS向上を実現。",
  stats: [
    { value: "50", unit: "%削減", label: "制作コスト", sublabel: "コスト削減" },
    { value: "5,000", unit: "+", label: "制作実績", sublabel: "クリエイティブ数" },
    { value: "即日", unit: "", label: "納品スピード", sublabel: "最短対応" },
    { value: "98", unit: "%", label: "継続率", sublabel: "リピーター" },
  ],
  cta: {
    primary: "今すぐ無料でお試し",
    primaryUrl: "https://lin.ee/xN9WWHl",
    secondary: "サービスを詳しく見る",
  },
};

export const problems = {
  title: "こんな課題、ありませんか？",
  items: [
    {
      title: "クリエイティブ制作費が高すぎる",
      description:
        "代理店に依頼すると1本3〜5万円。月に数本作ると、それだけで10万円以上の出費に。",
      icon: "money",
    },
    {
      title: "制作に時間がかかりすぎる",
      description:
        "依頼から納品まで1〜2週間。タイムリーな施策が打てず、機会損失が発生。",
      icon: "clock",
    },
    {
      title: "修正のたびに追加費用",
      description:
        "ちょっとした修正でも追加費用が発生。気軽に改善サイクルを回せない。",
      icon: "refresh",
    },
    {
      title: "バリエーションが作れない",
      description:
        "A/Bテスト用に複数パターン欲しいけど、予算的に1〜2本が限界。最適化が進まない。",
      icon: "copy",
    },
  ],
};

export const solution = {
  title: "制作費を広告費に回せる",
  subtitle: "浮いたコストで、もっと広告を打てる。ROASが変わる。",
  features: [
    {
      title: "制作費50%カット",
      description: "月額固定で作り放題。1本あたり500円〜で高品質なクリエイティブが手に入る。",
      icon: "scissors",
    },
    {
      title: "即日納品、待ち時間ゼロ",
      description: "AIが自動生成するから、依頼したその日に使える。機会損失なし。",
      icon: "zap",
    },
    {
      title: "修正無制限、追加費用ゼロ",
      description: "納得いくまで何度でもOK。「もう1パターン欲しい」にも即対応。",
      icon: "check",
    },
  ],
};

export const features = {
  title: "選ばれる4つの理由",
  items: [
    {
      title: "AIクリエイティブ生成",
      description:
        "最新のAI技術で、高品質な広告クリエイティブを自動生成。静止画・動画・コピーまで対応。",
      icon: "sparkles",
      details: [
        "静止画・動画自動生成",
        "コピーライティング込み",
        "ブランドガイドライン適用",
      ],
    },
    {
      title: "月額固定で無制限",
      description:
        "何本作っても料金は一定。バリエーションを気にせず、思う存分テストできる。",
      icon: "infinity",
      details: [
        "制作本数の上限なし",
        "修正回数も無制限",
        "追加費用一切なし",
      ],
    },
    {
      title: "全媒体に対応",
      description:
        "Google、Meta、TikTok、LINE、X。主要な広告媒体すべてに最適化したクリエイティブを提供。",
      icon: "globe",
      details: [
        "媒体別サイズ自動調整",
        "フォーマット最適化",
        "入稿規定に準拠",
      ],
    },
    {
      title: "リアルタイム分析",
      description:
        "クリエイティブ別の効果を可視化。どの広告が効いているか一目でわかる。",
      icon: "chart",
      details: [
        "媒体横断ダッシュボード",
        "クリエイティブ別効果測定",
        "改善提案の自動化",
      ],
    },
  ],
};

export const howItWorks = {
  title: "シンプルな3ステップ",
  steps: [
    {
      number: 1,
      title: "ブリーフを入力",
      description:
        "商品情報とターゲットを入力するだけ。テンプレートがあるので迷いません。",
      icon: "edit",
    },
    {
      number: 2,
      title: "AIが自動生成",
      description:
        "複数のクリエイティブバリエーションをAIが自動生成。最短30分で完成。",
      icon: "cpu",
    },
    {
      number: 3,
      title: "配信開始",
      description:
        "審査通過後、すぐに配信。A/Bテストも自動で実施し、効果を最大化。",
      icon: "send",
    },
  ],
};

export const pricing = {
  title: "シンプルで透明な料金",
  subtitle: "運用規模に応じた、明確な料金体系",
  plans: [
    {
      name: "スタンダード",
      adSpendRange: "月10-30万円",
      fee: "15%",
      features: [
        "AIクリエイティブ生成（月10本）",
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
        "AIクリエイティブ生成（無制限）",
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
  ],
};

export const cta = {
  title: "あなたの商品で、試してみませんか？",
  subtitle: "画像を送るだけで、AIがクリエイティブを無料でお試し作成",
  description:
    "公式LINEに商品画像を送信するだけ。どんな広告クリエイティブができるか、まずは体験してみてください。",
  primary: "LINEで無料お試し",
  primaryUrl: "https://lin.ee/xN9WWHl",
  benefits: [
    "画像を送るだけでOK",
    "お試し作成は完全無料",
    "最短即日でお届け",
  ],
};
