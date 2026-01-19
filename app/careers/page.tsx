import Contact from '@/app/components/Contact';
import CareersHero from './components/CareersHero';
import CareersContent from './components/CareersContent';

export const metadata = {
  title: '採用情報 | Kurosawa Consulting Vietnam',
  description:
    'Kurosawa Consulting Vietnamでは、ベトナムと日本をつなぐビジネスの最前線で活躍する仲間を募集しています。コンサルタント、会計スタッフなど、様々なポジションで募集中です。',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* ヒーローセクション */}
        <CareersHero />

        {/* メインコンテンツ（2カラムレイアウト） */}
        <CareersContent />

        {/* お問い合わせ（共通コンポーネント） */}
        <Contact />
      </main>
    </div>
  );
}
