'use client';

import Link from 'next/link';

export default function OtherHero() {
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
            <li className="text-gray-600">その他業務</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-4">
              Other Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
              <span className="block">その他業務</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              翻訳・通訳サービス、不動産コンサルティング、信用調査、秘書代行など。
              ベトナムでのビジネスに関わる様々なご要望にお応えします。
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <p className="text-[#84ab52]/60 text-sm">Other Business Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
