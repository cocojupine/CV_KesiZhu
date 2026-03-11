export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-24 max-w-6xl mx-auto flex flex-col gap-20 selection:bg-[#06b6d4] selection:text-black">
      
      {/* 1. 首屏 Hero Section */}
      <section className="flex flex-col gap-6 mt-12">
        <h2 className="text-zinc-400 text-xl tracking-wider font-medium">Cozy Zhu</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          AI 工程与商业化的<br />创新型产品经理
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mt-4">
          浙江大学27届工业设计工程硕士。2家AI Start up联合创始人，主导AI家装与跨境直播 SaaS 产品的从 0 到 1。曾在头部大厂（AI 医疗、共享出行）担任 PM 。获20 + 计算机/设计/创业类奖项，发表 3 篇 EI / IEEE 收录的国际论文，参与2项Global项目。
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
              <span className="glass-badge">Ai Coding</span>
              <span className="glass-badge">LLM 评估</span>
              <span className="glass-badge">多模态</span>
              <span className="glass-badge">AIGC工作流</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳构建端到端的多模态工作流，单功能成本降低 70%；协助构建AIGC多模态评价系统，具备 AI 工具链重度使用与二次开发能力。
            </p>
          </div>
          <div className="glass-card flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white flex items-center gap-2"><span className="text-[#06b6d4]">✦</span> 产品架构与数据策略</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-badge">B2B/SaaS 架构设计</span>
              <span className="glass-badge">MVP 快速验证</span>
              <span className="glass-badge">QFD 评价模型</span>
              <span className="glass-badge">SQL / 核心指标拆解</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳ 创业经历及owner视角，从 0 到 1 定义"獭獭搭家"资产数据结构，哈啰出行硬件体验量化评价体系建立。
            </p>
          </div>
          <div className="glass-card flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white flex items-center gap-2"><span className="text-[#f59e0b]">✦</span> 用户体验与原型</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-badge">Figma</span>
              <span className="glass-badge">Axure</span>
              <span className="glass-badge">UI/UX 迭代</span>
              <span className="glass-badge">Kano 模型</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳ 深度梳理并协助重构科大讯飞Ai医疗系统复杂 B 端 G 端界面逻辑；主导完成"獭獭搭家"UX原型构建。
            </p>
          </div>
          <div className="glass-card flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white flex items-center gap-2"><span className="text-[#10b981]">✦</span> 国际视野与研究</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-badge">商业数据分析</span>
              <span className="glass-badge">跨国项目协同</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              ↳ 发表 3 篇 EI/IEEE 国际学术论文；南洋理工AI商业分析训练营优秀成员，KTH 瑞典皇家理工交换生，THS Global & Armarda。
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
                獭獭搭家 <span className="text-sm font-normal text-zinc-500 ml-2">| AI 驱动的家装 B2B2C SaaS 平台</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="glass-badge border-[#06b6d4]/30 text-[#06b6d4]">联合创始人 / 产品研发负责人</span>
                <span className="glass-badge">B2B SaaS 架构</span>
                <span className="glass-badge">自建工作流</span>
                <span className="glass-badge">电商 SKU/SPU 体系</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                打通"灵感生成"到"真实购买"闭环的 AI 家装平台。对 C 端用户提供一键可视化的极简设计体验，对 B 端装企与家具商提供高效的商品资产渲染与管理后台。与27家工作室、装修公司合作，获杭州良仓基地最具投资潜力奖。
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">C 端体验：1 分钟可视化生成与自动适配</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    用户输入需求后，系统快速生成高保真效果图，并精准识别图内风格，自动从数据库中匹配可购买的真实家具链接。
                  </p>
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative">
                  <video src="/tatadajia_phone.webm" className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <span className="absolute bottom-2 right-2 text-xs text-zinc-500 bg-black/50 px-2 py-1 rounded">tatadajia_phone.webm</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">B 端 SaaS：高效的资产与工作流管理</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    为 B 端客户（家居厂商）开发深度后台管理系统，重构电商 SKU+SPU 数据结构，支持通过 API 追踪每一次生成任务，并对生成的家具资产进行精细化状态管理。
                  </p>
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative">
                  <img src="/tatadajia_web.png" alt="SaaS商家后台管理系统" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 text-xs text-zinc-500 bg-black/50 px-2 py-1 rounded">tatadajia_web.png</span>
                </div>
              </div>
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 mt-2">
                <h5 className="text-white font-medium mb-2">工程架构降本与商业闭环</h5>
                <ul className="text-sm text-zinc-400 space-y-1">
                  <li>• 深入业务底层，自建生图工作流，建立"风格模板库+家具品类模型"库</li>
                  <li>• 通过本地化部署与海内外 API 成本核算，成功将单功能生成成本大幅降低 70%</li>
                  <li>• 完成向 B2B2C 模式的战略升级，成功验证 AIGC 在装企谈单场景下的商业化变现潜力</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex relative h-64 lg:h-auto rounded-2xl overflow-hidden border border-white/10">
               <img src="/tatadajia_cover.png" alt="獭獭搭家封面" className="w-full h-full object-cover" />
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