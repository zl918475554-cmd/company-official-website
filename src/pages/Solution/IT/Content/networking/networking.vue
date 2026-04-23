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
    
    /* 波纹动画效果 - 水面波纹扭曲 */
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
        border: 3px solid rgba(255, 255, 255, 0.95);
        box-shadow: 
            0 0 0 0 rgba(255, 255, 255, 0),
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 0 0 rgba(255, 255, 255, 0),
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 15px rgba(255, 255, 255, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
        animation: waterRippleExpandDark 2s ease-in-out infinite;
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
        border: 2px solid rgba(64, 158, 255, 0.8);
        box-shadow: 
            0 0 0 0 rgba(64, 158, 255, 0),
            0 0 0 0 rgba(255, 255, 255, 0),
            0 0 10px rgba(64, 158, 255, 0.3);
        animation: waterRippleExpandDark 2s ease-in-out infinite;
        animation-delay: 0.6s;
        z-index: 9998;
    }
    
    @keyframes waterRippleExpandDark {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            box-shadow: 
                0 0 0 0 rgba(255, 255, 255, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(255, 255, 255, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 15px rgba(255, 255, 255, 0.6),
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
                0 0 0 15px rgba(255, 255, 255, 0.8),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 0 0 rgba(255, 255, 255, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 20px rgba(255, 255, 255, 0.5),
                inset 0 0 20px rgba(255, 255, 255, 0.3);
            filter: blur(0.3px);
        }
        50% {
            transform: translate(-50%, -50%) scale(5);
            opacity: 0.7;
            box-shadow: 
                0 0 0 30px rgba(255, 255, 255, 0.6),
                0 0 0 20px rgba(64, 158, 255, 0.5),
                0 0 0 0 rgba(255, 255, 255, 0),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 18px rgba(255, 255, 255, 0.4),
                inset 0 0 15px rgba(255, 255, 255, 0.2);
            filter: blur(1px);
        }
        75% {
            transform: translate(-50%, -50%) scale(7);
            opacity: 0.4;
            box-shadow: 
                0 0 0 45px rgba(255, 255, 255, 0.4),
                0 0 0 35px rgba(64, 158, 255, 0.35),
                0 0 0 25px rgba(255, 255, 255, 0.3),
                0 0 0 0 rgba(64, 158, 255, 0),
                0 0 12px rgba(255, 255, 255, 0.25),
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
                0 0 0 60px rgba(255, 255, 255, 0),
                0 0 0 50px rgba(64, 158, 255, 0),
                0 0 0 40px rgba(255, 255, 255, 0),
                0 0 0 30px rgba(64, 158, 255, 0),
                0 0 0 rgba(255, 255, 255, 0),
                inset 0 0 0 rgba(255, 255, 255, 0);
            filter: blur(4px);
        }
    }
    
    .ripple-effect {
        animation: waterSurfaceDistortionDark 2s ease-in-out infinite;
    }
    
    @keyframes waterSurfaceDistortionDark {
        0%, 100% {
            text-shadow: 
                0 0 0 rgba(255, 255, 255, 0),
                0 0 0 rgba(64, 158, 255, 0);
            transform: translate(0, 0) skewX(0deg) skewY(0deg);
            filter: brightness(1) contrast(1);
        }
        15% {
            text-shadow: 
                1px 0 2px rgba(255, 255, 255, 0.6),
                -1px 0 1.5px rgba(64, 158, 255, 0.4),
                0 1px 1px rgba(255, 255, 255, 0.2);
            transform: translate(0.3px, -0.3px) skewX(0.2deg) skewY(0.15deg);
            filter: brightness(1.08) contrast(1.02);
        }
        30% {
            text-shadow: 
                -1px 0 3px rgba(255, 255, 255, 0.5),
                1px 0 2px rgba(64, 158, 255, 0.45),
                0 -1px 1.5px rgba(255, 255, 255, 0.15);
            transform: translate(-0.3px, 0.3px) skewX(-0.2deg) skewY(-0.15deg);
            filter: brightness(1.12) contrast(1.04);
        }
        45% {
            text-shadow: 
                0.5px 0 2px rgba(255, 255, 255, 0.4),
                -0.5px 0 1.5px rgba(64, 158, 255, 0.3),
                0 0.5px 0.8px rgba(255, 255, 255, 0.15);
            transform: translate(0.2px, -0.2px) skewX(0.15deg) skewY(0.1deg);
            filter: brightness(1.15) contrast(1.05);
        }
        60% {
            text-shadow: 
                -0.5px 0 1.5px rgba(255, 255, 255, 0.3),
                0.5px 0 1px rgba(64, 158, 255, 0.25),
                0 -0.5px 0.5px rgba(255, 255, 255, 0.1);
            transform: translate(-0.2px, 0.2px) skewX(-0.15deg) skewY(-0.1deg);
            filter: brightness(1.12) contrast(1.04);
        }
        75% {
            text-shadow: 
                0.3px 0 1px rgba(255, 255, 255, 0.2),
                -0.3px 0 0.8px rgba(64, 158, 255, 0.15),
                0 0.3px 0.3px rgba(255, 255, 255, 0.08);
            transform: translate(0.1px, -0.1px) skewX(0.1deg) skewY(0.05deg);
            filter: brightness(1.08) contrast(1.02);
        }
        85% {
            text-shadow: 
                0 0 0 rgba(255, 255, 255, 0.1),
                0 0 0 rgba(64, 158, 255, 0.1);
            transform: translate(0, 0) skewX(0deg) skewY(0deg);
            filter: brightness(1.04) contrast(1.01);
        }
    }
    
    .ripple-effect div {
        animation: waterWaveShimmerDark 2s ease-in-out infinite;
    }
    
    @keyframes waterWaveShimmerDark {
        0%, 100% {
            filter: brightness(1) saturate(1);
        }
        25% {
            filter: brightness(1.15) saturate(1.1);
        }
        50% {
            filter: brightness(1.2) saturate(1.15);
        }
        75% {
            filter: brightness(1.1) saturate(1.05);
        }
    }
</style>
