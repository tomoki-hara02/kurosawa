'use client';

import { useState } from 'react';

type JobCategory = 'consultant' | 'accounting' | 'admin';

type InterviewItem = {
  name: string;
  position: string;
  joinYear: string;
  message: string;
};

const interviews: InterviewItem[] = [
  {
    name: '田中 太郎',
    position: 'シニアコンサルタント',
    joinYear: '2018年入社',
    message:
      'ベトナムでのビジネス支援は、毎日が新しい挑戦の連続です。日系企業の海外進出を支援し、お客様の成功を間近で見届けられることにやりがいを感じています。',
  },
  {
    name: 'Nguyen Thi Mai',
    position: 'コンサルタント',
    joinYear: '2020年入社',
    message:
      '日本語を活かしながら、母国ベトナムの発展に貢献できる仕事です。日本企業の文化や商習慣を学びながら、両国の架け橋になれることを誇りに思います。',
  },
  {
    name: '鈴木 花子',
    position: '会計マネージャー',
    joinYear: '2019年入社',
    message:
      'ベトナムの会計制度は日本と異なる点も多く、専門性を高められる環境です。チームで協力しながらクライアントの課題を解決していく過程にやりがいを感じます。',
  },
];

export default function CareersContent() {
  const [activeTab, setActiveTab] = useState<JobCategory>('consultant');

  const tabs = [
    { id: 'consultant' as JobCategory, label: 'コンサルタント' },
    { id: 'accounting' as JobCategory, label: '会計スタッフ' },
    { id: 'admin' as JobCategory, label: '事務スタッフ' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 採用情報タブ */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 text-center">
            採用情報
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-medium transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-[#84ab52] text-white border-[#84ab52]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#84ab52] hover:text-[#84ab52]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* コンサルタント募集 */}
        {activeTab === 'consultant' && (
          <div className="space-y-20">
            {/* セクションヘッダー */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
                コンサルタント募集
              </h3>
              <p className="text-[#84ab52] text-sm tracking-[0.2em] uppercase">
                RECRUITMENT OF CONSULTANTS
              </p>
            </div>

            {/* 事務所の理念 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                事務所の理念
              </h4>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed mb-6">
                  Kurosawa Consulting
                  Vietnamは、ホーチミンを拠点に、日系企業のベトナム進出・事業運営を総合的にサポートするコンサルティング会社です。
                  会計税務、法人設立、M&A、各種許認可申請から、労務相談まで幅広い分野を扱っています。
                </p>
                <p className="leading-relaxed mb-6">
                  私たちは、単なるサービス提供者ではなく、お客様のビジネスパートナーとして、ベトナム市場での成功を共に目指しています。
                  専門性を高め、従来の固定観念にとらわれず、新しい価値を創造し社会に貢献できる存在でありたいと考えています。
                </p>
                <p className="leading-relaxed">
                  将来的に専門分野を持って自己実現を図りたい方、ベトナムと日本の架け橋となる仕事がしたい方に対して、活躍の場を提供します。
                </p>
              </div>
            </div>

            {/* 求められる人物像 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                求められる人物像
              </h4>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed mb-6">
                  当社のコンサルタントは、新人・経験者を問わず、謙虚な気持ちで継続的に知識の取得・研鑽を行い、
                  自分自身の専門分野を発展させ、チームの一員として責任を持って業務を遂行することが求められます。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>自己研鑽の強い意欲を持ち、常に学び続ける姿勢がある方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>お客様の課題に真摯に向き合い、解決策を提案できる方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>異文化を尊重し、柔軟なコミュニケーションができる方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>将来的に事務所の柱となる意欲と能力のある方</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* キャリアパス */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                キャリアパス
              </h4>
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p className="leading-relaxed mb-6">
                  入社後、一定期間はコンサルタントとして必要な基本的な知識や経験を積んでいただきます。
                  当社は取り扱い分野ごとに専門チームを設けており、幅広い業務を経験し、成長することができます。
                </p>
                <p className="leading-relaxed">
                  専門分野は自分で選ぶことができ、会社が指定することはありません。
                  従来のコンサルティング業務から選ぶだけでなく、新しい分野や業務にチャレンジし、専門化していくことも可能です。
                </p>
              </div>

              {/* キャリアパスフロー */}
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    step: 'STEP 1',
                    title: 'アシスタント',
                    period: '1〜2年目',
                    desc: '基礎業務を習得',
                  },
                  {
                    step: 'STEP 2',
                    title: 'コンサルタント',
                    period: '3〜5年目',
                    desc: '案件を担当',
                  },
                  {
                    step: 'STEP 3',
                    title: 'シニア',
                    period: '6〜8年目',
                    desc: 'チームをリード',
                  },
                  {
                    step: 'STEP 4',
                    title: 'マネージャー',
                    period: '9年目〜',
                    desc: '部門を統括',
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gray-50 p-6 text-center h-full">
                      <p className="text-[#84ab52] text-xs tracking-wider mb-2">{item.step}</p>
                      <h5 className="text-lg font-medium text-gray-800 mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <svg
                          className="w-4 h-4 text-[#84ab52]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* インタビュー */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                社員インタビュー
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {interviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#84ab52]/20 to-[#84ab52]/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-[#84ab52]/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-center mb-4">
                      <h5 className="text-lg font-medium text-gray-800">{item.name}</h5>
                      <p className="text-sm text-[#84ab52]">{item.position}</p>
                      <p className="text-xs text-gray-400">{item.joinYear}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 執務環境 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                執務環境
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'オフィス外観', desc: 'ホーチミン1区の好立地' },
                  { name: 'エントランス', desc: '明るく開放的な空間' },
                  { name: 'ワークスペース', desc: '快適な作業環境' },
                  { name: '会議室', desc: 'クライアント対応に最適' },
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg overflow-hidden mb-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 募集要項 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                募集要項
              </h4>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { label: '職種', value: 'コンサルタント / アシスタントコンサルタント' },
                      { label: '雇用形態', value: '正社員' },
                      { label: '勤務地', value: 'ホーチミンオフィス（ベトナム）' },
                      { label: '勤務時間', value: '8:30〜17:30（休憩1時間）' },
                      { label: '休日', value: '土日祝日、ベトナムの祝日、年末年始' },
                      {
                        label: '給与',
                        value: '経験・能力を考慮の上、当社規定により決定\n※日本人の場合は住宅手当あり',
                      },
                      {
                        label: '福利厚生',
                        value: '社会保険完備、健康保険、賞与年1回、昇給年1回、研修制度',
                      },
                      {
                        label: '応募資格',
                        value:
                          '大卒以上\n会計・法務・経営コンサルティング経験者優遇\n日本語ビジネスレベル必須',
                      },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-800 w-1/4 border-b border-gray-100">
                          {row.label}
                        </th>
                        <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100 whitespace-pre-line">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 会計スタッフ募集 */}
        {activeTab === 'accounting' && (
          <div className="space-y-20">
            {/* セクションヘッダー */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
                会計スタッフ募集
              </h3>
              <p className="text-[#84ab52] text-sm tracking-[0.2em] uppercase">
                RECRUITMENT OF ACCOUNTING STAFF
              </p>
            </div>

            {/* 業務内容 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                業務内容
              </h4>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed mb-6">
                  日系企業クライアントの会計・記帳代行業務、月次・年次決算のサポート、税務申告書類の作成補助などを担当していただきます。
                  ベトナムの会計基準と日本の会計基準の両方を理解し、クライアントに最適なサービスを提供します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>月次・年次決算業務</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>記帳代行・会計データ入力</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>税務申告書類の作成補助</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#84ab52] flex-shrink-0 mt-2"></span>
                    <span>クライアントとのコミュニケーション</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 募集要項 */}
            <div>
              <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-200">
                募集要項
              </h4>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { label: '職種', value: '会計スタッフ' },
                      { label: '雇用形態', value: '正社員' },
                      { label: '勤務地', value: 'ホーチミンオフィス（ベトナム）' },
                      { label: '勤務時間', value: '8:30〜17:30（休憩1時間）' },
                      { label: '休日', value: '土日祝日、ベトナムの祝日、年末年始' },
                      { label: '給与', value: '経験・能力を考慮の上、当社規定により決定' },
                      {
                        label: '福利厚生',
                        value: '社会保険完備、健康保険、賞与年1回、昇給年1回',
                      },
                      {
                        label: '応募資格',
                        value:
                          '会計または関連分野での学位\n会計実務経験2年以上\n日本語または英語でのコミュニケーション能力',
                      },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-800 w-1/4 border-b border-gray-100">
                          {row.label}
                        </th>
                        <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100 whitespace-pre-line">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 事務スタッフ募集 */}
        {activeTab === 'admin' && (
          <div className="space-y-20">
            {/* セクションヘッダー */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
                事務スタッフ募集
              </h3>
              <p className="text-[#84ab52] text-sm tracking-[0.2em] uppercase">
                RECRUITMENT OF ADMINISTRATIVE STAFF
              </p>
            </div>

            {/* 現在募集なし */}
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-2">現在、募集はありません。</p>
              <p className="text-sm text-gray-400">
                募集が開始された際には、こちらのページでお知らせします。
              </p>
            </div>
          </div>
        )}

        {/* 採用窓口 */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h4 className="text-xl md:text-2xl font-light text-gray-800 mb-8 text-center">
            採用窓口
          </h4>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  <span className="block text-sm text-gray-500 mb-1">住所</span>
                  123 Nguyen Hue Street, District 1, Ho Chi Minh City, Vietnam
                  <br />
                  Kurosawa Consulting Vietnam 採用担当係 宛
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-600">
                  <p>
                    <span className="text-sm text-gray-500">TEL /</span> +84-28-1234-5678
                  </p>
                  <p>
                    <span className="text-sm text-gray-500">FAX /</span> +84-28-1234-5679
                  </p>
                </div>
              </div>
              <a
                href="mailto:careers@kurosawa-consulting.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#84ab52] text-white font-medium rounded-lg hover:bg-[#6d9143] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                メールでのお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
