<template>
  <div ref="plotlyChart"></div>
</template>

<script>
import Plotly from 'plotly.js'

export default {
  data() {
    return {
      schoolTypes: ['Сельские', 'Городские'],
      schoolCounts: [470, 172]
    }
  },
  mounted() {
    const data = [{
      values: this.schoolCounts,
      labels: this.schoolTypes,
      type: 'pie'
    }]

    const layout = {
      title: 'Количество образовательных организаций<br> по типу расположения, принявших участие в ВПР',
    }

    Plotly.newPlot(this.$refs.plotlyChart, data, layout)
  }
}
</script>
