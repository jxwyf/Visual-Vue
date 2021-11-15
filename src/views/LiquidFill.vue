<template>
  <div id="container"/>
</template>

<script>
export default {
    
    mounted(){
        const data = [0.68,0.4,0.2]
        const chart = this.$echarts.init(document.getElementById('container'))
        chart.setOption({
            series:[{
                type:'liquidFill',
                data:data,
                color:['red','blue','yellow'],
                itemStyle:{
                    opacity: 0.6
                },
                emphasis:{
                    itemStyle:{
                        opacity:0.9
                    }
                }
            }]
        })
    }

}
</script>

<style>

</style>