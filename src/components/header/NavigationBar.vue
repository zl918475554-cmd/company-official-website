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
                            <el-dropdown  placement="top" :hide-timeout="400" >
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
                            <div class="search-wrapper" ref="searchWrapper">
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
                                    <div 
                                        v-if="searchResults.length > 0 && showSearchResults" 
                                        class="search-results"
                                        :style="searchResultsStyle"
                                    >
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
            searchTimeout: null
        }
    },
    created() {
        SearchBus.$on('search:activeHighlightChanged', (id) => {
            this.highlightedId = id
        })
        
        SearchBus.$on('search:clearAll', () => {
            this.highlightedId = null
        })
    },
    beforeDestroy() {
        SearchBus.$off('search:activeHighlightChanged')
        SearchBus.$off('search:clearAll')
    },
    computed: {
        searchResultsStyle() {
            if (this.$refs.searchWrapper) {
                const rect = this.$refs.searchWrapper.getBoundingClientRect()
                return {
                    top: rect.bottom + 5 + 'px',
                    left: rect.left + 'px',
                    width: Math.max(250, rect.width) + 'px'
                }
            }
            return {}
        }
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
            return this.highlightedId === id
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
            if (this.highlightedId !== item.id) {
                SearchState.setActiveHighlightId(item.id)
            }
        },
        navigateToResult(item) {
            const route = SearchState.navigateToMatchedItem(item)
            if (route) {
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
        position: relative;
        z-index: 100;
    }
    
    .header::after {
        content: '';
        display: table;
        clear: both;
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
        position: static !important;
    }
    
    .search-wrapper {
        position: relative;
        z-index: 9999;
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
        position: fixed;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 99999;
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
    
    /* 水面波纹扭曲效果 */
    .ripple-effect {
        position: relative;
        overflow: hidden;
        isolation: isolate;
    }
    
    .ripple-effect::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        border: 3px solid rgba(64, 158, 255, 0.9);
        box-shadow: 
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 0 0 rgba(103, 194, 58, 0),
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 0 0 rgba(103, 194, 58, 0),
            0 0 15px rgba(64, 158, 255, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
        animation: waterRippleExpand 2s ease-in-out infinite;
        z-index: 9999;
    }
    
    .ripple-effect::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        border: 2px solid rgba(103, 194, 58, 0.8);
        box-shadow: 
            0 0 0 0 rgba(103, 194, 58, 0),
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 10px rgba(103, 194, 58, 0.3);
        animation: waterRippleExpand 2s ease-in-out infinite;
        animation-delay: 0.6s;
        z-index: 9998;
    }
    
    @keyframes waterRippleExpand {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            box-shadow: 
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 15px rgba(64, 158, 255, 0.5),
                inset 0 0 20px rgba(255, 255, 255, 0.4);
            filter: blur(0px);
        }
        10% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        25% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0.9;
            box-shadow: 
                0 0 0 15px rgba(64, 158, 255, 0.7),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 20px rgba(64, 158, 255, 0.4),
                inset 0 0 20px rgba(255, 255, 255, 0.3);
            filter: blur(0.3px);
        }
        50% {
            transform: translate(-50%, -50%) scale(5);
            opacity: 0.7;
            box-shadow: 
                0 0 0 30px rgba(64, 158, 255, 0.5),
                0 0 0 20px rgba(103, 194, 58, 0.4),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 18px rgba(64, 158, 255, 0.3),
                inset 0 0 15px rgba(255, 255, 255, 0.2);
            filter: blur(1px);
        }
        75% {
            transform: translate(-50%, -50%) scale(7);
            opacity: 0.4;
            box-shadow: 
                0 0 0 45px rgba(64, 158, 255, 0.3),
                0 0 0 35px rgba(103, 194, 58, 0.25),
                0 0 0 25px rgba(64, 158, 255, 0.2),
                0 0 0 0 rgba(103, 194, 58, 0),
                0 0 12px rgba(64, 158, 255, 0.2),
                inset 0 0 10px rgba(255, 255, 255, 0.1);
            filter: blur(2px);
        }
        90% {
            opacity: 0.2;
            filter: blur(3px);
        }
        100% {
            transform: translate(-50%, -50%) scale(9);
            opacity: 0;
            box-shadow: 
                0 0 0 60px rgba(64, 158, 255, 0),
                0 0 0 50px rgba(103, 194, 58, 0),
                0 0 0 40px rgba(64, 158, 255, 0),
                0 0 0 30px rgba(103, 194, 58, 0),
                0 0 0 rgba(64, 158, 255, 0),
                inset 0 0 0 rgba(255, 255, 255, 0);
            filter: blur(4px);
        }
    }
    
    .ripple-effect {
        animation: waterSurfaceDistortion 2s ease-in-out infinite;
    }
    
    @keyframes waterSurfaceDistortion {
        0%, 100% {
            text-shadow: 
                0 0 0 rgba(64, 158, 255, 0),
                0 0 0 rgba(103, 194, 58, 0);
            transform: translate(0, 0) skewX(0deg) skewY(0deg);
            filter: brightness(1) contrast(1);
        }
        15% {
            text-shadow: 
                1px 0 2px rgba(64, 158, 255, 0.5),
                -1px 0 1.5px rgba(103, 194, 58, 0.3),
                0 1px 1px rgba(255, 255, 255, 0.2);
            transform: translate(0.3px, -0.3px) skewX(0.2deg) skewY(0.15deg);
            filter: brightness(1.04) contrast(1.01);
        }
        30% {
            text-shadow: 
                -1px 0 3px rgba(64, 158, 255, 0.4),
                1px 0 2px rgba(103, 194, 58, 0.35),
                0 -1px 1.5px rgba(255, 255, 255, 0.15);
            transform: translate(-0.3px, 0.3px) skewX(-0.2deg) skewY(-0.15deg);
            filter: brightness(1.06) contrast(1.02);
        }
        45% {
            text-shadow: 
                0.5px 0 2px rgba(64, 158, 255, 0.3),
                -0.5px 0 1.5px rgba(103, 194, 58, 0.25),
                0 0.5px 0.8px rgba(255, 255, 255, 0.12);
            transform: translate(0.2px, -0.2px) skewX(0.15deg) skewY(0.1deg);
            filter: brightness(1.07) contrast(1.03);
        }
        60% {
            text-shadow: 
                -0.5px 0 1.5px rgba(64, 158, 255, 0.25),
                0.5px 0 1px rgba(103, 194, 58, 0.2),
                0 -0.5px 0.5px rgba(255, 255, 255, 0.08);
            transform: translate(-0.2px, 0.2px) skewX(-0.15deg) skewY(-0.1deg);
            filter: brightness(1.05) contrast(1.02);
        }
        75% {
            text-shadow: 
                0.3px 0 1px rgba(64, 158, 255, 0.15),
                -0.3px 0 0.8px rgba(103, 194, 58, 0.12),
                0 0.3px 0.3px rgba(255, 255, 255, 0.05);
            transform: translate(0.1px, -0.1px) skewX(0.1deg) skewY(0.05deg);
            filter: brightness(1.03) contrast(1.01);
        }
        85% {
            text-shadow: 
                0 0 0 rgba(64, 158, 255, 0.1),
                0 0 0 rgba(103, 194, 58, 0.1);
            transform: translate(0, 0) skewX(0deg) skewY(0deg);
            filter: brightness(1.02) contrast(1);
        }
    }
    
    .ripple-effect .hue,
    .ripple-effect span,
    .ripple-effect div {
        animation: waterWaveShimmer 2s ease-in-out infinite;
    }
    
    @keyframes waterWaveShimmer {
        0%, 100% {
            filter: brightness(1) saturate(1);
        }
        25% {
            filter: brightness(1.08) saturate(1.05);
        }
        50% {
            filter: brightness(1.12) saturate(1.08);
        }
        75% {
            filter: brightness(1.06) saturate(1.03);
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
