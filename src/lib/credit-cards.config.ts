export interface CreditCard {
  id: string
  number: string // 后4位
  secretCVV: string // 加密后的CVV
  type: "visa" | "master" | "unionpay" | "amex" | "discover"
  name?: string // 卡片名称（可选）
  validThru: string // 有效期（格式：MM/YY）
}

export const creditCards: CreditCard[] = [
  {
    id: "1",
    number: "•••• •••• •••• 1234",
    secretCVV: "U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y=", // 示例加密字符串
    type: "visa",
    name: "招行 全币种国际信用卡",
    validThru: "01/22",
  },
  {
    id: "2",
    number: "•••• •••• •••• 5678",
    secretCVV: "U2FsdGVkX1+3DAAudosk93jkVReiNw==", // 示例加密字符串
    type: "master",
    name: "招行 双币信用卡",
    validThru: "老婆生日月份/那一年刚好40岁",
  },
  {
    id: "3",
    number: "•••• •••• •••• 9012",
    secretCVV: "U2FsdGVkX1+ZvFb7eMsilFusXkuHlolD", // 示例加密字符串
    type: "unionpay",
    name: "银联信用卡",
    validThru: "01/22",
  },
  {
    id: "4",
    number: "•••• •••• •••• 2872",
    secretCVV: "U2FsdGVkX1+ZvFb7eMsilFusXkuHlolD", // 示例加密字符串
    type: "discover",
    name: "Discover",
    validThru: "01/22",
  },
  {
    id: "5",
    number: "•••• •••• •••• 3098",
    secretCVV: "U2FsdGVkX1+ZvFb7eMsilFusXkuHlolD", // 示例加密字符串
    type: "amex",
    name: "American Express",
    validThru: "01/22",
  },
]
