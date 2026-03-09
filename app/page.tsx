export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-24 max-w-6xl mx-auto flex flex-col gap-20 selection:bg-[#06b6d4] selection:text-black">
      
      {/* 1. 首屏 Hero Section */}
      <section className="flex flex-col gap-6 mt-12">
        <h2 className="text-zinc-400 text-xl tracking-wider font-medium">Kesi (Cozy) Zhu</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          懂 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">AI 工程</span>与<br />
          工业设计的<br />跨学科产品经理
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mt-4">
          浙江大学工业设计工程硕士。拥有 2 家 AI 初创公司联合创始人经验，主导过跨境直播与家装 SaaS 产品的从 0 到 1。热衷于用极客精神解决真实的商业问题。
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a href="mailto:SWEcozyzhu@gmail.com" className="glass-badge">✉️ SWEcozyzhu@gmail.com</a>
          <a href="https://www.linkedin.com/in/kesi-zhu" target="_blank" rel="noreferrer" className="glass-badge">💼 LinkedIn</a>
          <a href="https://github.com/cocojupine" target="_blank" rel="noreferrer" className="glass-badge">🐙 GitHub</a>
        </div>
      </section>

      {/* 2. 核心技能 Skills */}
      <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold text-white tracking-wide">核心技能 & 落地场景</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white flex items-center gap-2"><span className="text-[#8b5cf6]">✦</span> AI 工程与评估</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-badge">Cursor / Windsurf</span>
              <span className="glass-badge">ComfyUI / LoRA</span>
              <span className="glass-badge">LLM 定量评估</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳ 构建端到端多模态工作流，将单功能生成成本骤降 70%；目前正独立全栈开发效率优化智能体（Learning Agent）并计划开源。
            </p>
          </div>
          <div className="glass-card flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white flex items-center gap-2"><span className="text-[#06b6d4]">✦</span> 产品架构与策略</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-badge">B2B/SaaS 架构</span>
              <span className="glass-badge">DAU/GMV 拆解</span>
              <span className="glass-badge">SQL & Text2SQL</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳ 引入 QFD 模型驱动哈啰出行硬件体验评价体系建立；从 0 到 1 定义“獭獭搭家”电商底层商品资产数据结构。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 项目经历 Projects */}
      <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold text-white tracking-wide">核心商业落地项目</h3>
        <div className="flex flex-col gap-12">
          
          {/* 项目1 */}
          <div className="glass-card flex flex-col lg:flex-row gap-8 items-center group overflow-hidden">
            <div className="flex-1 flex flex-col gap-5 relative z-10">
              <h4 className="text-2xl font-bold text-white group-hover:text-[#06b6d4] transition-colors">
                獭獭搭家 <span className="text-sm font-normal text-zinc-500 ml-2">| B2B2C 家装 SaaS</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="glass-badge border-[#06b6d4]/30 text-[#06b6d4]">产品研发负责人</span>
                <span className="glass-badge">B2B SaaS 架构</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                打破“灵感生成”到“真实购买”闭环的 AI 平台。为 C 端提供一键可视化的极简设计体验，并自动精准匹配真实电商 SKU。同时为 B 端装企开发了深度的后台管理系统。
              </p>
            </div>
            <div className="w-full lg:w-[45%] flex relative h-64 rounded-2xl overflow-hidden border border-white/10">
               <img src="/assets/tatadajia-b.jpg" alt="SaaS商家后台" className="w-2/3 h-full object-cover absolute left-0 opacity-60" />
               <img src="/assets/tatadajia-c.jpg" alt="C端生成结果页" className="w-1/2 h-full object-cover absolute right-0 shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
            </div>
          </div>

          {/* 项目2 */}
          <div className="glass-card flex flex-col lg:flex-row-reverse gap-8 items-center group overflow-hidden">
            <div className="flex-1 flex flex-col gap-5 relative z-10">
              <h4 className="text-2xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
                PiLive <span className="text-sm font-normal text-zinc-500 ml-2">| 跨境直播 AI 助手</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="glass-badge border-[#8b5cf6]/30 text-[#8b5cf6]">联合创始人 (0-1)</span>
                <span className="glass-badge">AI 互动策略</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                打破跨境直播的技术与语言壁垒。重构基于 AI Agent 的“一键开播”极简流。系统可实时抓取处理多语言弹幕并触发互动玩法，实现直播效率指数级提升。
              </p>
            </div>
            <div className="w-full lg:w-[45%] h-64 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <span className="text-zinc-600 font-medium">PiLive 演示视频/图片占位</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}