import { ReactNode } from "react";
import {
  QuickReplyButtons,
  LinkButton,
  StrengthCard,
  CopywritingCard,
  PredictionCard,
  CreativeGrid,
  DownloadButtonGroup,
  TargetAnalysisCard,
} from "@/components/line/LineChatMessage";

export interface ChatMessage {
  type: "bot" | "user";
  content: string | ReactNode;
  timestamp?: string;
}

// Easy Publish用会話データ（初心者向け）
export const easyPublishConversation: ChatMessage[] = [
  {
    type: "bot",
    content: "こんにちは！First Advertisementです🎉",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>広告についてお気軽にご相談ください。</p>
        <p className="mt-2">まず、あなたのビジネスについて教えてください。</p>
        <QuickReplyButtons options={["ハンドメイド", "イラスト", "教室・スクール", "D2C", "その他"]} />
      </div>
    ),
  },
  {
    type: "user",
    content: "ハンドメイド",
  },
  {
    type: "bot",
    content: "ハンドメイド作品の販売ですね！素敵です✨",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>BASEやSTORESで販売されている方にぴったりのプランがあります。</p>
        <div className="mt-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="text-xs font-bold text-yellow-700 mb-1">📦 ハンドメイド作家さん専用プラン</div>
          <ul className="text-[11px] text-gray-600 space-y-0.5">
            <li>• 月額1万円から開始可能</li>
            <li>• 最低契約期間なし</li>
            <li>• プロによる完全運用代行</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>無料相談のご予約はこちらから👇</p>
        <LinkButton text="30秒で予約する" />
      </div>
    ),
  },
];

// Efficiency Creative用会話データ（効率化）
export const efficiencyConversation: ChatMessage[] = [
  {
    type: "bot",
    content: "First Advertisementです。",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>無料でクリエイティブ作成をお試しいただけます✨</p>
        <p className="mt-1 text-xs text-gray-500">通常5,000円相当 → 今だけ無料</p>
      </div>
    ),
  },
  {
    type: "bot",
    content: "広告に使いたい商品画像を送ってください📷",
  },
  {
    type: "user",
    content: (
      <div>
        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-3xl">📷</span>
        </div>
        <p className="text-[10px] text-gray-500 mt-1">商品画像.jpg</p>
      </div>
    ),
  },
  {
    type: "bot",
    content: "画像を受け取りました！",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>ターゲット層を教えてください</p>
        <QuickReplyButtons options={["20代女性", "30代女性", "40代以上", "男性向け", "その他"]} />
      </div>
    ),
  },
  {
    type: "user",
    content: "20代女性",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>AIが分析中です...</p>
        <TargetAnalysisCard
          persona={{
            age: "20-29歳",
            gender: "女性",
            interests: ["美容", "ファッション", "SNS", "トレンド"],
            painPoints: ["コスパ重視", "口コミを参考にする", "限定に弱い"],
          }}
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>30分以内に複数のクリエイティブをお届けします🎨</p>
        <div className="mt-2 text-[10px] text-gray-500 bg-gray-50 rounded p-2">
          生成予定：Instagram用3枚 / Facebook用2枚 / バナー2枚
        </div>
      </div>
    ),
  },
];

// Effect Prediction用会話データ（効果予測）
export const predictionConversation: ChatMessage[] = [
  {
    type: "bot",
    content: "First Advertisementです。",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>広告効果を無料で予測します📊</p>
        <p className="mt-1 text-xs text-gray-500">数値を入力するだけで、AIがROASを予測</p>
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>商品カテゴリを選択してください</p>
        <QuickReplyButtons options={["ファッション", "美容", "食品", "健康", "趣味"]} />
      </div>
    ),
  },
  {
    type: "user",
    content: "美容",
  },
  {
    type: "bot",
    content: "販売価格（税込）を教えてください",
  },
  {
    type: "user",
    content: "5,980円",
  },
  {
    type: "bot",
    content: "原価（税込）を教えてください",
  },
  {
    type: "user",
    content: "1,500円",
  },
  {
    type: "bot",
    content: (
      <div>
        <p className="mb-1">分析完了！🎉</p>
        <PredictionCard
          budget="5万円/月"
          roas="280%"
          revenue="14万円"
          period="即月"
          confidence="87%（高信頼度）"
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>詳細レポートをご希望の場合はこちら👇</p>
        <LinkButton text="詳細レポートを見る" />
      </div>
    ),
  },
];

