<template>
  <div @click="open">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, onMounted, onUnmounted } from 'vue';

// Define props
const props = defineProps({
  args: String,
  initData: Array,
  initDataCht: Array,
  selectNum: [String, Number],
  type: [String, Number],
  filterMatch: [String, Array],
  filterExclude: [String, Array],
});

// Define emits
const emit = defineEmits(['change']);

// Reactive references
const elementId = ref('');
const input = ref(null);
const inputCht = ref(null);
const data = ref([]);
const dataCht = ref([]);

// Watchers
watch(data, (newData) => {
  emit('change', {
    data: newData,
    dataCht: dataCht.value,
  });
});

watch(() => props.initData, (newData) => {
  data.value = newData;
  input.value.value = newData.join(',');
  input.value.setAttribute('value', newData.join(','));
});

watch(() => props.initDataCht, (newData) => {
  if (props.initData.length !== 0 && props.initData.length != newData.length) {
    const codeName = tCodeMenu.getArgs(props.args)?.codeName;
    newData = data.value.map((k) => {
      const selectItem = tcodeParams[codeName]?.arr.find(item => item.k == k);
      return "tCodeCity" == codeName && selectItem.v1 != selectItem.v ? `${selectItem.v1} ${selectItem.v}` : selectItem.v;
    });
  }
  dataCht.value = newData;
  inputCht.value.value = newData.join(',');
  inputCht.value.setAttribute('value', newData.join(','));
});

// Function to open the menu
const open = () => {
  open1111Menu(
    elementId.value,
    props.args,
    `${props.selectNum || 100}`,
    {},
    `${props.type || ""}`,
    `open1111Menu["${elementId.value}"]();`,
    Array.isArray(props.filterMatch) ? props.filterMatch.join(",") : props.filterMatch,
    Array.isArray(props.filterExclude) ? props.filterExclude.join(",") : props.filterExclude,
  );
};

// Lifecycle hooks
onMounted(() => {
  elementId.value = Date.now().toString(36) + Math.random().toString(36).substring(2);

  input.value = document.createElement('input');
  input.value.setAttribute('type', 'hidden');
  input.value.setAttribute('id', `${elementId.value}`);
  document.body.appendChild(input.value);

  inputCht.value = document.createElement('input');
  inputCht.value.setAttribute('type', 'hidden');
  inputCht.value.setAttribute('id', `${elementId.value}Cht`);
  document.body.appendChild(inputCht.value);

  document.addEventListener("readystatechange", function () {
    open1111Menu[elementId.value] = function () {
      data.value = input.value.value.split(",");
      dataCht.value = inputCht.value.value.split(",");
    };
  });
});

onUnmounted(() => {
  document.body.removeChild(input.value);
  document.body.removeChild(inputCht.value);
});
</script>