<template>
<div>
  <ve-liquidfill :data="chartData" height="100%"/>  
</div>
  
</template>

<script>

 import echartsLiquidfill from 'echarts-liquidfill'
export default {
    
    data(){
        return{
            chartData:{
            columns:['title','percent'],
            rows:[{
                title:'rate',
               percent: 0.68 
            }]
        },
        chartSettings:{
            rate:{
                支付转化率:'80%'
            },
            label:{
                normal:{
                    formatter:(v)=>{
                        return `${Math.floor(v.data.value * 100)}%`
                    },
                    textStyle:{
                        fontSize:3,
                        color:'#999',
                        fontWeight:'normal'
                    },
                    position:['50%','50%']
                },
                insideColor:'#fff'
            },
            outline:{
                itemStyle:{
                    borderColor:'#aaa4a4',
                    borderWidth:1,
                    color:'none',
                    shadowBlur:0,
                    shadowColor:'#fff'
                },
                borderDistance:0
            },
            backgroundStyle:{
                color:'#fff',
            },
            itemStyle:{
                shadowBlur:0,
                shadowColor:'#fff'
            },
            amplitude:8
        }
    }
    }
}
</script>

<style>

</style>