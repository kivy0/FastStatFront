<template>
  <div ref="plotlyChart"></div>
</template>

<script>
import Plotly from 'plotly.js'

export default {
  data() {
    return {
      schoolTypes: ['Сельские', 'Городские'],
      schoolCounts: [470, 172],
      currentTheme: 'darkTheme'
    }
  },
  mounted() {
    const data = [{
      values: this.schoolCounts,
      labels: this.schoolTypes,
      type: 'pie',
    }]

    const layout = {
      title: {
        text: 'Количество образовательных организаций<br> по типу расположения, принявших участие в ВПР',
        font: {
          color: this.currentTheme === 'darkTheme' ? '#FFFFFF' : '#000000' // Цвет текста заголовка
        }
      },
      plot_bgcolor: this.currentTheme === 'darkTheme' ? '#18181C' : '#FFFFFF', // Цвет фона графика
      paper_bgcolor: this.currentTheme === 'darkTheme' ? '#18181C' : '#FFFFFF', // Цвет фона вокруг графика
      legend: {
        font: {
          color: this.currentTheme === 'darkTheme' ? '#FFFFFF' : '#000000' // Цвет текста в легенде
        }
      }
    }

    Plotly.newPlot(this.$refs.plotlyChart, data, layout)
  }
}
</script>
