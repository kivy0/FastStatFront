<template>
   <n-card size='small' title="Количество образовательных организаций по типу расположения, принявших участие в ВПР">
  <Pie
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</n-card>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Сельские', 'Городские'],
        datasets: [{
          data: [470, 172],
          backgroundColor: ['#7efc87', '#929c93']
        }]
      },
      chartOptions: {
        responsive: true,
      }
    }
  }
}
</script>
<style scoped>
.n-card {
  text-align: center;
}
</style>