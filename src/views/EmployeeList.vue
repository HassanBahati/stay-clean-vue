<template>
    <div>
        <h1>Employee List </h1>
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>Salary</td>
                <td>Age</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.employee_name}} </td>
                <td>{{item.employee_salary}} </td>
                <td>{{item.employee_age}} </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue, { getCurrentInstance } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
//binding them to vue axios
Vue.use(VueAxios.axios)
export default {
    name: 'EmployeeList',
    data(){
        return{list:undefined}
    },
    //ilfe cycle method called when component is clled to fectch adata
    mounted(){
        Vue.axios.get('url')
        .then((res) => {
            this.list=res.data.data;
            console.warn(res.data.data)
        })
    }
}
/**
 * install axios and vue-axios 
 * make component 
 * use mounted life cycle hooks for call api
 * fetch api with axios 
 * use v-for to show list of data
 */

/**
 * vue create stay-clean
 * maually select features- choose vue version, router, babel,router , linter-prettier -press space bar
 * version 3
 * yes for history mode 
 * in dedicated config files
 * no for present future 
 * 
 */
</script>