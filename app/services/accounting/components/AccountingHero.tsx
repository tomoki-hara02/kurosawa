'use client';

import Link from 'next/link';

export default function AccountingHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-[#84ab52]/10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl bg-[#84ab52]/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-[#84ab52]/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* パンくずリスト */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#84ab52] transition-colors">
                TOP
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-[#84ab52] transition-colors">
                サービス
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-600">会計税務コンサルティング</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div>
            <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-4">
              Accounting & Tax
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
              <span className="block">会計税務</span>
              <span className="block">コンサルティング</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              帳簿作成・月次/年次決算・税務申告・監査対応・日本連結レポーティングまで。
              現地基準と日本基準の「橋渡し」をワンチームで提供します。
            </p>
          </div>

          {/* イメージエリア */}
          <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#84ab52]/20 to-[#84ab52]/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-[#84ab52]/40 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-[#84ab52]/60 text-sm">Accounting & Tax Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
