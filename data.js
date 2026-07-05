const domesticPolicies = [
    {
        date: '2026-07-02',
        title: '《加快推进人工智能赋能科学研究实施方案（2026—2028年）》',
        level: '地方',
        region: '北京',
        publisher: '中共北京市委教育科技人才工作领导小组',
        supervisor: '北京市科委、中关村管委会',
        source: 'http://finance.people.com.cn/n1/2026/0703/c1004-40752511.html',
        highlights: [
            '到2028年AI赋能科学研究基础理论和关键技术取得重大原创突破',
            '努力建成辐射全球的科学智能创新中枢',
            '围绕自主实验室建设、标杆场景应用、科学模型构建、科学数据供给、创新生态营造五大方向'
        ],
        diff: '此前北京发布的AI政策多集中于产业应用，本次方案首次专门针对科学研究领域，强调AI for Science方向，填补了基础研究赋能的政策空白。',
        tags: ['AI for Science', '科学研究', '北京', '创新中枢']
    },
    {
        date: '2026-07-01',
        title: '《互联网信息服务算法推荐管理规定》修订草案征求意见',
        level: '中央',
        region: '全国',
        publisher: '国家互联网信息办公室',
        supervisor: '国家网信办、工信部、公安部、市场监管总局',
        source: 'https://content-static.cctvnews.cctv.com/snow-book/index.html?channelId=1215&item_id=13364574677984378860',
        highlights: [
            '专门设置"智能信息服务"专节',
            '对应用人工智能技术提供互联网信息服务进行规范',
            '要求采取技术、人工等方式加强对生成合成信息内容的管理'
        ],
        diff: '相较于2022年原规定，本次修订新增了对AI生成内容的专门管理要求，明确将AIGC纳入算法监管范围，体现了监管从推荐算法向生成式AI的延伸。',
        tags: ['算法备案', 'AIGC', '内容监管', '网信办']
    },
    {
        date: '2026-06-17',
        title: '《深圳市龙岗区关于支持人工智能产业引领高质量发展若干措施（修订版）》',
        level: '地方',
        region: '深圳龙岗区',
        publisher: '深圳市龙岗区工业和信息化局',
        supervisor: '龙岗区人民政府',
        source: 'https://www.lg.gov.cn/gkmlpt/content/12/12847/mpost_12847331.html',
        highlights: [
            '对AI企业给予租金补贴、研发资助、人才引进等多维度支持',
            '重点支持大模型、智能芯片、机器人等核心领域',
            '设立专项产业基金'
        ],
        diff: '修订版在原版基础上加大了对大模型企业的扶持力度，新增算力补贴条款，并将补贴上限提高50%，反映了深圳对AI产业竞争的紧迫性。',
        tags: ['深圳', '产业扶持', '大模型', '算力补贴']
    },
    {
        date: '2026-06-03',
        title: '《"人工智能+信息通信"创新发展实施意见（2026—2028年）》',
        level: '中央',
        region: '全国',
        publisher: '工业和信息化部',
        supervisor: '工信部信息通信发展司',
        source: 'https://m.thepaper.cn/newsDetail_forward_33520036',
        highlights: [
            '至2028年培育30个以上高价值AI融合应用场景',
            '围绕推动信息通信行业智能化升级等四个方面部署17项具体任务',
            '夯实人工智能发展底座、深化融合应用创新推广'
        ],
        diff: '这是工信部首个专门针对"AI+信息通信"的综合性文件，将AI与5G、算力网络等新型基础设施深度融合，与此前单一技术政策形成互补。',
        tags: ['工信部', '5G', '算力网络', '融合应用']
    },
    {
        date: '2026-04-10',
        title: '《人工智能拟人化互动服务管理暂行办法》',
        level: '中央',
        region: '全国',
        publisher: '国家网信办、国家发改委、工信部、公安部、市场监管总局',
        supervisor: '国家网信办',
        source: 'http://cpc.people.com.cn/BIG5/n1/2026/0413/c64387-40700176.html',
        highlights: [
            '自2026年7月15日起施行',
            '规范AI数字人、虚拟主播等拟人化服务',
            '要求显著标识AI生成内容，保护用户知情权',
            '建立内容审核和安全评估机制'
        ],
        diff: '这是中国首部专门针对AI拟人化互动服务的部门规章，填补了数字人服务监管空白。相比《生成式AI服务管理暂行办法》，更聚焦交互场景和身份标识问题。',
        tags: ['数字人', '拟人化', '内容标识', '七部门']
    },
    {
        date: '2026-03-15',
        title: '《人工智能科技伦理审查与服务办法（试行）》',
        level: '中央',
        region: '全国（先导区试点）',
        publisher: '工信部、国家发改委、教育部、科技部等十部门',
        supervisor: '工信部科技司',
        source: 'https://www.smartcity.team/policies/大模型政策库/ai伦理管理制度/',
        highlights: [
            '在北京、上海、广东、山东、天津、四川、江苏、湖北、湖南、浙江等先导区省份实施',
            '建立科技伦理审查制度',
            '设立人工智能伦理委员会'
        ],
        diff: '首次在国家层面建立AI伦理审查制度，与2023年的《科技伦理审查办法》相比，专门针对AI领域细化审查标准和流程，体现从通用科技伦理向AI专项伦理的深化。',
        tags: ['科技伦理', '审查制度', '先导区', '十部门']
    }
];

