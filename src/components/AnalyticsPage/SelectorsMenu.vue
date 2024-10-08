<template>
  <n-h1>Всероссийские проверочные работы</n-h1>
  <div class="selectors-container">
    <div v-for="(selectData, index) in selectDataList" :key="index" class="selector-row">
      <n-flex justify="space-around" align="center">
        <span class="selector_title-label">{{ selectData.label }}</span>
        <div class="selector-wrapper">
          <n-select
            :status="selectData.status"
            v-if="index !== 2"
            v-model:value="selectData.selected"
            :placeholder="selectData.placeholder"
            :options="selectData.options"
            :disabled="selectData.disabled"
            :multiple="selectData.multiple"
            :render-label="renderLabel"
            max-tag-count="responsive"
            clearable
            class="selector"
            :filterable="true"
            @update:value="(value) => handleSelectionChange(index, value)"
          />
          <n-cascader
            v-else
            :status="selectData.status"
            v-model:value="selectData.selected"
            :placeholder="selectData.placeholder"
            :options="selectData.options"
            :disabled="selectData.disabled"
            check-strategy="child"
            multiple
            label-field="label"
            value-field="value"
            children-field="children"
            class="selector"
            :show-path="false"
            clearable
            :filterable="true"
            max-tag-count="responsive"
            @update:value="(value) => handleSelectionChange(index, value)"
          />
        </div>
      </n-flex>
    </div>
  </div>
  <n-flex justify="center" align="center" class="button_container">
    <n-button size="large" tertiary type="success" @click="downloadTable" :loading="loadingDownload">
      <template #icon>
        <n-icon>
          <DownloadIcon />
        </n-icon>
      </template>
      Загрузить
    </n-button>
    <n-button size="large" tertiary type="success" @click="createTable" :loading="loadingCreate">
      <template #icon>
        <n-icon>
          <EyeIcon />
        </n-icon>
      </template>
      Показать
    </n-button>
    <n-button size="large" tertiary type="error" @click="resetAll">
      <template #icon>
        <n-icon>
          <ResetIcon />
        </n-icon>
      </template>
      Сброс
    </n-button>
  </n-flex>
</template>

<script>
/* eslint-disable */

import { defineComponent, ref, h } from 'vue';
import { NSelect, NH1, NButton, NIcon, NFlex } from 'naive-ui';
import { get_years, get_municipalities, get_educational_organizations, get_grades, get_subjects } from '../../stat_api';
import { Refresh as ResetIcon, DownloadOutline as DownloadIcon,
         EyeOutline as EyeIcon, BarChartOutline as BarIcon,
         PieChartOutline as PieIcon, DocumentOutline as DocumentIcon} from "@vicons/ionicons5";
import { useMessage } from 'naive-ui';
import { get_report } from '../../stat_api';

