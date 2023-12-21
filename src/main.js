import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


//import DataTable from 'primevue/datatable';
//import Column from 'primevue/column';


createApp(App).mount('#app')
App.use(PrimeVue, { ripple: true })
//App.use(DataTable,Column)

