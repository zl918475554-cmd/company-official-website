<template>
    <div>
        <!-- 头部 -->
        <el-header >
            <div class="header">
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/logo.png" alt="" width="120px;" height="50px">
                    </router-link>
                </div>
                <div class="navigation">
                    <ul>
                        <li class="product">
                            <el-dropdown  placement="top">
                                <div 
                                    class="hue" 
                                    :class="[active1, { 'search-highlight': isHighlighted('productresources'), 'ripple-effect': isRippled('productresources') }]" 
                                    style="font-size: 20px;"
                                >
                                    产品资源
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <router-link to="/productresources/concentrationservice" active-class="active">
                                        <el-dropdown-item 
                                            class="el-icon-phone-outline"
                                            :class="{ 'search-highlight': isHighlighted('concentrationservice'), 'ripple-effect': isRippled('concentrationservice') }"
                                        > 
                                            专线服务（ISP）
                                        </el-dropdown-item>
                                    </router-link>
                                    <router-link to="/productresources/systemextend" active-class="active">
                                        <el-dropdown-item 
                                            class="el-icon-user"
                                            :class="{ 'search-highlight': isHighlighted('systemextend'), 'ripple-effect': isRippled('systemextend') }"
                                        > 
                                            系统集成（ICT）
                                        </el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>                               
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown  placement="top">
                                <div 
                                    class="hue" 
                                    :class="{ 'search-highlight': isHighlighted('solutionproject'), 'ripple-effect': isRippled('solutionproject') }"
                                    style="font-size: 20px;"
                                >
                                    解决方案
                                </div>
                                <el-dropdown-menu slot="dropdown" >
                                    <div class="dropdown" style="width:500px;height:100px">
                                        <li>
                                            <router-link to="#">
                                                <span 
                                                    class="el-icon-setting" 
                                                    style="margin-left: 35px;margin-right: 45px;"
                                                    :class="{ 'search-highlight': isHighlighted('manufacturing'), 'ripple-effect': isRippled('manufacturing') }"
                                                > 
                                                    制造业
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span 
                                                    class="el-icon-notebook-2"
                                                    :class="{ 'search-highlight': isHighlighted('finance'), 'ripple-effect': isRippled('finance') }"
                                                > 
                                                    金融保险
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'chaintrade'}">
                                                <span 
                                                    class="el-icon-sell"
                                                    :class="{ 'search-highlight': isHighlighted('chaintrade'), 'ripple-effect': isRippled('chaintrade') }"
                                                > 
                                                    连锁商贸
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span 
                                                    class="el-icon-office-building"
                                                    :class="{ 'search-highlight': isHighlighted('realestate'), 'ripple-effect': isRippled('realestate') }"
                                                > 
                                                    房地产
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span 
                                                    class="el-icon-school" 
                                                    style="margin-left: 35px;margin-right: 30px;"
                                                    :class="{ 'search-highlight': isHighlighted('medical'), 'ripple-effect': isRippled('medical') }"
                                                > 
                                                    医疗医药
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/solutionproject/itscience">
                                                <span 
                                                    class="el-icon-monitor" 
                                                    style="margin-right: 47px"
                                                    :class="{ 'search-highlight': isHighlighted('itscience'), 'ripple-effect': isRippled('itscience') }"
                                                > 
                                                    IT科技
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span 
                                                    class="el-icon-document-copy"
                                                    :class="{ 'search-highlight': isHighlighted('education'), 'ripple-effect': isRippled('education') }"
                                                > 
                                                    教育培训
                                                </span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'companyorganization'}">
                                                <span 
                                                    class="el-icon-suitcase-1"
                                                    :class="{ 'search-highlight': isHighlighted('companyorganization'), 'ripple-effect': isRippled('companyorganization') }"
                                                > 
                                                    政企机构
                                                </span>
                                            </router-link>
                                        </li>
                                    </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>                            
                            <div 
                                class="el-dropdown-link hue" 
                                :class="{ 'search-highlight': isHighlighted('cases'), 'ripple-effect': isRippled('cases') }"
                                style="font-size: 20px;"
                            >
                                客户案例
                            </div>
                        </li>
                        <li>
                            <el-dropdown  placement="top" hide-timeout="400" >
                                <div 
                                    class="hue" 
                                    :class="{ 'search-highlight': isHighlighted('servicesupport'), 'ripple-effect': isRippled('servicesupport') }"
                                    style="font-size: 20px;"
                                >
                                    服务支持
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <router-link to="/servicesystem">
                                        <el-dropdown-item 
                                            class="el-icon-edit-outline"
                                            :class="{ 'search-highlight': isHighlighted('servicesystem'), 'ripple-effect': isRippled('servicesystem') }"
                                        > 
                                            服务体系
                                        </el-dropdown-item>
                                    </router-link>
                                    <router-link to="">
                                        <el-dropdown-item 
                                            class="el-icon-download"
                                            :class="{ 'search-highlight': isHighlighted('download'), 'ripple-effect': isRippled('download') }"
                                        > 
                                            资料下载
                                        </el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>                           
                            <router-link to="/aboutus" style="font-size:20px">
                                <div 
                                    class="hue" 
                                    :class="[active5, { 'search-highlight': isHighlighted('aboutus'), 'ripple-effect': isRippled('aboutus') }]"
                                >
                                    关于我们
                                </div>                               
                            </router-link>                          
                        </li>
                        
                        <li class="search-box-container">
                            <div class="search-wrapper">
                                <el-input
                                    v-model="searchKeyword"
                                    placeholder="搜索..."
                                    prefix-icon="el-icon-search"
                                    class="search-input"
                                    @input="handleSearch"
                                    @focus="handleSearchFocus"
                                    @blur="handleSearchBlur"
                                    clearable
                                    @clear="clearSearch"
                                >
                                </el-input>
                                <transition name="fade">
                                    <div v-if="searchResults.length > 0 && showSearchResults" class="search-results">
                                        <div 
                                            v-for="(item, index) in searchResults" 
                                            :key="item.id"
                                            class="search-result-item"
                                            :class="{ 'active': index === 0 }"
                                            @click="selectSearchResult(item)"
                                            @mouseenter="hoverSearchResult(item)"
                                        >
                                            <span class="search-result-text">{{ item.text }}</span>
                                            <span v-if="item.hasRoute" class="search-result-route">可跳转</span>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </el-header>
    </div>
