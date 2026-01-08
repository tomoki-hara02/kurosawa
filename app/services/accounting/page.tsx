import Contact from '@/app/components/Contact';
import AccountingHero from './components/AccountingHero';
import AccountingContent from './components/AccountingContent';

export const metadata = {
  title: '会計税務コンサルティング | Kurosawa Consulting Vietnam',
  description:
    '帳簿作成・月次/年次決算・税務申告・監査対応・日本連結レポーティングまで。現地基準と日本基準の「橋渡し」をワンチームで提供します。',
};

export default function AccountingPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AccountingHero />
        <AccountingContent />
        <Contact />
      </main>
    </div>
  );
}
