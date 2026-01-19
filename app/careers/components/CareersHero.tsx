'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CareersHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/ho_chi_minh.png"
          alt="Ho Chi Minh City"
          fill
          className="object-cover"
          priority
        />
        {/* 白いオーバーレイで画像を薄く */}
        <div className="absolute inset-0 bg-white/15"></div>
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white"></div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-[#84ab52]/10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl bg-[#84ab52]/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* パンくずリスト */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#84ab52] transition-colors">
                ホーム
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-600">採用情報</li>
          </ol>
        </nav>

        {/* タイトル */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
            採用情報
          </h1>
          <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light">
            RECRUIT
          </p>
        </div>
      </div>
    </section>
  );
}
