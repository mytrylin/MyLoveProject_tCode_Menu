<template>
  <main>
    <vMenu args="mrt" @change="handleChange">
      <input type="text" placeholder="捷運站"><br><br>
      <button>按鈕</button>
    </vMenu>
    <ul>
      <li v-for="(item, index) in skillDataCht" :key="index">
        {{ item }}
      </li>
    </ul>
  </main>
</template>

<script setup>
import vMenu from './components/vMenu.vue';
import { ref } from 'vue';

const skillData = ref(null);
const skillDataCht = ref(null);

const handleChange = ({ data, dataCht }) => {
  console.log(data, dataCht);
  skillData.value = data;
  skillDataCht.value = dataCht;
};
</script>