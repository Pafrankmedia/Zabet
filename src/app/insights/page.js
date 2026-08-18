import InsightsList from "@/components/InsightsList";

export const metadata = {
  title: "Strategic Insights & Analysis | ZTKL",
  description: "Deep-dives and expert analyses from ZTKL on the future of climate finance, ESG metrics, digital sovereignty, and circular operations.",
};

const articles = [
  {
    id: 1,
    category: "Digital Growth",
    title: "Decentralized Intelligence: The New SaaS Frontier",
    desc: "Why edge computing and private AI nodes are becoming the backbone of next-generation enterprise security and sustainability audits.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIofC5Dq2g_0AFk6NkHGAPnTCcY5gdkabuLj2vMfN-2viweOSb_G2suIVkCkgyU2MYZC59GkMDMXxS5WWsclS-FTHfyiP2l5T2myB-PQ28KI_i70XEKF7W1KZ0i5v6G22C0XbgLaSGwJ4CGAM9Rm9baP3ux1g0ejYOB3B0jZrO1tKKdHtcsTM4WejNuT1cmDzcxZO4eLyacvXtspSVxU1pn5CMf8TVFOxSaWJbATy1kuS0vQK_9a-zY8Gxp0U0dKN3zqq6A722oeU",
    date: "Oct 24, 2024",
    author: "Dr. Elena Vance",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Sustainability",
    title: "The Circular Corporate: Redefining Operations",
    desc: "Exploring the operational shift from linear supply chains to closed-loop ecosystems. We examine three global case studies that saved $1.2B through resource recirculation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpimbyNpPjeZK3c-x2qkOZ3qSo-3qgLR2iBmBWlyZdbgrTKfzbHko58m4ANoEDox6dD5TBhP8ljqcItQQA8H44L_h7zAzioI9afD47mtOVB1TwF18u25n-c7JLkwGwnaFAmcI4sgl5TluYlJ1hsTEIJqlpQfiRJ6YgbdeHwpi51jzFJJOmnC8bNX3-jmFKi-_qK5IJMzyJHKy37UE8gzHd_YgyXY7m3PXh9uifiVW5A17qspE3nLaenwQ2LBtnqkVCbRhBgzxyPoo",
    date: "Oct 18, 2024",
    author: "ZTKL Research",
    readTime: "15 min read",
    featured: true,
  },
  {
    id: 3,
    category: "Climate Finance",
    title: "The ROI of Renewables: A 5-Year Study",
    desc: "Hard data on why renewable energy investments are outperforming traditional fossil fuels by 14%.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcmXiNmSfkki34MT9pJIDmNMyw_YB65JSjtyZlspWSLV8OhIb1j7Wt5JxUHf5L3vD19O3RR6_XofVrIWHvzg8b4MYzmnLs-5xfaGG5XV07eAVyw2erpJhq2P0XDYUUoUkq954ypKkE0X9agCtAAjfpjFsG3DDmZLaj7WRFEAxwAoI5vt9YYLjJuNr89mnPtcRCxl5bqMt8KvOS1Y6AoeuLRdgzCChBE9nmKOzV-4ZVmns7PIbQoVoXvCV0VQ3LjucWYod3kdaP3ug",
    date: "Oct 10, 2024",
    author: "Marcus Sterling",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Governance",
    title: "The CEO's Guide to Purpose-Driven Growth",
    desc: "Transforming organizational culture to align with environmental and social governance goals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoh4JqECtfHpmmxnHyeGdAbJ-WzZ_C_IWYrDGHzenOhL8jdnrKpRUJMknnOEPUFSGWJMVD4Pb_0H9Wx_nDmzuHVpVHqassAfroUKBtGfHYR-BTCUm1eFvbQIT3ynK0Tzts8nIgw0w1nEeg5fjBtWlUUz1N68LGpwD_--VJ1YIVyjglj3JDLl8664H0cdcvYrvYd-mwaSNY2jJ6e1FGDOCIxYvWqiY2zIno3VV9-NVlI8uv1jvpIJvPqGcGL6PJ4pqLs7RZe3_MKa0",
    date: "Oct 05, 2024",
    author: "Julian Thorne",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Digital Growth",
    title: "Digital Sovereignty in the Age of AI",
    desc: "How corporations are regaining control of their data ecosystems through private cloud infrastructure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgkh1vXUzreQDCvGPANtq9yxVgo3kb7bm8vHpl8qbQD3VfjjkQGSo8ydSIYFHc4EU1jADvNt4KE9ByU51HokaMfCzclkM27aRs6MzXPnQZYVP1AoGcvu6-eGO-vnEY-YsBGUhRoz-wPKD5lNBMtgEwwh0GnBNKFakmsdk4Yw2W2NUvOhaM24TSN5-2C_0sxD60OF_E73s_KxXqJ9hIEhZjkf86RFh7hnJy3tQ7jlcVzWq_HVqIQSuygrgiHUIDtI1QL2wcD7_cxNY",
    date: "Sep 28, 2024",
    author: "Dr. Elena Vance",
    readTime: "6 min read",
    featured: false,
  },
];

export default function Insights() {
  return <InsightsList articles={articles} />;
}
