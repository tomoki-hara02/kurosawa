'use client';

import Link from 'next/link';

export default function LegalLaborHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-[#84ab52]/10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl bg-[#84ab52]/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-[#84ab52]/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
            <li className="text-gray-600">法務及び労務相談</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-4">
              Legal & Labor
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
              <span className="block">法務及び労務相談</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              契約書レビュー・労働法対応・就業規則整備・労務トラブル対応まで。
              現地法規制を熟知した専門家が、リスク管理と円滑な事業運営を支援します。
            </p>
          </div>

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
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
                <p className="text-[#84ab52]/60 text-sm">Legal & Labor Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