// AI Branding用会話データ（言語化）
export const brandingConversation: ChatMessage[] = [
  {
    type: "bot",
    content: "First Advertisementです。",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>AIが商品の魅力を言語化します✨</p>
        <p className="mt-1 text-xs text-gray-500">URLを送信するだけで、強みを自動抽出</p>
      </div>
    ),
  },
  {
    type: "bot",
    content: "分析したいページのURLを送ってください🔗",
  },
  {
    type: "user",
    content: "https://example.com/product/skincare-serum",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>URLを受け取りました。</p>
        <p className="mt-1">AIが分析中... 🔍</p>
        <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p className="mb-1">分析完了！🎉</p>
        <StrengthCard
          title="🔍 抽出された強み"
          strengths={[
            "天然由来成分100%使用",
            "敏感肌にも安心の低刺激処方",
            "3ヶ月で効果実感の声多数",
            "皮膚科医監修の信頼性",
            "定期購入で30%OFF特典あり",
          ]}
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <TargetAnalysisCard
          persona={{
            age: "30-45歳",
            gender: "女性",
            interests: ["スキンケア", "エイジングケア", "オーガニック"],
            painPoints: ["肌荒れが気になる", "刺激の強い化粧品が合わない", "効果を実感したい"],
          }}
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <CopywritingCard
          title="✍️ おすすめキャッチコピー5案"
          copies={[
            "肌が喜ぶ、天然の恵み",
            "敏感肌の方に選ばれて10年",
            "3ヶ月後、鏡を見るのが楽しみに",
            "成分にこだわる人の、本命スキンケア",
            "やさしさと効果を、両立する",
          ]}
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>このコピーを使った広告制作もお任せください👇</p>
        <LinkButton text="クリエイティブを作成する" />
      </div>
    ),
  },
];

// AI Creative用会話データ（クリエイティブ生成）
export const creativeConversation: ChatMessage[] = [
  {
    type: "bot",
    content: "First Advertisementです。",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>URLから広告クリエイティブを自動生成します🎨</p>
        <p className="mt-1 text-xs text-gray-500">最短5分で10種類以上のクリエイティブ</p>
      </div>
    ),
  },
  {
    type: "bot",
    content: "商品ページのURLを送ってください🔗",
  },
  {
    type: "user",
    content: "https://example.com/product/organic-soap",
  },
  {
    type: "bot",
    content: "URLを受け取りました！商品情報を抽出中...",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>クリエイティブ生成中... 🎨</p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-green-500">✓</span>
            <span>商品画像抽出完了</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-green-500">✓</span>
            <span>キャッチコピー生成完了</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="animate-spin">⏳</span>
            <span>デザイン生成中...</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p className="mb-1">完成しました！🎉</p>
        <CreativeGrid
          images={[
            "/assets/images/Gemini_Generated_Image_2zqi4y2zqi4y2zqi.png",
            "/assets/images/Gemini_Generated_Image_639l0x639l0x639l.png",
            "/assets/images/Gemini_Generated_Image_8o8lpk8o8lpk8o8l.png",
            "/assets/images/Gemini_Generated_Image_2zqi4y2zqi4y2zqi.png",
          ]}
          labels={["Instagram用", "Facebook用", "バナー広告", "ストーリーズ用"]}
        />
      </div>
    ),
  },
  {
    type: "bot",
    content: (
      <div>
        <p>全10パターン生成完了！</p>
        <DownloadButtonGroup
          platforms={["Instagram用", "Facebook用", "Google用", "TikTok用", "すべてDL"]}
        />
      </div>
    ),
  },
  {
    type: "user",
    content: "すべてDL",
  },
  {
    type: "bot",
    content: (
      <div>
        <p>全クリエイティブをZIPファイルで送信しました📦</p>
        <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-xs text-blue-700">
            📁 creatives_20240115.zip（10ファイル）
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">ご不明点があればお気軽にご質問ください！</p>
      </div>
    ),
  },
];

// 各LP用の設定
export const linePreviewConfig = {
  easyPublish: {
    title: "LINEで無料相談できます",
    subtitle: "まずは気軽に相談",
    description: "広告のことがわからなくても大丈夫。LINEで質問するだけで、あなたに合った広告プランをご提案します。",
    messages: easyPublishConversation,
    ctaText: "LINEで無料相談する",
  },
  efficiency: {
    title: "LINEで無料クリエイティブをお試し",
    subtitle: "まずは無料体験",
    description: "商品画像を送るだけ。AIが最適な広告クリエイティブを30分以内にお届けします。",
    messages: efficiencyConversation,
    ctaText: "無料でクリエイティブを作る",
  },
  prediction: {
    title: "LINEで広告効果を無料予測",
    subtitle: "出稿前にROASがわかる",
    description: "商品情報を入力するだけで、AIが広告効果を予測。投資対効果を事前に確認できます。",
    messages: predictionConversation,
    ctaText: "無料で効果を予測する",
  },
  branding: {
    title: "LINEでAI分析を体験",
    subtitle: "URLを送るだけ",
    description: "商品ページのURLを送信するだけで、AIがあなたの商品の強みを分析・言語化します。",
    messages: brandingConversation,
    ctaText: "無料でAI分析を試す",
  },
  creative: {
    title: "LINEでクリエイティブを自動生成",
    subtitle: "URLを送るだけ",
    description: "商品ページのURLを送信するだけで、AIが10種類以上の広告クリエイティブを自動生成します。",
    messages: creativeConversation,
    ctaText: "無料でクリエイティブを作る",
  },
};
