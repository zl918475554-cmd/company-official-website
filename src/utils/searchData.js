export const searchData = [
    
    {
        id: 'homepage',
        keywords: ['首页', '主页', 'home', '亿联通信'],
        text: '首页',
        route: '/homepage',
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: true
    },
    
    {
        id: 'productresources',
        keywords: ['产品资源', '产品', '资源', '专线', '系统集成', 'ISP', 'ICT'],
        text: '产品资源',
        route: '/productresources/concentrationservice',
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: true
    },
    {
        id: 'concentrationservice',
        keywords: ['专线服务', '专线', 'ISP', '中国电信', '中国移动', '中国联通', '中国光电', '鹏博士', '润迅数据', '万国数据'],
        text: '专线服务（ISP）',
        route: '/productresources/concentrationservice',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    {
        id: 'systemextend',
        keywords: ['系统集成', 'ICT', '集成'],
        text: '系统集成（ICT）',
        route: '/productresources/systemextend',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    
    {
        id: 'solutionproject',
        keywords: ['解决方案', '方案', '解决', '制造业', '金融保险', '连锁商贸', '房地产', '医疗医药', 'IT科技', '教育培训', '政企机构'],
        text: '解决方案',
        route: '/solutionproject/itscience',
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: true
    },
    {
        id: 'manufacturing',
        keywords: ['制造业', '制造'],
        text: '制造业',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    {
        id: 'finance',
        keywords: ['金融保险', '金融', '保险'],
        text: '金融保险',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    {
        id: 'chaintrade',
        keywords: ['连锁商贸', '连锁', '商贸'],
        text: '连锁商贸',
        route: '/solutionproject/chaintrade',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    {
        id: 'realestate',
        keywords: ['房地产', '房产', '地产'],
        text: '房地产',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    {
        id: 'medical',
        keywords: ['医疗医药', '医疗', '医药'],
        text: '医疗医药',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    {
        id: 'itscience',
        keywords: ['IT科技', 'IT', '科技', '信息技术'],
        text: 'IT科技',
        route: '/solutionproject/itscience',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    {
        id: 'education',
        keywords: ['教育培训', '教育', '培训'],
        text: '教育培训',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    {
        id: 'companyorganization',
        keywords: ['政企机构', '政企', '机构', '政府', '企业'],
        text: '政企机构',
        route: '/solutionproject/companyorganization',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    
    {
        id: 'cases',
        keywords: ['客户案例', '案例', '客户'],
        text: '客户案例',
        route: null,
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: false
    },
    
    {
        id: 'servicesupport',
        keywords: ['服务支持', '服务', '支持', '服务体系', '资料下载'],
        text: '服务支持',
        route: '/servicesystem',
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: true
    },
    {
        id: 'servicesystem',
        keywords: ['服务体系', '体系'],
        text: '服务体系',
        route: '/servicesystem',
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: true
    },
    {
        id: 'download',
        keywords: ['资料下载', '下载', '资料'],
        text: '资料下载',
        route: null,
        component: 'NavigationBar',
        type: 'dropdown',
        hasRoute: false
    },
    
    {
        id: 'aboutus',
        keywords: ['关于我们', '关于', '公司简介', '联系我们', '加入我们', '新闻中心', '公司地图'],
        text: '关于我们',
        route: '/aboutus',
        component: 'NavigationBar',
        type: 'navigation',
        hasRoute: true
    },
    
    {
        id: 'vpn',
        keywords: ['MPLS-VPN组网', 'VPN', 'MPLS', '组网', '虚拟专用网'],
        text: 'MPLS-VPN组网',
        route: '/solutionproject/itscience/vpn',
        component: 'networking',
        type: 'button',
        hasRoute: true
    },
    {
        id: 'mstp',
        keywords: ['MSTP/自建组网', 'MSTP', '自建', '组网'],
        text: 'MSTP/自建组网',
        route: '/solutionproject/itscience/mstp',
        component: 'networking',
        type: 'button',
        hasRoute: true
    },
    {
        id: 'sdwan',
        keywords: ['SD-WAN组网', 'SD-WAN', 'SDWAN', '组网', '软件定义广域网'],
        text: 'SD-WAN组网',
        route: '/solutionproject/itscience/sdwan',
        component: 'networking',
        type: 'button',
        hasRoute: true
    }
]

export function fuzzySearch(keyword) {
    if (!keyword || keyword.trim() === '') {
        return []
    }
    
    const lowerKeyword = keyword.toLowerCase().trim()
    
    return searchData.filter(item => {
        if (item.text.toLowerCase().includes(lowerKeyword)) {
            return true
        }
        
        return item.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
    })
}
