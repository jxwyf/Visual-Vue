<template>
  <common-card
    title="累计用户数"
    value="1,087,503"
  >
    <template>
      <v-chart :options="getOptions()" :style="{width:'100%',height:'100%'}"/>
    </template>
    <template v-slot:footer>
    <div class="total-users-footer">
      <span>日同比</span>
      <span class="emphasis">8.73%</span>
      <div class="increase"/>
      <span class="month">月同比</span>
      <span class="emphasis">35.91%</span>
      <div class="decrease"/>
    </div>
    </template>
  </common-card>
</template>

<script>

import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
    methods: {
      getOptions(){
        return{
           grid: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
          //  坐标系
            const endPoint = api.coord([value, 0])

            return {
              type: 'path',
              position: endPoint,
              shape: {
                d: '',
                x: 0,
                y: 0,
                width: 20,
                height: 20
              },
              style: {
                fill: 'red'
              }
            }
          }
        }]
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .total-users-footer{
    display: flex;
    align-content: center;
    .month{
      margin-left: 10px;
    }
  }
</style>
