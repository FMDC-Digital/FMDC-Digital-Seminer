import { useState } from 'react';

export default function FMDCWebsite() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('申し込みが送信されました。');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold">FMDC デジタルセミナー</h1>
        <p className="text-green-400">主催：三好敬太（二子玉川三好デンタルクリニック）</p>
      </header>

      <main className="p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-green-600">セミナー概要</h2>
          <p>歯科治療のデジタル化をテーマにしたセミナー。講義と実習の2部構成。</p>
          <ul className="list-disc list-inside mt-2">
            <li>対象：歯科医師</li>
            <li>会場：二子玉川三好デンタルクリニック</li>
            <li>開催頻度：不定期</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600">セミナーの特徴</h2>
          <ul className="list-disc list-inside">
            <li>午前中に講義、午後に実習</li>
            <li>6社のIOSメーカーが立ち会う実機体験会</li>
            <li>実際の口腔内スキャンの比較が可能</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600">申し込み</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input
              name="name"
              placeholder="お名前"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="メールアドレス"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <textarea
              name="message"
              placeholder="メッセージ（任意）"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <button type="submit" className="bg-green-600 text-white w-full p-2 rounded">
              申し込む
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600">お問い合わせ</h2>
          <p>ご質問がある方は、上記フォームよりメッセージを送信してください。</p>
        </section>
      </main>

      <footer className="bg-black text-white p-4 text-center mt-10">
        © {new Date().getFullYear()} FMDC Digital Seminar. All rights reserved.
      </footer>
    </div>
  );
}
