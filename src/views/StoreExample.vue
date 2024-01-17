<template>
  <main>
    <div>current page: {{ commonStore?.currentPage }}</div>
    <button @click="commonStore?.setCurrentPage(25)">change current page</button>
  </main>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common';
const commonStore = useCommonStore();
</script>