export default defineComponent({
  components: {
    NSelect,
    NH1,
    NButton,
    NIcon,
    NFlex,
    ResetIcon,
    DownloadIcon,
    EyeIcon,
    BarIcon,
    PieIcon,
    DocumentIcon,
    h,
  },
  setup(props, { emit }) {
const loadingCreate = ref(false);
const loadingDownload = ref(false);

const message = useMessage();

const validateSelections = () => {
  let allSelected = true;
  selectDataList.value.forEach((item) => {
    if (item.selected === null || item.selected.length === 0) {
      allSelected = false;
      item.status = 'error'; // Устанавливаем статус ошибки
      setTimeout(() => {
        item.status = ''; // Сбрасываем статус через 3 секунды
      }, 3000);
    }
  });
    
  if (!allSelected) {
    message.error('Не выбраны все параметры!');
  }
  
  return allSelected;
}

const createTable = async () => {
  loadingCreate.value = true; // Запускаем загрузку
  if (validateSelections()) {
    try {
      const selectedValues = selectDataList.value.map(item => item.selected); // Извлекаем значения selected
      const res = await get_report(...selectedValues); 
      changeIsShowTable(true);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  } else {
    changeIsShowTable(false);
  }
  loadingCreate.value = false; // Заканчиваем загрузку
}

const downloadTable = async () => {
  if (validateSelections()) {
    loadingDownload.value = true;
    const selectedValues = selectDataList.value.map(item => item.selected); // Извлекаем значения selected
    const res = await get_report(...selectedValues); 
    message.warning('🚧Все еще в разработке!');
  } else {
  }
  loadingDownload.value = false;
}

const changeIsShowTable = (value) => {
  emit('change', value);
}

    const renderLabel = (option) => {
      return [
        option.icon
          ? h(
              NIcon,
              {
                style: {
                  verticalAlign: '-0.15em',
                  marginRight: '4px',
                },
              },
              {
                default: () => h(option.icon),
              }
            )
          : null,
        option.label,
      ];
    };
    const selectOptionsReportType = [
      { label: "Сравнение отметок с отметками по журналу", value: "100", icon: BarIcon },
      { label: "Статистика по отметкам", value: "200", icon: BarIcon },
      { label: "Результаты ВПР", value: "300", icon: DocumentIcon },
    ];

    const selectDataList = ref([
      {
        label: "Вид отчета",
        placeholder: "Вид отчета",
        selected: ref(null),
        options: selectOptionsReportType,
        disabled: false,
        multiple: false,
      },
      {
        label: "Год проведения",
        placeholder: "Год",
        selected: ref([]),
        options: [],
        disabled: true,
        multiple: true,
      },
      {
        label: "Образовательная организация",
        placeholder: "Организация",
        selected: ref([]),
        options: [],
        disabled: true,
        multiple: true,
      },
      {
        label: "Параллель",
        placeholder: "Параллель",
        selected: ref([]),
        options: [],
        disabled: true,
        multiple: true,
      },
      {
        label: "Дисциплина",
        placeholder: "Дисциплина",
        selected: ref([]),
        options: [],
        disabled: true,
        multiple: true,
      },
    ]);

    const resetAll = () => {
      changeIsShowTable();
      selectDataList.value.forEach((item, index) => {
        if (item.selected) {
          item.selected = item.multiple ? [] : null;
        }
        item.disabled = index === 0 ? false : true;
        if (index === 1) {
          item.options = [];
        }
      });
    }; 

    const fetchYears = async () => {
      selectDataList.value[1].options = await get_years();
    };

    const fetchEducationalOrganizations = async (years) => {
      if (years.length === 0) return;

      selectDataList.value[2].options = await get_educational_organizations({
          years
      });
      selectDataList.value[2].disabled = false;
    };

    const fetchGrades = async (years, educational_organizations_logins) => {
        if (educational_organizations_logins.length === 0) return;

        selectDataList.value[3].options = await get_grades({
            years,
            educational_organizations_logins
        });
        selectDataList.value[3].disabled = false;

    };

    const fetchSubjects = async (years, grades, educational_organizations_logins) => {
        if (educational_organizations_logins.length === 0 || grades.length === 0) return;
        selectDataList.value[4].options = await get_subjects({
            years,
            grades,
            educational_organizations_logins
        });
        selectDataList.value[4].disabled = false;
    };

    const handleSelectionChange = async (index, value) => {
        switch (index) {
            case 0: // Выбран тип отчета
                if (value) {
                    await fetchYears();
                    selectDataList.value[1].disabled = false;
                } else {
                    selectDataList.value[1].selected = [];
                    selectDataList.value[1].disabled = true;
                    selectDataList.value[2].selected = [];
                    selectDataList.value[2].disabled = true;
                    selectDataList.value[3].selected = [];
                    selectDataList.value[3].disabled = true;
                    selectDataList.value[4].selected = [];
                    selectDataList.value[4].disabled = true;
                }
                break;

            case 1: // Выбран год
                selectDataList.value[2].selected = [];
                selectDataList.value[3].selected = [];
                selectDataList.value[3].disabled = true;
                selectDataList.value[4].selected = [];
                selectDataList.value[4].disabled = true;
                if (value.length > 0) {
                    await fetchEducationalOrganizations(value);
                    selectDataList.value[2].disabled = false;
                } else {
                    selectDataList.value[2].disabled = true;
                }
                break;

            case 2: // Выбрана образовательная организация
                selectDataList.value[3].selected = [];
                selectDataList.value[4].selected = [];
                selectDataList.value[4].disabled = true;
                if (value.length > 0) {
                    await fetchGrades(selectDataList.value[1].selected, value);
                    selectDataList.value[3].disabled = false;
                } else {
                  selectDataList.value[3].disabled = true;
                }
                break;

            case 3: // Выбрана параллель
                selectDataList.value[4].selected = [];
                selectDataList.value[4].disabled = true;
                if (value.length > 0) {
                    await fetchSubjects(selectDataList.value[1].selected, value, selectDataList.value[2].selected);
                }
                break;

            default:
                break;
        }
    };
    fetchYears();
    return {
      selectDataList,
      renderLabel,
      handleSelectionChange,
      resetAll,
      changeIsShowTable,
      createTable,
      downloadTable,
      loadingDownload,
      loadingCreate
    }
  }
});
</script>

<style scoped>
.n-h1 {
  text-align: center;
}
.selectors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.selector_title-label {
  text-align: left;
  white-space: nowrap;
  font-weight: 500;
  font-size: medium;
  width: 300px;
}
.selector-row {
  margin-bottom: 16px; 
  width: 100%; 
  max-width: 1000px; 
}
.selector-wrapper {
  flex: 0.6; 
}
.selector {
  width: 400px;
}
.button_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
}
</style>
<style lang="css">
.n-cascader-submenu:not(:first-child) {
  min-width: 350px !important;
}
</style>