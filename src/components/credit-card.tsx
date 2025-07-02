"use client"

import type React from "react"

import { useState } from "react"
import type { CreditCard } from "@/lib/credit-cards.config"
import { cardStyles } from "@/lib/card-styles"
import { IconCardCore } from "./ui/icon-card-core"

import { FaCircleCheck } from "react-icons/fa6";

interface CreditCardProps {
  card: CreditCard
}

export default function CreditCard({ card }: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [copied, setCopied] = useState(false)

  const style = cardStyles[card.type]

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(card.secretCVV)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div
      className={`perspective-distant liquid-glass liquid-glass-card relative w-full pt-[62%] cursor-pointer transition-transform duration-700 transform-3d ${
        isFlipped ? "rotate-y-180" : ""
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 正面 */}
      <div className={`absolute inset-0 w-full h-full backface-hidden`}>
        <div className="p-6 h-full flex flex-col justify-between">
          {/* 卡片类型标识 */}
          <div className="flex justify-between items-center">
            <IconCardCore size={48} className="text-white/50"/>
            {style.logo}
          </div>

          {/* 卡号 */}
          <div className="space-y-4">
            <div className="text-2xl font-mono tracking-wider text-white">{card.number}</div>

            {/* 卡片名称 */}
            {card.name && <div className="text-sm text-white/90">{card.name}</div>}
          </div>

          {/* 底部信息 */}
          <div className="flex items-center text-white/90">
            <div className="flex flex-col text-xs scale-75 origin-left justify-center leading-none">
              <span>VALID</span>
              <span>THRD</span>
            </div>
            <div className="text-xs">{card.validThru}</div>
          </div>
        </div>
      </div>

      {/* 背面 */}
      <div
        className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180`}
      >
        <div className="p-6 flex flex-col">
          {/* 磁条 */}
          <div className="h-12 bg-white/40 mt-4 mb-6 -mx-6"></div>

          <div className="relative bg-white/20 rounded-lg p-3 overflow-hidden" onClick={handleCopy}>
            <div className={`font-mono text-sm ${style.textColor} break-all`}>{card.secretCVV}</div>
            {copied && (
              <div className="absolute inset-0 flex items-center text-white justify-center bg-black/40 gap-2">
                <FaCircleCheck size={16} />
                <span className="text-sm">已复制</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
