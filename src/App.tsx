const navItems = [
  { label: '关于我们', href: '#about' },
  { label: '发展历程', href: '#milestones' },
  { label: '解决方案', href: '#services' },
  { label: '客户案例', href: '#cases' },
  { label: '联系我们', href: '#contact' }
]

const quickLinks = [
  { icon: '🏡', label: '数字乡村', href: '#prod-village', tone: 'mint' },
  { icon: '📦', label: '物流仓储', href: '#prod-logistics', tone: 'blue' },
  { icon: '🛒', label: '乡村电商', href: '#prod-ecommerce', tone: 'amber' },
  { icon: '🎬', label: '助农直播', href: '#prod-live', tone: 'rose' },
  { icon: '🤖', label: 'AI Agent', href: '#prod-agent', tone: 'violet' }
]

const stats = [
  { num: '50+', label: '服务乡镇' },
  { num: '5千+', label: '平台注册用户' },
  { num: '99.9%', label: '系统可用性' },
  { num: '20+', label: '生态合作伙伴' }
]

const products = [
  {
    id: 'prod-village',
    tag: '核心产品',
    tone: 'mint',
    title: '数字乡村综合治理平台',
    description:
      '面向县、乡、村三级政府的一体化数字治理平台。以"一屏观全域、一网管全村"为设计理念，整合村务管理、智慧农业、网格化服务、便民服务大厅、数据决策大屏五大核心模块，实现乡村治理从纸质台账到数据驱动的跨越。',
    chips: ['村务管理', '智慧农业', '网格治理', '便民大厅', '决策大屏', '党建管理'],
    cardClass: 'product-visual village',
    icon: '🏡',
    metricTitle: '📊 村务总览',
    metricValue: '1,286',
    metricNote: '在管村民（户）',
    sideBars: true
  },
  {
    id: 'prod-logistics',
    tag: '供应链',
    tone: 'blue',
    title: '农产品智能仓储物流系统',
    description:
      '专为农产品流通设计的仓储与物流一体化系统。支持常温仓与冷链仓协同管理、智能补货预测、配送路线优化、全链路温度监控与溯源。帮助农产品从产地到消费者手中全程可视、可控、可追溯。',
    chips: ['WMS 仓管', '冷链监控', '路线优化', '库存预测', '溯源追踪'],
    cardClass: 'product-visual logistics',
    icon: '📦',
    metricAlign: 'right',
    metricTitle: '📍 在途追踪',
    metricValue: '342',
    metricNote: '在途订单',
    reverse: true
  },
  {
    id: 'prod-ecommerce',
    tag: '增长引擎',
    tone: 'amber',
    title: '乡村电商 SaaS 平台',
    description:
      '为县域农产品上行量身定制的全渠道电商解决方案。从开店、选品、定价到用户运营、品牌包装，提供"拎包入驻"式服务。打通微信小程序、抖音小店、自建商城多端销售，让好产品不再困在深山里。',
    chips: ['多端开店', '产销对接', '品牌孵化', '用户运营', '数据分析'],
    cardClass: 'product-visual ecommerce',
    icon: '🛒',
    metricTitle: '💰 交易数据',
    metricValue: '¥86.4k',
    metricNote: '日均 GMV'
  },
  {
    id: 'prod-live',
    tag: '流量中心',
    tone: 'rose',
    title: '助农直播一体化平台',
    description:
      '不只是直播工具，更是一套完整的助农直播运营体系。从主播招募培训、直播场景搭建、选品排品策略到流量投放与数据复盘，全流程赋能。已累计孵化乡村主播 30+ 人，单场最高 GMV 突破 15 万。',
    chips: ['主播培训', '场景搭建', '流量运营', '数据复盘', '选品策略'],
    cardClass: 'product-visual live',
    icon: '🎬',
    metricAlign: 'right',
    metricTitle: '🔴 直播中',
    metricValue: '3.2k',
    metricNote: '在线观看',
    reverse: true
  },
  {
    id: 'prod-agent',
    tag: 'AI 驱动',
    tone: 'violet',
    title: '乡村智能 Agent 服务',
    description:
      '基于大语言模型构建的乡村专属 AI 助手。可对接政务服务、农技咨询、电商客服、内部运营等场景，支持自然语言交互，7×24 小时在线。村民问农技问题、查政策、办事预约，一个 Agent 全搞定。',
    chips: ['政务助手', '农技问答', '电商客服', '知识库', '多端接入'],
    cardClass: 'product-visual agent',
    icon: '🤖',
    metricTitle: '💬 智能应答',
    metricValue: '4,821',
    metricNote: '今日自动处理'
  }
]

