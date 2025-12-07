<template>
  <div id="app">
    <input type="number" v-model="numberValue" />
    <button @click="addNumber(Number(numberValue))">Add Number</button>
    <button @click="showNumbers">Show Numbers</button>
    <div v-for="(number, index) in numberList" :key="index">
      {{ number }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const numberValue = ref<number>(0);
const numberList = ref<number[]>([]);
const show = ref(false);
const useStore = () => {
  const cache: number[] = [];
  const addNumber = (num: number) => {
    cache.push(num);
  }
  const getNumbers = () => {
    return [...cache];
  }
  return {
    addNumber,
    getNumbers
  }

}
const { addNumber, getNumbers } = useStore();
const showNumbers = () => {
  show.value = true;
  numberList.value = getNumbers();
}
</script>
