<template>
  <n-card size='small' title="Количество учащихся, участвующих в перепроверке">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </n-card>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['4', '5'],
        datasets: [{
          label: 'Количество учеников',
          data: [632, 722],
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