const cases = [
  {
    location: '浙江 · 杭州',
    icon: '🏔️',
    tone: 'mint',
    title: '杭州市淳安县数字乡村试点',
    description:
      '为淳安县 5 个乡镇部署数字乡村综合治理平台，实现村务线上办理、农情实时监测、网格事件 2 小时响应。村民办事从"跑三趟"变成"零跑腿"。',
    metrics: [
      { num: '5', label: '覆盖乡镇' },
      { num: '75%', label: '办事线上化率' },
      { num: '50%', label: '效率提升' }
    ]
  },
  {
    location: '浙江 · 衢州',
    icon: '🍊',
    tone: 'blue',
    title: '衢州市农产品上行电商工程',
    description:
      '为衢州特色农产品（柑橘、茶叶、土鸡）搭建电商 + 直播一体化销售体系，培训乡村主播 20+ 人，3 个月线上销售额突破 150 万元。',
    metrics: [
      { num: '20+', label: '培训主播' },
      { num: '150万', label: '季度销售额' },
      { num: '8', label: '品牌孵化' }
    ]
  },
  {
    location: '浙江 · 丽水',
    icon: '🚛',
    tone: 'amber',
    title: '丽水市冷链物流数字化试点',
    description:
      '为丽水市果蔬产业部署智能仓储 + 冷链追溯系统，打通从产地到杭州、上海的冷链干线物流，损耗率从 15% 降至 6% 以下。',
    metrics: [
      { num: '6%', label: '损耗率' },
      { num: '25%', label: '成本降低' },
      { num: '2', label: '覆盖仓库' }
    ]
  }
]

const values = [
  {
    icon: '🌱',
    tone: 'mint',
    title: '扎根基层',
    description: '每款产品都来自驻村调研，我们的产品经理年均驻村超过 120 天，确保每个功能都解决真实痛点。'
  },
  {
    icon: '🚀',
    tone: 'blue',
    title: '技术平权',
    description: '让乡镇干部用上和一线城市同样好用的数字工具，让村民享受和城市居民同等便捷的数字服务。'
  },
  {
    icon: '🤝',
    tone: 'amber',
    title: '生态共建',
    description: '我们不做封闭系统，开放 API、对接主流平台、与地方生态共建，让数字化投入产出最大化。'
  },
  {
    icon: '💡',
    tone: 'violet',
    title: '持续进化',
    description: '每两周一次产品迭代，每季度一次架构升级。不追概念，只追实际效果的可度量提升。'
  },
  {
    icon: '🎯',
    tone: 'rose',
    title: '效果可量化',
    description: '每个项目都有明确的 KPI：办事效率提升比、农产品销售增长率、物流损耗下降率。用数据说话。'
  },
  {
    icon: '🌍',
    tone: 'cyan',
    title: '普惠初心',
    description: '让 3 万元预算的乡镇也能启动数字化。我们提供标准版 + 定制版灵活方案，不让预算成为门槛。'
  }
]

const milestones = [
  {
    year: '2026 · Q2',
    title: '星联云枢成立',
    description:
      '公司在杭州注册成立，核心团队来自阿里、华为、字节跳动。确立"让数字化服务于千家万户"的企业使命，聚焦数字乡村赛道。',
    tone: 'blue'
  },
  {
    year: '2026 · Q3',
    title: '首批驻村调研启动',
    description:
      '团队深入浙江省内杭州、衢州、丽水等地 15+ 个乡镇，完成 150+ 份村干部和村民访谈，形成数字乡村产品需求白皮书。',
    tone: 'cyan'
  }
]

