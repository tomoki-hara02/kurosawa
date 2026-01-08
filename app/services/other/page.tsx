import Contact from '@/app/components/Contact';
import OtherHero from './components/OtherHero';
import OtherContent from './components/OtherContent';

export const metadata = {
  title: 'その他業務 | Kurosawa Consulting Vietnam',
  description:
    '翻訳・通訳サービス、不動産コンサルティング、信用調査、秘書代行など。ベトナムでのビジネスに関わる様々なご要望にお応えします。',
};

export default function OtherPage() {
  return (
    <div className="min-h-screen">
      <main>
        <OtherHero />
        <OtherContent />
        <Contact />
      </main>
    </div>
  );
}
