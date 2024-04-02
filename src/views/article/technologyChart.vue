
<template>
  <div
    ref="myChart"
    id="myChart"
    :style="{ width: '500px', height: '500px' }"
  ></div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
  setup() {
    // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
    let internalInstance = getCurrentInstance();
    let echarts = internalInstance.appContext.config.globalProperties.$echarts;

    onMounted(() => {
      const dom = document.getElementById('myChart');
      const myChart = echarts.init(dom); // 初始化echarts实例
      const option ={
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 45, name: 'JavaScript' },
              { value: 40, name: 'HTML' },
              { value: 39, name: 'CSS' },
              { value: 39, name: 'Vue' },
              { value: 35, name: 'Nodejs' },
            ]
          }
        ]
      };
      // 设置实例参数
      myChart.setOption(option);
    });
    return {};
  }
};
</script>

