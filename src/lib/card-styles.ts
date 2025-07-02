import { RiMastercardFill, RiVisaLine } from "react-icons/ri"
import { SiDiscover } from "react-icons/si"
import { GrAmex } from "react-icons/gr";
import { IconUnionPay } from "@/components/ui/icon-unionpay"
import React from "react"

export const cardStyles = {
  visa: {
    background: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800",
    textColor: "text-white",
    logo: React.createElement(RiVisaLine, { 
      size: 48,               // 图标大小
      color: "white",         // 图标颜色
      className: "opacity-80" // 可选：附加的 CSS 类
    }),
    logoColor: "text-white",
  },
  master: {
    background: "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
    textColor: "text-white",
    logo: React.createElement(RiMastercardFill, { 
      size: 45,
      color: "white",
      className: "opacity-80"
    }),
    logoColor: "text-white",
  },
  unionpay: {
    background: "bg-gradient-to-br from-red-600 via-red-700 to-red-800",
    textColor: "text-white",
    logo: React.createElement(IconUnionPay, { 
      size: 42,
      color: "white",
      className: "opacity-80"
    }),
    logoColor: "text-white",
  },
  amex: {
    background: "bg-gradient-to-br from-red-600 via-red-700 to-red-800",
    textColor: "text-white",
    logo: React.createElement(GrAmex, { 
      size: 48,
      color: "white",
      className: "opacity-80"
    }),
    logoColor: "text-white",
  },
  discover: {
    background: "bg-gradient-to-br from-red-600 via-red-700 to-red-800",
    textColor: "text-white",
    logo: React.createElement(SiDiscover, { 
      size: 48,
      color: "white",
      className: "opacity-80"
    }),
    logoColor: "text-white",
  },
} as const;