</template>

<script>
import { fuzzySearch } from '@/utils/searchData'
import { SearchBus, SearchState } from '@/utils/searchBus'

export default{
    name: 'NavigationBar',
    data(){
        return {
            active1:{
                isActive1: false,
            },
            active5:{
                isActive5: false,
            },
            searchKeyword: '',
            searchResults: [],
            showSearchResults: false,
            highlightedId: null,
            rippledId: null,
            searchTimeout: null
        }
    },
    created() {
        SearchBus.$on('search:activeHighlightChanged', (id) => {
            this.highlightedId = id
        })
        
        SearchBus.$on('search:rippleTriggered', (id) => {
            this.rippledId = id
        })
        
        SearchBus.$on('search:rippleEnded', (id) => {
            if (this.rippledId === id) {
                this.rippledId = null
            }
        })
        
        SearchBus.$on('search:clearAll', () => {
            this.highlightedId = null
            this.rippledId = null
        })
    },
    beforeDestroy() {
        SearchBus.$off('search:activeHighlightChanged')
        SearchBus.$off('search:rippleTriggered')
        SearchBus.$off('search:rippleEnded')
        SearchBus.$off('search:clearAll')
    },
    watch:{
        $route(to){
            
            if(to.path === '/productresources/concentrationservice' || to.path === '/productresources/systemextend'){
                this.active1.isActive1 = true
                this.active5.isActive5 = false
            }
            else if(to.path === '/aboutus'){
                this.active5.isActive5 = true
                this.active1.isActive1 = false
            }
            else if(to.path === '/' || to.path != '/aboutus' || to.path != '/productresources/concentrationservice' || to.path != '/productresources/systemextend'){
                this.active1.isActive1 = false
                this.active5.isActive5 = false
            }
        }
    },
    mounted(){        
        if(this.$route.path === '/productresources/concentrationservice' || this.$route.path === '/productresources/systemextend'){
            this.active1.isActive1 = true
            this.active5.isActive5 = false

        }
        else if(this.$route.path === '/aboutus'){
            this.active5.isActive5 = true
            this.active1.isActive1 = false
        }
        else if(this.$route.path === '/'){
            this.active1.isActive1 = false
            this.active5.isActive5 = false
        }
    },
    methods: {
        isHighlighted(id) {
            return this.highlightedId === id
        },
        isRippled(id) {
            return this.rippledId === id
        },
        handleSearch() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout)
            }
            
            this.searchTimeout = setTimeout(() => {
                this.performSearch()
            }, 200)
        },
        performSearch() {
            const keyword = this.searchKeyword.trim()
            
            if (!keyword) {
                this.clearSearch()
                return
            }
            
            const results = fuzzySearch(keyword)
            this.searchResults = results
            
            SearchState.setSearchKeyword(keyword)
            SearchState.setMatchedItems(results)
            
            if (results.length > 0) {
                this.showSearchResults = true
                
                const firstResult = results[0]
                if (firstResult.hasRoute && firstResult.route) {
                    setTimeout(() => {
                        this.navigateToResult(firstResult)
                    }, 1500)
                }
            } else {
                this.showSearchResults = false
            }
        },
        clearSearch() {
            this.searchResults = []
            this.showSearchResults = false
            SearchState.clearAllHighlights()
        },
        handleSearchFocus() {
            if (this.searchResults.length > 0) {
                this.showSearchResults = true
            }
        },
        handleSearchBlur() {
            setTimeout(() => {
                this.showSearchResults = false
            }, 200)
        },
        selectSearchResult(item) {
            this.searchKeyword = item.text
            this.showSearchResults = false
            this.navigateToResult(item)
        },
        hoverSearchResult(item) {
            SearchState.setActiveHighlightId(item.id)
        },
        navigateToResult(item) {
            const route = SearchState.navigateToMatchedItem(item)
            if (route) {
                SearchState.triggerRippleEffect(item.id)
                this.$router.push(route).catch(() => {})
            }
        }
    }
}
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        margin: 0;
        padding: 0;
    }
    /deep/ .el-card__body{
        padding: 0;
    }
    .header{
        width: 100%;
        height: 80px;
        background-color: #b7c6d9;
        overflow: hidden;
    }
    /* logo */
    .el-header .header .logo img{
        width: 120px;
        height: 50px;
        margin-top: 20px;
        margin-left: 150px;
        float: left;
    }
    /deep/ .el-header[data-v-4fd998ea]{
        text-align: left;
        background-color: #fff;
        background:rgba(R,G, B, A);
    }
    /* 导航栏 */
    a{
        text-decoration: none;
    }
    .hue{
        color: #313131;
    }
    .navigation ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
        float: right;
        margin-right: 80px;
        margin-top: 30px;
    }
    .navigation li{
        position: relative;
    }
    .navigation li{
        padding: 0 0 15px 35px;
    }
    .navigation div:hover,
    .navigation .active,
    .navigation .active:focus,
    .navigation li:hover>span {
        color:white;
    }
    .dropdown li{
        list-style-type: none;      
    }
    .dropdown li span{
        float: left;
        margin-right: 30px;
        margin-top: 20px;
        font-size: 15px;
        color: black; 
        cursor: pointer;
    }
    .dropdown li span:hover{
        color: rgb(253, 131, 131);
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .navigation i{
        font-size: 25px;
    }
    .navigation i:hover{
        color: rgb(246, 103, 103);
        font-weight: bolder;
    }
    .header .navigation .product i{
        font-size:20px; 
        color: #313131;    
        font-style:normal;   
    }
    .header .navigation a{
        color: #313131;
    }
    .header .navigation a:hover{
        color: #fff;
    }
    .header .navigation a:active{
        color: #fff;
    }
    /deep/.el-dropdown-link {
        cursor: pointer;
    }
    
    /* 产品资源 */
    .isActive1{
        color: white!important;
    }

    /* 关于我们 */
    .isActive5{
        color: white!important;
    }
    
    /* 搜索框样式 */
    .search-box-container {
        position: relative;
    }
    
    .search-wrapper {
        position: relative;
    }
    
    .search-input {
        width: 180px;
        transition: width 0.3s ease;
    }
    
    .search-input:focus-within {
        width: 250px;
    }
    
    /deep/ .search-input .el-input__inner {
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #dcdfe6;
    }
    
    /deep/ .search-input .el-input__inner:focus {
        border-color: #409eff;
        box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
    }
    
    /deep/ .search-input .el-input__prefix {
        left: 10px;
    }
    
    /deep/ .search-input .el-input__icon {
        line-height: 32px;
    }
    
    /* 搜索结果下拉框 */
    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-top: 5px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-height: 300px;
        overflow-y: auto;
        min-width: 250px;
    }
    
    .search-result-item {
        padding: 12px 16px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        transition: background-color 0.2s ease;
    }
    
    .search-result-item:last-child {
        border-bottom: none;
        border-radius: 0 0 8px 8px;
    }
    
    .search-result-item:first-child {
        border-radius: 8px 8px 0 0;
    }
    
    .search-result-item:hover,
    .search-result-item.active {
        background-color: #f5f7fa;
    }
    
    .search-result-text {
        font-size: 14px;
        color: #303133;
    }
    
    .search-result-route {
        font-size: 12px;
        color: #409eff;
        padding: 2px 8px;
        background-color: rgba(64, 158, 255, 0.1);
        border-radius: 4px;
    }
    
    /* 搜索高亮样式 */
    .search-highlight {
        color: #409eff !important;
        font-weight: bold;
        animation: pulse 1s ease-in-out infinite;
        position: relative;
    }
    
    .search-highlight::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #409eff, #67c23a);
        border-radius: 1px;
        animation: underlineGrow 0.3s ease-out forwards;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.8;
        }
    }
    
    @keyframes underlineGrow {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
    
    /* 波纹动画效果 */
    .ripple-effect {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(64, 158, 255, 0.6);
        transform: translate(-50%, -50%);
        animation: rippleExpand 0.6s ease-out forwards;
        pointer-events: none;
    }
    
    @keyframes rippleExpand {
        0% {
            width: 0;
            height: 0;
            opacity: 0.6;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    /* 下拉框中搜索高亮 */
    /deep/ .el-dropdown-menu .search-highlight {
        background-color: rgba(64, 158, 255, 0.1) !important;
    }
    
    /deep/ .dropdown li span.search-highlight {
        color: #409eff !important;
        font-weight: bold;
        text-shadow: 0 0 5px rgba(64, 158, 255, 0.3);
    }
    
    /* 搜索框过渡动画 */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease, transform 0.2s ease;
    }
    
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-5px);
    }
</style>
