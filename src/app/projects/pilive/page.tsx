
"use client";
import { GridBackground } from "@/components/ui/background";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

export default function PilivePage() {
  return (
    <div className="bg-black text-zinc-300 font-sans">
      <GridBackground />

      {/* Floating Nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-zinc-900/50 border border-white/10 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-mono hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>返回首页</span>
        </Link>
      </motion.div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16 md:gap-24">
          {/* --- Sticky Sidebar --- */}
          <aside className="hidden md:block">
            <div className="sticky top-32 space-y-10">
              <motion.div {...fadeIn} className="space-y-2">
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">
                  Role
                </h3>
                <ul className="text-lg text-zinc-300">
                  <li>产品经理</li>
                  <li>AI Engineering</li>
                </ul>
              </motion.div>

              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["ASR (Whisper)", "VLM", "Next.js", "WebSocket", "Dify"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800 text-zinc-300 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">
                  Key Metrics
                </h3>
                <div className="space-y-4 pt-2">
                  <div>
                    <p className="text-2xl font-mono text-emerald-400">湾区最具潜力奖</p>
                  </div>
                  <div>
                    <p className="text-2xl font-mono text-emerald-400">字节跳动生态支持</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </aside>

          {/* --- Narrative Content --- */}
          <article>
            {/* Hero Section */}
            <motion.header
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="mb-24"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-zinc-800 text-zinc-300 text-sm font-mono px-3 py-1 rounded-full">
                  PiLive AI Live Plugin
                </span>
                <span className="text-zinc-500 font-mono text-sm">2025 - 2026</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight leading-none">
                PiLive
              </h1>
              <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mt-2">
                Live Spark Creator
              </h2>
              <p className="mt-6 text-xl md:text-2xl text-zinc-400 max-w-3xl">
                直播 AI 插件。实现“话音落、链接出”的极致交互，让直播间的每一张海报、每一句话都变成下单转化的入口。
              </p>
            </motion.header>

            {/* Video Placeholder */}
            <motion.div {...fadeIn} className="mb-24">
              <div className="aspect-video bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center">
                <p className="font-mono text-zinc-500">[Pilive_video.mp4]</p>
              </div>
              <p className="text-center text-zinc-500 text-sm mt-4">
                该视频是产品早期的一段介绍视频
              </p>
            </motion.div>
            
            {/* --- Mobile Metadata --- */}
            <div className="md:hidden space-y-10 mb-16 p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">Role</h3>
                <ul className="text-lg text-zinc-300 mt-2">
                  <li>产品经理</li>
                  <li>AI Engineering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["ASR (Whisper)", "VLM", "Next.js", "WebSocket", "Dify"].map((tech) => (
                    <span key={tech} className="bg-zinc-800 text-zinc-300 text-xs font-mono px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-500">Key Metrics</h3>
                <div className="space-y-4 pt-2">
                  <p className="text-2xl font-mono text-emerald-400">湾区最具潜力奖</p>
                  <p className="text-2xl font-mono text-emerald-400">字节跳动生态支持</p>
                </div>
              </div>
            </div>


            {/* Section 01: Context */}
            <motion.section {...fadeIn} className="mb-24">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
                <span className="font-mono text-emerald-400 text-3xl md:text-4xl">01</span> 项目背景
              </h3>
              <div className="space-y-8">
                <p className="text-xl leading-relaxed text-zinc-400 text-justify">
                  中小农户或出海非专业团队在电商直播中，面临的核心挑战已从“内容生产”转向“流量承接”。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                    <h4 className="font-bold text-white text-lg mb-2">营销内容的“转化孤岛”</h4>
                    <p className="text-zinc-400">
                      传统海报仅具展示功能，与交易系统脱节。用户需跨平台搜寻商品，导致大量潜在流量在复杂的跳转路径中流失。
                    </p>
                  </div>
                  <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                    <h4 className="font-bold text-white text-lg mb-2">直播互动的“高阻力摩擦”</h4>
                    <p className="text-zinc-400">
                      传统的“主播口播报号 + 用户点开购物车肉眼寻找”模式存在 3-5 秒的延迟，直接导致转化率的断崖式下跌。
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 02: Core Solution */}
            <motion.section {...fadeIn} className="mb-24">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
                <span className="font-mono text-emerald-400 text-3xl md:text-4xl">02</span> 核心解决方案
              </h3>
              <div className="space-y-8">
                <p className="text-xl leading-relaxed text-zinc-400 text-justify">
                  我主导设计了一套覆盖直播全生命周期的多模态确定性交互方案，将 AI 能力转化为高确定的交易触发点 (Trigger)，重塑从“内容引流”到“极简履约”的转化闭环。
                </p>
                
                <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                    <h4 className="font-bold text-white text-lg mb-2">播前引流：基于真实资产的定向场景触发</h4>
                    <p className="text-zinc-400 mt-4">
                      <b>确定性生成：</b> 坚持“先定资产，后生场景”。商家先上传真实商品图，AI 仅负责背景融合，确保海报 100% 还原真实货品，从根源规避 AI 幻觉导致的货不对板。
                    </p>
                     <p className="text-zinc-400 mt-4">
                      <b>Shoppable Image：</b> 设计图像坐标与商品 ID 的强映射逻辑。用户点击海报商品即可直达购买页，并补齐了单点裂变效率（K-factor）的精确追踪能力。
                    </p>
                </div>
              </div>
            </motion.section>

            {/* Section 03: Advanced Solution */}
            <motion.section {...fadeIn} className="mb-24">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
                <span className="font-mono text-emerald-400 text-3xl md:text-4xl">03</span> 进阶解决方案
              </h3>
               <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                    <h4 className="font-bold text-white text-lg mb-2">播中互动：ASR 驱动的“即说即弹”交互</h4>
                    <p className="text-zinc-400 mt-4">
                      <b>确定性匹配逻辑：</b> 针对视觉识别 (CV) 无法区分同类 SKU 的死穴，重构底层匹配规则：将语音关键词与唯一 SKU 强绑定。实现“话音落、链接出”，消灭用户的寻货成本。
                    </p>
                     <p className="text-zinc-400 mt-4">
                      <b>异常状态兜底 (Fallback)：</b> 设计双层降级防线：系统优先推送播控台锁定的 `Active Product`（讲解品）；若识别极其模糊，则触发聚合轮播 (Mini-Carousel)，死守每一个转化机会。
                    </p>
                </div>
            </motion.section>

            {/* Section 04: Impact */}
            <motion.section {...fadeIn}>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
                <span className="font-mono text-emerald-400 text-3xl md:text-4xl">04</span> 商业价值
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                  <h4 className="font-bold text-white text-lg mb-2">轻量化插件战略</h4>
                  <p className="text-zinc-400">
                    敏锐洞察 B 端客户“不愿跨平台迁移”的痛点，将产品转型为生态插件。这一决策极大降低了商家的接入成本，并成功切入字节跳动旗下生态。
                  </p>
                </div>
                <div className="p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl">
                  <h4 className="font-bold text-white text-lg mb-2">数据闭环验证</h4>
                  <p className="text-zinc-400">
                    补齐了从 `曝光` -> `点击` -> `跳转` 的全链路埋点。凭借严谨的转化归因模型，项目最终获得微软基金（Microsoft Fund）的资金与资源支持。
                  </p>
                </div>
              </div>
            </motion.section>
          </article>
        </div>

        {/* Footer */}
        <motion.footer
          {...fadeIn}
          className="mt-32 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>返回首页</span>
          </Link>
          <Link
            href="/projects/coming-soon"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span>下一个项目</span>
            <ArrowRight size={16} />
          </Link>
        </motion.footer>
      </main>
    </div>
  );
}
