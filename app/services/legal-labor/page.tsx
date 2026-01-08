import Contact from '@/app/components/Contact';
import LegalLaborHero from './components/LegalLaborHero';
import LegalLaborContent from './components/LegalLaborContent';

export const metadata = {
  title: '法務及び労務相談 | Kurosawa Consulting Vietnam',
  description:
    '契約書レビュー・労働法対応・就業規則整備・労務トラブル対応まで。現地法規制を熟知した専門家が、リスク管理と円滑な事業運営を支援します。',
};

export default function LegalLaborPage() {
  return (
    <div className="min-h-screen">
      <main>
        <LegalLaborHero />
        <LegalLaborContent />
        <Contact />
      </main>
    </div>
  );
}
