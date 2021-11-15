<template>
  <ve-liquidfill :data="chartData" height="100%"  width="100%" :settings="chartSettings"/>
</template>

<script>

export default {
    
    data(){
        return{
            chartData:{
            columns:['title','percent'],
            rows:[{
                title:'rate',
               percent: 0.90 
            }]
        },
        chartSettings:{
            seriesMap:{
                rate:{
                    radius:'80%'
                },
                label:{
                    normal:{
                        formatter:(v)=>{
                            return `${Math.floor(v.data.value * 100)}%`
                        },
                    textStyle:{
                        fontSize:12,
                        color:'#999',
                        fontWeight:'normal'
                    },
                    position:['50%','50%']
                },
                insideColor:'#fff'
            }
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