const internationalPolicies = [
    {
        date: '2026-07-05',
        title: 'EU Digital Omnibus on AI Political Agreement',
        level: '国家/联盟',
        country: '欧盟',
        publisher: 'European Commission, European Parliament, Council of the EU',
        source: 'https://ec.europa.eu/commission/presscorner/detail/en/mex_26_1030',
        highlights: [
            'Simpler, innovation-friendly rules for AI',
            'Maintains benefits for European society, safety and fundamental rights',
            'Sets clear implementation timeline for businesses'
        ],
        diff: 'The Omnibus amends the AI Act to simplify implementation for EU businesses while maintaining core protections. Compared to the original AI Act (2024), it reduces reporting burdens for SMEs and clarifies high-risk system definitions.',
        tags: ['EU AI Act', 'Omnibus', 'Simplification', 'SMEs']
    },
    {
        date: '2026-06-04',
        title: 'AI for All: Canada\'s New National AI Strategy',
        level: '国家',
        country: '加拿大',
        publisher: 'Government of Canada, Prime Minister\'s Office',
        source: 'https://www.pm.gc.ca/en/news/speeches/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial',
        highlights: [
            'Three guiding principles: Trust, Opportunity, Leadership',
            'Protect data, privacy, and children',
            'Empower Canadian workers, businesses, and students',
            'Establish Canada as a global AI leader'
        ],
        diff: 'Replaces the 2017 Pan-Canadian AI Strategy. The new strategy shifts focus from pure research to broader societal integration, emphasizing governance and inclusivity alongside innovation.',
        tags: ['Canada', 'National Strategy', 'Trust', 'Inclusivity']
    },
    {
        date: '2026-06-02',
        title: 'Executive Order on Promoting Advanced AI Innovation and Security',
        level: '国家',
        country: '美国',
        publisher: 'The White House, President Donald J. Trump',
        source: 'https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/',
        highlights: [
            'Promotes AI innovation while strengthening cybersecurity',
            'Explicitly prohibits mandatory governmental licensing for AI models',
            'America First cybersecurity effort',
            'Protects American ingenuity and IP from adversaries'
        ],
        diff: 'Reverses the Biden Administration\'s more regulatory approach (EO 14110). The Trump EO eliminates licensing requirements and shifts to voluntary, industry-led frameworks. This represents a fundamental deregulation pivot from the previous administration\'s mandatory reporting rules.',
        tags: ['Trump', 'Deregulation', 'Innovation', 'Cybersecurity']
    },
    {
        date: '2026-05-07',
        title: 'EU AI Act Omnibus Provisional Agreement',
        level: '国家/联盟',
        country: '欧盟',
        publisher: 'Council of the EU, European Parliament',
        source: 'https://pressreview.eu/eu-ai-act-omnibus-deal-high-risk-delay-december-2027-nudification-ban-14-may-2026/',
        highlights: [
            'Delays high-risk AI system compliance to December 2, 2027',
            'Adds prohibition on AI "nudification" apps',
            'Postpones certain requirements to August 2, 2028',
            'Simplifies selected aspects while maintaining core principles'
        ],
        diff: 'The Omnibus significantly extends the original AI Act timeline (high-risk was August 2, 2026). This 16-month delay gives businesses more preparation time but adds new prohibitions on deepfake/nudification tools not in the original text.',
        tags: ['AI Act', 'High-Risk Delay', 'Deepfake', 'Nudification Ban']
    },
    {
        date: '2026-02-15',
        title: 'National AI Strategy 2.0 Update',
        level: '国家',
        country: '新加坡',
        publisher: 'Ministry of Digital Development and Information, Singapore',
        source: 'https://www.mddi.gov.sg/newsroom/update-to-singapore-s-national-ai-strategy--refreshed-priorities-to-harness-ai-for-the-public-good-factsheet/',
        highlights: [
            '10 refreshed priorities across NAIS Enablers',
            'National AI Council (NAIC) established, chaired by PM Wong',
            'Focus on harnessing AI for public good',
            'Builds on progress since NAIS 2.0'
        ],
        diff: 'Updates the 2023 NAIS 2.0 with refreshed priorities. The establishment of the National AI Council at Prime Minister level signals elevated political commitment. More emphasis on governance and public sector deployment than the previous version.',
        tags: ['Singapore', 'NAIS 2.0', 'Public Good', 'Governance']
    },
    {
        date: '2026-01-10',
        title: 'AI Safety Bill Enacted',
        level: '国家',
        country: '英国',
        publisher: 'UK Parliament',
        source: 'https://zennews24.co.uk/article/uk-passes-landmark-ai-safety-bill-into-law/',
        highlights: [
            'Covers AI systems across 14 designated high-risk sectors',
            'Civil penalties up to £17 million or 4% of global turnover',
            'AI Safety Institute evaluates frontier models before and after deployment',
            'Includes healthcare, criminal justice, financial services, critical infrastructure'
        ],
        diff: 'Marks a shift from the UK\'s previous principles-based, non-legislative approach to binding statutory requirements. Unlike the EU AI Act\'s broad scope, the UK bill focuses specifically on frontier models and high-risk sectors, creating a more targeted regime.',
        tags: ['UK', 'AI Safety', 'Frontier Models', 'High-Risk Sectors']
    }
];
