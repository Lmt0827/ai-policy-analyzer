let currentTab = 'domestic';
let keywordChartDom, regionChartDom, trendChartDom;
let keywordChartIntl, regionChartIntl, trendChartIntl;

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return (d.getMonth() + 1) + '月' + d.getDate() + '日';
}

function getToday() {
    return '2026-07-06';
}

function switchTab(tab) {
    currentTab = tab;
    document.getElementById('tab-domestic').className = tab === 'domestic' ? 'tab-active py-4 px-2 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-gray-700 transition' : 'py-4 px-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition';
    document.getElementById('tab-international').className = tab === 'international' ? 'tab-active py-4 px-2 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-gray-700 transition' : 'py-4 px-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition';
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTimeline(policies) {
    const today = getToday();
    const todayPolicies = policies.filter(function(p) { return p.date === today; });
    const julyPolicies = policies.filter(function(p) { return p.date.startsWith('2026-07'); });

    let todayHtml = '';
    if (todayPolicies.length === 0) {
        todayHtml = '<div class="ml-8 text-gray-500 py-4">今日暂无新政策发布（截至2026年7月6日）</div>';
    } else {
        todayHtml = todayPolicies.map(function(p, i) {
            return '<div class="relative mb-6 ml-8">' +
                '<div class="timeline-dot" style="top: 4px;"></div>' +
                '<div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">' +
                    '<div class="flex items-center justify-between mb-2">' +
                        '<span class="text-sm font-semibold text-blue-700">' + formatDate(p.date) + '</span>' +
                        '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">' + p.level + '</span>' +
                    '</div>' +
                    '<h3 class="font-medium text-gray-900">' + p.title + '</h3>' +
                    '<p class="text-sm text-gray-600 mt-1">' + p.publisher + '</p>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    let julyHtml = julyPolicies.map(function(p) {
        return '<div class="flex items-center text-sm">' +
            '<span class="w-16 text-gray-500">' + formatDate(p.date) + '</span>' +
            '<span class="w-2 h-2 rounded-full bg-blue-500 mx-3"></span>' +
            '<span class="text-gray-700 truncate">' + p.title + '</span>' +
        '</div>';
    }).join('');

    if (julyPolicies.length === 0) {
        julyHtml = '<div class="text-gray-500 text-sm">本月暂无更多政策</div>';
    }

    return '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
        '<h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">' +
            '<svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
            '今日政策发布时间线' +
        '</h2>' +
        '<div class="relative pl-4">' +
            '<div class="timeline-line"></div>' +
            todayHtml +
            '<div class="ml-8 mt-6 pt-4 border-t border-gray-200">' +
                '<h3 class="text-sm font-semibold text-gray-700 mb-3">本月发布政策一览</h3>' +
                '<div class="space-y-2">' + julyHtml + '</div>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function renderDomestic() {
    const julyPolicies = domesticPolicies.filter(function(p) { return p.date.startsWith('2026-07'); });
    const otherPolicies = domesticPolicies.filter(function(p) { return !p.date.startsWith('2026-07'); });

    let julyDetails = julyPolicies.map(function(p, i) {
        const highlights = p.highlights.map(function(h) { return '<li>' + h + '</li>'; }).join('');
        const tags = p.tags.map(function(t) { return '<span class="keyword-tag text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">' + t + '</span>'; }).join('');
        return '<div class="border rounded-xl p-6 card-hover bg-gradient-to-r from-white to-gray-50">' +
            '<div class="flex flex-wrap items-start justify-between mb-4">' +
                '<div class="flex-1">' +
                    '<div class="flex items-center space-x-2 mb-2">' +
                        '<span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">' + p.level + '</span>' +
                        '<span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">' + p.region + '</span>' +
                        '<span class="text-sm text-gray-500">' + p.date + '</span>' +
                    '</div>' +
                    '<h3 class="text-lg font-bold text-gray-900">' + p.title + '</h3>' +
                '</div>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4 mb-4 text-sm">' +
                '<div><span class="font-semibold text-gray-700">发布单位：</span><span class="text-gray-600">' + p.publisher + '</span></div>' +
                '<div><span class="font-semibold text-gray-700">监督单位：</span><span class="text-gray-600">' + p.supervisor + '</span></div>' +
            '</div>' +
            '<div class="mb-4">' +
                '<h4 class="font-semibold text-gray-800 mb-2">核心要求：</h4>' +
                '<ul class="list-disc list-inside space-y-1 text-sm text-gray-600">' + highlights + '</ul>' +
            '</div>' +
            '<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">' +
                '<h4 class="font-semibold text-yellow-800 mb-1">与前政策的区别：</h4>' +
                '<p class="text-sm text-yellow-700">' + p.diff + '</p>' +
            '</div>' +
            '<div class="flex items-center justify-between">' +
                '<div class="flex flex-wrap gap-2">' + tags + '</div>' +
                '<a href="' + p.source + '" target="_blank" class="source-link text-sm flex items-center">' +
                    '<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>' +
                    '数据来源' +
                '</a>' +
            '</div>' +
        '</div>';
    }).join('');

    let otherDetails = otherPolicies.map(function(p) {
        return '<div class="border rounded-lg p-4 card-hover">' +
            '<div class="flex items-center space-x-2 mb-2">' +
                '<span class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">' + p.region + '</span>' +
                '<span class="text-xs text-gray-500">' + p.date + '</span>' +
            '</div>' +
            '<h3 class="font-medium text-gray-900 text-sm mb-2">' + p.title + '</h3>' +
            '<p class="text-xs text-gray-600 mb-2">发布：' + p.publisher + '</p>' +
            '<a href="' + p.source + '" target="_blank" class="source-link text-xs">查看来源 &rarr;</a>' +
        '</div>';
    }).join('');

    return '<div id="domestic-content">' +
        renderTimeline(domesticPolicies) +
        '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
            '<h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">' +
                '<svg class="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>' +
                '2026年7月国内政策详情' +
            '</h2>' +
            '<div class="space-y-6">' + julyDetails + '</div>' +
        '</div>' +
        '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
            '<h2 class="text-xl font-bold text-gray-900 mb-6">其他地方政策（2026年6月及以前）</h2>' +
            '<div class="grid md:grid-cols-2 gap-4">' + otherDetails + '</div>' +
        '</div>' +
        renderCharts('domestic') +
    '</div>';
}

function renderInternational() {
    const julyPolicies = internationalPolicies.filter(function(p) { return p.date.startsWith('2026-07'); });
    const otherPolicies = internationalPolicies.filter(function(p) { return !p.date.startsWith('2026-07'); });

    const flagMap = {'欧盟': '🇪🇺', '美国': '🇺🇸', '加拿大': '🇨🇦', '英国': '🇬🇧', '新加坡': '🇸🇬'};

    let julyDetails = julyPolicies.map(function(p, i) {
        const highlights = p.highlights.map(function(h) { return '<li>' + h + '</li>'; }).join('');
        const tags = p.tags.map(function(t) { return '<span class="keyword-tag text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">' + t + '</span>'; }).join('');
        const flag = flagMap[p.country] || '🌍';
        return '<div class="border rounded-xl p-6 card-hover bg-gradient-to-r from-white to-blue-50">' +
            '<div class="flex items-center space-x-3 mb-4">' +
                '<span class="text-2xl">' + flag + '</span>' +
                '<div>' +
                    '<div class="flex items-center space-x-2">' +
                        '<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">' + p.country + '</span>' +
                        '<span class="text-sm text-gray-500">' + p.date + '</span>' +
                    '</div>' +
                    '<h3 class="text-lg font-bold text-gray-900">' + p.title + '</h3>' +
                '</div>' +
            '</div>' +
            '<div class="mb-4 text-sm">' +
                '<span class="font-semibold text-gray-700">发布单位：</span><span class="text-gray-600">' + p.publisher + '</span>' +
            '</div>' +
            '<div class="mb-4">' +
                '<h4 class="font-semibold text-gray-800 mb-2">详细政策要求：</h4>' +
                '<ul class="list-disc list-inside space-y-1 text-sm text-gray-600">' + highlights + '</ul>' +
            '</div>' +
            '<div class="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4 rounded-r-lg">' +
                '<h4 class="font-semibold text-indigo-800 mb-1">政策变化对比：</h4>' +
                '<p class="text-sm text-indigo-700">' + p.diff + '</p>' +
            '</div>' +
            '<div class="flex items-center justify-between">' +
                '<div class="flex flex-wrap gap-2">' + tags + '</div>' +
                '<a href="' + p.source + '" target="_blank" class="source-link text-sm flex items-center">' +
                    '<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>' +
                    '数据来源' +
                '</a>' +
            '</div>' +
        '</div>';
    }).join('');

    let otherDetails = otherPolicies.map(function(p) {
        const flag = flagMap[p.country] || '🌍';
        return '<div class="border rounded-lg p-4 card-hover">' +
            '<div class="flex items-center space-x-2 mb-2">' +
                '<span class="text-lg">' + flag + '</span>' +
                '<span class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">' + p.country + '</span>' +
                '<span class="text-xs text-gray-500">' + p.date + '</span>' +
            '</div>' +
            '<h3 class="font-medium text-gray-900 text-sm mb-2">' + p.title + '</h3>' +
            '<a href="' + p.source + '" target="_blank" class="source-link text-xs">查看来源 &rarr;</a>' +
        '</div>';
    }).join('');

    return '<div id="international-content">' +
        renderTimeline(internationalPolicies) +
        '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
            '<h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">' +
                '<svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
                '2026年7月国外政策详情' +
            '</h2>' +
            '<div class="space-y-6">' + julyDetails + '</div>' +
        '</div>' +
        '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
            '<h2 class="text-xl font-bold text-gray-900 mb-6">其他国外政策（2026年6月及以前）</h2>' +
            '<div class="grid md:grid-cols-2 gap-4">' + otherDetails + '</div>' +
        '</div>' +
        renderCharts('international') +
    '</div>';
}

function renderCharts(type) {
    const isDomestic = type === 'domestic';
    const policies = isDomestic ? domesticPolicies : internationalPolicies;

    const allTags = {};
    policies.forEach(function(p) {
        p.tags.forEach(function(t) {
            allTags[t] = (allTags[t] || 0) + 1;
        });
    });
    const sortedTags = Object.entries(allTags).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 10);

    const regionDist = {};
    policies.forEach(function(p) {
        const key = isDomestic ? p.region : p.country;
        regionDist[key] = (regionDist[key] || 0) + 1;
    });

    const monthNames = {'2026-01': '1月', '2026-02': '2月', '2026-03': '3月', '2026-04': '4月', '2026-05': '5月', '2026-06': '6月', '2026-07': '7月'};
    const dateCount = {};
    policies.forEach(function(p) {
        const month = p.date.substring(0, 7);
        dateCount[month] = (dateCount[month] || 0) + 1;
    });
    const months = Object.keys(dateCount).sort();

    const hotspots = isDomestic ?
        '<div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">' +
            '<div class="text-2xl mb-2">&#128274;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">安全监管强化</h4>' +
            '<p class="text-sm text-gray-600">从算法备案到拟人化服务管理，监管链条不断延伸。7月15日即将施行的《人工智能拟人化互动服务管理暂行办法》标志着数字人监管进入实质阶段。</p>' +
        '</div>' +
        '<div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100">' +
            '<div class="text-2xl mb-2">&#127959;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">基础设施建设</h4>' +
            '<p class="text-sm text-gray-600">"AI+信息通信"实施意见将AI与5G、算力网络深度融合。北京发布AI for Science方案，强化自主实验室与科学数据供给。</p>' +
        '</div>' +
        '<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">' +
            '<div class="text-2xl mb-2">&#9878;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">伦理审查制度化</h4>' +
            '<p class="text-sm text-gray-600">十部门联合印发伦理审查办法，在10个先导区省份试点。从通用科技伦理向AI专项伦理深化，建立伦理委员会制度。</p>' +
        '</div>' :
        '<div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">' +
            '<div class="text-2xl mb-2">&#128220;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">监管框架分化</h4>' +
            '<p class="text-sm text-gray-600">欧盟通过Omnibus简化AI Act实施，英国则从原则导向转向立法约束，美国特朗普政府明确取消强制许可，全球监管路径显著分化。</p>' +
        '</div>' +
        '<div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-100">' +
            '<div class="text-2xl mb-2">&#128737;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">安全与网络安全</h4>' +
            '<p class="text-sm text-gray-600">美国EO聚焦AI网络安全，英国AI安全法案设立前沿模型评估机制，加拿大新战略将信任列为第一原则，安全议题持续升温。</p>' +
        '</div>' +
        '<div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">' +
            '<div class="text-2xl mb-2">&#127760;</div>' +
            '<h4 class="font-bold text-gray-900 mb-2">国家AI战略更新</h4>' +
            '<p class="text-sm text-gray-600">加拿大、新加坡相继更新国家AI战略，从纯技术研究转向社会融合与公共福祉，AI治理的政治优先级显著提升。</p>' +
        '</div>';

    return '<div class="grid md:grid-cols-2 gap-6 mb-8">' +
        '<div class="bg-white rounded-xl shadow-md p-6">' +
            '<h3 class="text-lg font-bold text-gray-900 mb-4">政策热频关键词 TOP10</h3>' +
            '<div class="chart-container">' +
                '<canvas id="keywordChart-' + type + '"></canvas>' +
            '</div>' +
        '</div>' +
        '<div class="bg-white rounded-xl shadow-md p-6">' +
            '<h3 class="text-lg font-bold text-gray-900 mb-4">' + (isDomestic ? '政策发布地区分布' : '政策发布国家/地区分布') + '</h3>' +
            '<div class="chart-container">' +
                '<canvas id="regionChart-' + type + '"></canvas>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
        '<h3 class="text-lg font-bold text-gray-900 mb-4">政策发布月度趋势</h3>' +
        '<div class="chart-container">' +
            '<canvas id="trendChart-' + type + '"></canvas>' +
        '</div>' +
    '</div>' +
    '<div class="bg-white rounded-xl shadow-md p-6 mb-8">' +
        '<h3 class="text-lg font-bold text-gray-900 mb-4">政策建设热点内容摘要</h3>' +
        '<div class="grid md:grid-cols-3 gap-4" id="hotspots-' + type + '">' + hotspots + '</div>' +
    '</div>' +
    '<script>' +
    'setTimeout(function() { initCharts("' + type + '"); }, 100);' +
    '</script>';
}

function initCharts(type) {
    const isDomestic = type === 'domestic';
    const policies = isDomestic ? domesticPolicies : internationalPolicies;

    const allTags = {};
    policies.forEach(function(p) {
        p.tags.forEach(function(t) {
            allTags[t] = (allTags[t] || 0) + 1;
        });
    });
    const sortedTags = Object.entries(allTags).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 10);

    const regionDist = {};
    policies.forEach(function(p) {
        const key = isDomestic ? p.region : p.country;
        regionDist[key] = (regionDist[key] || 0) + 1;
    });

    const monthNames = {'2026-01': '1月', '2026-02': '2月', '2026-03': '3月', '2026-04': '4月', '2026-05': '5月', '2026-06': '6月', '2026-07': '7月'};
    const dateCount = {};
    policies.forEach(function(p) {
        const month = p.date.substring(0, 7);
        dateCount[month] = (dateCount[month] || 0) + 1;
    });
    const months = Object.keys(dateCount).sort();

    const kwCanvas = document.getElementById('keywordChart-' + type);
    if (kwCanvas) {
        new Chart(kwCanvas, {
            type: 'bar',
            data: {
                labels: sortedTags.map(function(t) { return t[0]; }),
                datasets: [{
                    label: '出现频次',
                    data: sortedTags.map(function(t) { return t[1]; }),
                    backgroundColor: isDomestic ? 'rgba(239, 68, 68, 0.7)' : 'rgba(59, 130, 246, 0.7)',
                    borderColor: isDomestic ? 'rgb(239, 68, 68)' : 'rgb(59, 130, 246)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, ticks: { stepSize: 1 } } }
            }
        });
    }

    const regCanvas = document.getElementById('regionChart-' + type);
    if (regCanvas) {
        new Chart(regCanvas, {
            type: 'doughnut',
            data: {
                labels: Object.keys(regionDist),
                datasets: [{
                    data: Object.values(regionDist),
                    backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'right' } }
            }
        });
    }

    const trendCanvas = document.getElementById('trendChart-' + type);
    if (trendCanvas) {
        new Chart(trendCanvas, {
            type: 'line',
            data: {
                labels: months.map(function(m) { return monthNames[m] || m; }),
                datasets: [{
                    label: '政策发布数量',
                    data: months.map(function(m) { return dateCount[m]; }),
                    borderColor: isDomestic ? '#ef4444' : '#3b82f6',
                    backgroundColor: isDomestic ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: isDomestic ? '#ef4444' : '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
            }
        });
    }
}

function renderContent() {
    const container = document.getElementById('content-area');
    container.innerHTML = currentTab === 'domestic' ? renderDomestic() : renderInternational();
    setTimeout(function() {
        initCharts(currentTab);
    }, 100);
}

async function exportPDF() {
    const btn = document.querySelector('button[onclick="exportPDF()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>生成中...</span>';
    btn.disabled = true;

    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        switchTab('domestic');
        await new Promise(function(r) { setTimeout(r, 1500); });

        const domesticEl = document.getElementById('domestic-content');
        const domesticCanvas = await html2canvas(domesticEl, {
            scale: 2,
            useCORS: true,
            logging: false,
            windowWidth: 1200
        });

        const domImgData = domesticCanvas.toDataURL('image/png');
        const domImgHeight = (domesticCanvas.height * pageWidth) / domesticCanvas.width;

        let heightLeft = domImgHeight;
        let position = 0;

        pdf.addImage(domImgData, 'PNG', 0, position, pageWidth, domImgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - domImgHeight;
            pdf.addPage();
            pdf.addImage(domImgData, 'PNG', 0, position, pageWidth, domImgHeight);
            heightLeft -= pageHeight;
        }

        pdf.addPage();
        switchTab('international');
        await new Promise(function(r) { setTimeout(r, 1500); });

        const intlEl = document.getElementById('international-content');
        const intlCanvas = await html2canvas(intlEl, {
            scale: 2,
            useCORS: true,
            logging: false,
            windowWidth: 1200
        });

        const intlImgData = intlCanvas.toDataURL('image/png');
        const intlImgHeight = (intlCanvas.height * pageWidth) / intlCanvas.width;

        heightLeft = intlImgHeight;
        position = 0;

        pdf.addImage(intlImgData, 'PNG', 0, position, pageWidth, intlImgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - intlImgHeight;
            pdf.addPage();
            pdf.addImage(intlImgData, 'PNG', 0, position, pageWidth, intlImgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save('AI政策分析报告_2026年7月.pdf');
        switchTab('domestic');
    } catch (err) {
        console.error(err);
        alert('PDF生成失败：' + err.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderContent();
});
