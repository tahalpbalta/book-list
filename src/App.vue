<template>
  <div style="display: flex; flex-direction: column;">
    <h1 style="text-align:center"> Kitap Listesi</h1>
    <div style="display: flex; justify-content: flex-end; align-items: center;">
      <p>{{ counter }}</p>
      <Button @click="counter++" style="align-self:flex-end ;" > + </Button>
    </div>
    
    <DataTable :value="kitaplar" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="title" header="Baslik"></Column>
      <Column field="author" header="Yazar"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import 'primevue/resources/themes/lara-light-purple/theme.css'
import mockdata from './mockdata.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

import { ref } from 'vue';

const counter = ref(0)
// const increase = () => {
//   counter.value++
// }
const kitaplar = mockdata;




</script>

<style>

</style>