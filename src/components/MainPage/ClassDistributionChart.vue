<template>
  <div ref="plotlyChart"></div>
</template>

<script>
import Plotly from 'plotly.js'

export default {
  data() {
    return {
      classes: ['4', '5'],
      students: [632, 722]
    }
  },
  mounted() {
    const data = [{
      x: this.classes,
      y: this.students,
      type: 'bar'
    }]

    const layout = {
      title: 'Количество учащихся, принявших участие в ВПР',
      xaxis: { title: 'Класс' },
      yaxis: { title: 'Количество учеников' }
    }

    Plotly.newPlot(this.$refs.plotlyChart, data, layout)
  }
}
</script>