const partners = ['阿里云', '腾讯云', '华为云', '中国邮政', '顺丰速运', '中国农业银行', '抖音电商', '拼多多']

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-group">
            <a className="brand" href="/">
              <span className="brand-mark">枢</span>
              <span>星联云枢</span>
            </a>
            <nav className="nav">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <a className="consult-link" href="#contact">
            免费咨询
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-inner section-narrow">
            <div className="hero-badge">🌾 深耕数字乡村 · 赋能乡村振兴</div>
            <h1>
              让数字化
              <br />
              <em>服务于千家万户</em>
            </h1>
            <p className="hero-text">
              星联云枢是一家专注于数字乡村建设的科技企业。我们以"让每个乡镇都用得起、用得好数字化工具"为目标，
              围绕乡村治理、农产品流通、乡村电商、助农直播与 AI 智能服务五大板块，构建覆盖县-乡-村三级的数字化基础设施。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#services">
                查看解决方案 →
              </a>
              <a className="secondary-button" href="#contact">
                预约产品演示
              </a>
            </div>
          </div>
        </section>

        <section className="quick-links-wrap">
          <div className="quick-links">
            {quickLinks.map((item) => (
              <a key={item.label} className="quick-card" href={item.href}>
                <span className={`quick-icon tone-${item.tone}`}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section section-soft">
          <div className="stats-grid container-wide">
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <strong>{item.num}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <p className="section-footnote">截至 2026 年 Q3，星联云枢内部统计</p>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p>关于星联云枢</p>
            <h2>我们的价值观</h2>
            <div>星联云枢成立于 2026 年，总部位于杭州，是一家专注数字乡村基础设施建设的科技企业。我们相信，技术不应只服务于一线城市，而应扎根到每一个村庄、每一条田埂。</div>
          </div>

          <div className="value-grid container-wide">
            {values.map((item) => (
              <article key={item.title} className="value-card">
                <span className={`value-icon tone-${item.tone}`}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="milestones">
          <div className="section-heading">
            <p>发展历程</p>
            <h2>大事记</h2>
          </div>

          <div className="timeline">
            {milestones.map((item) => (
              <article key={item.title} className="timeline-item">
                <span className={`timeline-dot tone-${item.tone}`} />
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p>解决方案</p>
            <h2>五大产品矩阵，构建乡村数字化闭环</h2>
            <div>从治理到交易，从物流到智能，打通数字乡村建设的每一个环节</div>
          </div>

          <div className="product-stack container-wide">
            {products.map((item) => (
              <article key={item.id} className={`product-row ${item.reverse ? 'reverse' : ''}`} id={item.id}>
                <div className={item.cardClass}>
                  <div className="visual-core">{item.icon}</div>
                  <div className={`visual-metric ${item.metricAlign === 'right' ? 'metric-right' : ''}`}>
                    <span>{item.metricTitle}</span>
                    <strong>{item.metricValue}</strong>
                    <small>{item.metricNote}</small>
                  </div>
                  {item.sideBars ? (
                    <div className="mini-bars">
                      <i className="bar-green" />
                      <i className="bar-cyan" />
                      <i className="bar-blue" />
                      <small>网格事件处理率</small>
                    </div>
                  ) : null}
                  <div className="visual-note">* 产品界面效果演示</div>
                </div>

                <div className="product-copy">
                  <span className={`product-tag tone-${item.tone}`}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="chip-list">
                    {item.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                  <a className="detail-link" href="#contact">
                    了解详情 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="cases">
          <div className="section-heading">
            <p>客户案例</p>
            <h2>他们正在用星联云枢</h2>
            <div>从粤北山区到西南腹地，数字化正在改变每一个乡镇</div>
          </div>

          <div className="case-grid container-wide">
            {cases.map((item) => (
              <article key={item.title} className="case-card">
                <div className={`case-visual tone-${item.tone}`}>
                  <span>{item.icon}</span>
                  <label>{item.location}</label>
                </div>
                <div className="case-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="case-metrics">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.num}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p>合作伙伴</p>
            <h2>与行业领先者同行</h2>
          </div>

          <div className="partner-grid container-wide">
            {partners.map((item) => (
              <div key={item} className="partner-card">
                {item}
              </div>
            ))}
          </div>
          <p className="section-footnote">* 合作伙伴 Logo 展示位，请替换为已授权使用的合作方标识</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="contact-inner container-wide">
            <h2>让我们一起，把数字化送到每个村口</h2>
            <p>无论您是地方政府、农业龙头企业、物流服务商还是技术合作伙伴，欢迎联系我们探讨合作。</p>
            <a className="primary-button" href="mailto:1573504XXXX@163.com">
              发送合作邮件 →
            </a>

            <div className="contact-grid">
              <article>
                <span>邮箱</span>
                <strong>
                  <a href="mailto:1573504XXXX@163.com">1573504XXXX@163.com</a>
                </strong>
              </article>
              <article>
                <span>商务电话</span>
                <strong>1573504XXXX</strong>
              </article>
              <article>
                <span>总部地址</span>
                <strong>浙江省杭州市拱墅区中国智慧产业园</strong>
              </article>
              <article>
                <span>官网</span>
                <strong>
                  <a href="https://www.slhubcloud.com">www.slhubcloud.com</a>
                </strong>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top container-wide">
          <div className="footer-brand">
            <a className="brand" href="/">
              <span className="brand-mark">枢</span>
              <span>星联云枢</span>
            </a>
            <p>
              星联云枢专注数字乡村基础设施建设，致力于让数字化服务于千家万户。以技术连接乡村与城市，让每一个人都能享受数字化带来的便利与机会。
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>解决方案</h4>
              <a href="#prod-village">数字乡村</a>
              <a href="#prod-logistics">物流仓储</a>
              <a href="#prod-ecommerce">乡村电商</a>
              <a href="#prod-live">助农直播</a>
              <a href="#prod-agent">AI Agent</a>
            </div>
            <div>
              <h4>关于</h4>
              <a href="#about">公司介绍</a>
              <a href="#cases">客户案例</a>
              <a href="#milestones">发展历程</a>
              <a href="#contact">加入我们</a>
              <a href="#contact">新闻动态</a>
            </div>
            <div>
              <h4>联系我们</h4>
              <a href="mailto:1573504XXXX@163.com">1573504XXXX@163.com</a>
              <a href="tel:1573504XXXX">1573504XXXX</a>
              <a href="#contact">商务合作</a>
              <a href="#contact">媒体联络</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom container-wide">
          <span>© 2026 浙江星联云枢科技有限公司. All rights reserved.</span>
          <span>
            <a href="#contact">隐私政策</a> · <a href="#contact">服务条款</a> ·{' '}
            <a href="https://www.slhubcloud.com">www.slhubcloud.com</a>
          </span>
        </div>
        <div className="footer-icp">浙ICP备XXXXXXXX号-1</div>
      </footer>
    </div>
  )
}

export default App
