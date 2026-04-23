<template>
    <div>     
        <transition enter-active-class="animate__animated animate__slideInUp" appear>     
            <div class="networking" v-show="AnimateFlag_1">   
                <div class="navigation">
                    <ul>
                        <li>
                            <div 
                                :class="[classObj1, { 'search-highlight': isHighlighted('vpn'), 'ripple-effect': isRippled('vpn') }]" 
                                tabindex="1" 
                                @click="toVPN"
                            >
                                MPLS-VPN组网
                            </div>                  
                        </li>
                        <li>
                            <div 
                                :class="[classObj2, { 'search-highlight': isHighlighted('mstp'), 'ripple-effect': isRippled('mstp') }]" 
                                tabindex="2" 
                                @click="toMSTP"
                            >
                                MSTP/自建组网
                            </div>
                        </li>
                        <li>
                            <div 
                                :class="[classObj3, { 'search-highlight': isHighlighted('sdwan'), 'ripple-effect': isRippled('sdwan') }]" 
                                tabindex="3" 
                                @click="toSDWAN"
                            >
                                SD-WAN组网
                            </div>
                        </li>
                    </ul>              
                </div>       
                
                <div style="min-width:1366px">
                    <keep-alive>
                        <router-view></router-view>                
                    </keep-alive>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>
import { ItAnimation } from '@/mixin'
import { SearchBus, SearchState } from '@/utils/searchBus'

export default {
    name:'networking',
    data(){
        return {
            classObj1:{
                VPNBackColor:false,
            },
            classObj2:{
                MSTPBackColor:false,
            },
            classObj3:{
                SDWANBackColor:false,
            },
            highlightedId: null,
            rippledId: null
        }
    },
    mixins:[ItAnimation],
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
    methods:{
        isHighlighted(id) {
            return this.highlightedId === id
        },
        isRippled(id) {
            return this.rippledId === id
        },
        toVPN(){
            SearchState.triggerRippleEffect('vpn')
            this.$router.replace({
                path:'/solutionproject/itscience/vpn'
            })
        },
        toMSTP(){
            SearchState.triggerRippleEffect('mstp')
            this.$router.replace({
                path:'/solutionproject/itscience/mstp'
            })
        },
        toSDWAN(){
            SearchState.triggerRippleEffect('sdwan')
            this.$router.replace({
                path:'/solutionproject/itscience/sdwan'
            })
        }
    },
    watch:{
        $route(to){
            if(to.path === '/solutionproject/itscience/vpn'){
                this.classObj1.VPNBackColor = true 
                this.classObj2.MSTPBackColor = false
                this.classObj3.SDWANBackColor = false
            }if(to.path === '/solutionproject/itscience/mstp'){
                this.classObj1.VPNBackColor = false
                this.classObj2.MSTPBackColor = true
                this.classObj3.SDWANBackColor = false
            }if(to.path === '/solutionproject/itscience/sdwan'){               
                this.classObj1.VPNBackColor = false
                this.classObj2.MSTPBackColor = false
                this.classObj3.SDWANBackColor = true
            }
        },
    },
    mounted(){
        if(this.$route.path === '/solutionproject/itscience/vpn'){
            this.classObj1.VPNBackColor = true 
            this.classObj2.MSTPBackColor = false
            this.classObj3.SDWANBackColor = false
        }if(this.$route.path === '/solutionproject/itscience/mstp'){
            this.classObj1.VPNBackColor = false
            this.classObj2.MSTPBackColor = true
            this.classObj3.SDWANBackColor = false
        }if(this.$route.path === '/solutionproject/itscience/sdwan'){               
            this.classObj1.VPNBackColor = false
            this.classObj2.MSTPBackColor = false
            this.classObj3.SDWANBackColor = true
        }
    }
}
</script>

<style scoped>  
    /* 组网 部分 */
    .networking{
        width: 100%;
        height: 550px;
        /* background-color: rgb(2, 67, 137); */
        background-color: #383B4C;
        padding-top: 30px;
    }
    /* 组网导航栏 */
    .navigation{
        width: 900px;
        height: 60px;
        /* background-color: rgb(231, 232, 255); */
        background-color: #4d5770;
        border-radius: 50px;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }
    .navigation ul{
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
    }
    .navigation ul li{
        width: 300px;
        text-align: center;
        /* color: #606266; */
        color: white;
        font-size: 18px;
        cursor: pointer;
        list-style-type: none;
        float: left;
        line-height: 60px;
    }
    .VPNBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background-color: #F56C6C;
        background: linear-gradient(#ff4949,#F56C6C);
    }
    .MSTPBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background: linear-gradient(#ff4949,#F56C6C);

    }
    .SDWANBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background: linear-gradient(#ff4949,#F56C6C);

    }
    
    /* 搜索高亮样式 */
    .search-highlight {
        position: relative;
        z-index: 1;
    }
    
    .search-highlight::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 110%;
        height: 120%;
        border-radius: 35px;
        background: rgba(64, 158, 255, 0.3);
        transform: translate(-50%, -50%);
        z-index: -1;
        animation: highlightPulse 1s ease-in-out infinite;
    }
    
    .search-highlight::after {
        content: '';
        position: absolute;
        bottom: 8px;
        left: 50%;
        width: 80%;
        height: 3px;
        background: linear-gradient(90deg, #409eff, #67c23a);
        border-radius: 2px;
        transform: translateX(-50%);
        animation: underlineGrow 0.3s ease-out forwards;
    }
    
    @keyframes highlightPulse {
        0%, 100% {
            opacity: 0.5;
            box-shadow: 0 0 10px rgba(64, 158, 255, 0.5);
        }
        50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(64, 158, 255, 0.8);
        }
    }
    
    @keyframes underlineGrow {
        from {
            width: 0;
        }
        to {
            width: 80%;
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
        background: rgba(255, 255, 255, 0.8);
        transform: translate(-50%, -50%);
        animation: rippleExpand 0.6s ease-out forwards;
        pointer-events: none;
        z-index: 10;
    }
    
    @keyframes rippleExpand {
        0% {
            width: 0;
            height: 0;
            opacity: 0.8;
        }
        100% {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
</style>
