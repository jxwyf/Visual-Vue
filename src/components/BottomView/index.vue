<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">93,634</div>
              <v-chart :options="searchUserOption" />
            </div>
             <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">198,782</div>
              <v-chart :options="searchUserOption"/>
            </div>
          </div>
            <div class="table-wrapper">
            <el-table :data="tableData" >
              <el-table-column prop="rank" label="排名" width="180"/>
               <el-table-column prop="keyword" label="关键词" width="180"/>
                <el-table-column prop="count" label="总搜索量" />
                 <el-table-column prop="users" label="搜索用户数" />
            </el-table>         
            <!-- 翻页器 -->
            <el-pagination layout="prev, pager, next" 
            :total="100" :page-size="5" background="" @current-change="onPageChange"/>
          </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
              <div class="title">分类销售排行</div>
              <dic class="radio-wrapper">
                <el-radio-group v-model="radioSelect" size="small">
                  <el-radio-button label="品类"></el-radio-button>
                  <el-radio-button label="商品"></el-radio-button>
                </el-radio-group>
              </dic>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
             <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchUserOption: {
        xAxis:{
          type: 'category',
          boundaryGap: false
        },
        yAxis:{
          show:false
          // min:0,
          // max:300
        },
        series:[{
          type: 'line',
          data:[100,150,200,250,300,220,180,232,220,],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          //
          lineStyle:{
            color:'rgb(95,187,255)'
          },
          //去除点
          itemStyle:{
            opacity:0
          },
          smonth: true
        }],
        grid:{
          top:0,
          left:0,
          bottom:0,
          right:0
        }
      },
      searchNumberOption:{},
      tableData:[
        {id:1,rank:1,keyword:'北京',count:100,users:90,range:'90%'},
        {id:2,rank:2,keyword:'北京',count:100,users:90,range:'90%'},
        {id:3,rank:3,keyword:'北京',count:100,users:90,range:'90%'},
        {id:4,rank:4,keyword:'北京',count:100,users:90,range:'90%'}
      ],
      radioSelect:'品类',
      categoryOptions:{}
    }
  },
  methods:{
    // 监听分页
    onPageChange(page) {
      console.log(page)
    },
    renderPieChart(){
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.50%',
           itemStyle:{
            color:'#e7e702'
          },
          name:'粉面粥店 | 15.4%'
        },{
          legendname: '简餐便当',
          value: 91,
          percent: '22.30%',
          itemStyle:{
            color:'#8d7fec'
          },
          name:'简餐便当 | 22.30%'
        },{
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle:{
            color:'#5085f2'
          },
          name:'汉堡披萨 | 21.15%'
        },
        
      ]
      this.categoryOptions = {
        title:[{
          text: '品类分布',
          textStyle: {
            fontSize:14,
            color:'#666'
          },
          left:20,
          top:20,
        },{
          text: '累计订单量',
          subtext: '320',
          x:'34.5%',
          y:'42.5%',
          textStyle:{
            fontSize:14,
            color:'#999'
          },
          subtextStyle:{
            fontSize:28,
            color:'#333'
          },
          textAlign:'center'
        }],
        series: [{
          name:'品类分布',
          type:'pie',
          data:mockData,
          label:{
            normal:{
              show:true,
              // position决定label在哪显示 图里面还是图外面
              position:'outter',
              formatter: function(params){
                console.log(params)
                // 可返回多个信息
                // return `${params.data.legendname} | ${params.data.percent}`
                return params.data.legendname
              }
            }
          },
          // 圆心点
          center:['35%','50%'],
          // 空心图 半径
          radius:['45%','60%'],
          labelLine:{
            normal:{
              length:5,
              length2:3,
              smonth: true
            }
          },
          //顺时针或者逆时针出现
          clockwise: true,
          itemStyle:{
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        legend:{
          type:'scroll',
          orient:'vertical',
          height:250,
          left:'70%',
          top:'middle',
          textStyle:{
            color:'#8c8c8c'
          }
        },
        //开启tooltip
        tooltip:{
          trigger:'item',
          formatter:function(params){
            const str = params.seriesName + '<br />' +params.marker 
            + params.data.legendname +'<br />'
            + '数量: ' + params.data.value + '<br />'
            + '占比: ' + params.data.percent 
            return str
          }
        }
      
      
      
  }
    }
  },
  mounted(){
    this.renderPieChart()
  }
}
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;
    .view {
      flex:1;
      width: 50%;
      box-sizing: border-box;
      &:first-child{
        padding: 0 10px 0 0;
      }
      &:first-child{
        padding: 0 0 0 10px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
        .radio-wrapper {
          flex:1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner{
          display: flex;
          padding:0 10px;
          margin-top: 20px;
          .chart{
            flex:1;
            padding:0 10px;
            .chart-title{
              color: #999;
              font-size: 14px;
            }
            .chart-data{
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts {
              height: 50px;
              width: 100%;
            }
          }
        }
        .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px ;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
      }
     
    }
  }
</style>
