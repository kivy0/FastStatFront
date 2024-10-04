<template>
  <n-data-table
    ref="table"
    :columns="columns"
    :data="data"
    :bordered="true"
    :single-line="false"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

function createColumns() {
  return [
    {
      title: "Группы участников",
      key: "group",
      sorter: (a, b) => a.group.localeCompare(b.group), // Sorting by group name
    },
    {
      title: "Количество участников",
      key: "participants",
      sorter: (a, b) => a.participants - b.participants, // Sorting by participants count
    },
    {
      title: "Распределение отметок в %",
      key: "gradesDistribution",
      children: [
        {
          title: "2",
          key: "grade2",
          sorter: (a, b) => a.grade2 - b.grade2, // Sorting by grade 2
        },
        {
          title: "3",
          key: "grade3",
          sorter: (a, b) => a.grade3 - b.grade3, // Sorting by grade 3
        },
        {
          title: "4",
          key: "grade4",
          sorter: (a, b) => a.grade4 - b.grade4, // Sorting by grade 4
        },
        {
          title: "5",
          key: "grade5",
          sorter: (a, b) => a.grade5 - b.grade5, // Sorting by grade 5
        }
      ]
    },
    {
      title: "Средняя отметка",
      key: "averageGrade",
      sorter: (a, b) => a.averageGrade - b.averageGrade, // Sorting by average grade
    },
    {
      title: "Качество обучения, %",
      key: "educationQuality",
      sorter: (a, b) => a.educationQuality - b.educationQuality, // Sorting by education quality
    },
    {
      title: "Успеваемость, %",
      key: "successRate",
      sorter: (a, b) => a.successRate - b.successRate, // Sorting by success rate
    }
  ]
}

const data = [
  {
    group: "Все муниципалитеты",
    participants: 2304,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.6,
    educationQuality: 53.1,
    successRate: 95
  },
  {
    group: "Алейский район",
    participants: 14,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.5,
    educationQuality: 50,
    successRate: 85.7
  },
  {
    group: "МКУ «Кашинская средняя общеобразовательная школа» имени Героя России А.И. Сугакова",
    participants: 8,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.9,
    educationQuality: 75,
    successRate: 87.5
  },
  {
    group: "МКУ \"Уропинская СОШ\"",
    participants: 6,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3,
    educationQuality: 16.7,
    successRate: 83.4
  }
];

export default defineComponent({
  setup() {
    const tableRef = ref(null);

    return {
      table: tableRef,
      columns: createColumns(),
      data,
    }
  }
});
</script>

<style scoped>
</style>
