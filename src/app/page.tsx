import { creditCards } from "@/lib/credit-cards.config"
import CreditCard from "@/components/credit-card"
import MeshGradientBackground from "@/components/mesh-gradient-background"
import { MdLock } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen">

      <header className="pt-16">
        <h1 className="max-w-4xl mx-auto text-3xl md:text-5xl flex gap-1 justify-center items-center font-gd">
          <span className="liquid-glass-text">Scredit</span>
          <MdLock className="text-white/50 mt-1 size-4 md:size-8" />
          <span className="liquid-glass-text">Cards</span>
        </h1>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="p-8 rounded-xl relative z-10 text-sm text-white/90 space-y-2 liquid-glass">
          <p>
            在移动支付盛行的今天，信用卡使用频率虽然不高，但在特定场景下仍然必不可少。
            长期不使用容易忘记CVV等关键信息，特别是拥有多张信用卡时更容易混淆。
          </p>
          <p>
            因此我创建了本站用来记录我的信用卡信息，方便我随时随地查看。所有敏感信息均经过加密处理。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {creditCards.map((card) => (
            <CreditCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-10 liquid-glass p-8 text-white/90 space-y-5">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white/75">背景</h3>
            <p className="text-white/90 text-sm">某天使用信用卡在线支付时，平时常用 Paypal 但有些服务商仅支持信用卡支付；虽然 Chrome 有自动填充卡号，但 CVV 一时记不起来，实卡也不在身边；所以就想创建一个网站来记录我的信用卡信息，方便随时随地查看。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white/75">技术实现</h3>
              <ul className="space-y-1 text-sm text-white/90">
                <li><strong>技术栈：</strong>Nextjs, TypeScript, Tailwindcss</li>
                <li><strong>设计风格：</strong><a className="underline hover:text-white/75 underline-offset-2" href="https://developer.apple.com/videos/play/wwdc2025/219/" target="_blank">iOS 26 Liquid Glass</a></li>
                <li><strong>仓库地址：</strong><a className="underline hover:text-white/75 underline-offset-2" href="https://cnb.cool/boring/scredit.cards" target="_blank" rel="noopener noreferrer">cnb.cool/boring/scredit.cards</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white/75">安全性</h3>
              <ul className="space-y-1 text-sm text-white/90">
                <li>CVV 经过AES加密处理</li>
                <li>有效期经过社会工程学加密</li>
                <li>静态部署，无服务器风险</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-white/90">
            <p className="mt-2">&copy;{new Date().getFullYear()} scredit.cards</p>
          </div>
        </div>
      </footer>
      <MeshGradientBackground />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={0}
        height={0}
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves={2}
              seed={80}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={1} result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale={98}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
