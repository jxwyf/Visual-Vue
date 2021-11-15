<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings"/>
</template>

<script>
export default {
    data(){
        return{
            chartData:{
                columns:['name','value'],
                rows:[{
                    name:'江西',
                    value:100
                },
                {
                    name:'北京',
                    value:90
                },
                {
                    name:'南京',
                    value:80
                },
                {
                    name:'天津',
                    value:70
                },
                {
                    name:'东京',
                    value:60
                }]
            },
            chartSettings:{
                
            }
        }
    }

}
</script>

<style>

</style>