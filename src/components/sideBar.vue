<template>
  <div class="bg-white shadow-sm" style="height: 97vh">
          <!--heading-->
          <h4 class="text-center pt-2">Stay Clean Initiative</h4>
          <h6 class="text-center">"Contact Us today, We manage your wastes with love"</h6>
          <!--logged in user-->
          <div class="shadow-sm p-2 m-4 bg-light rounded">Hassan Bahati here 👋</div>
          <!--side bar navigations-->
          <ul>
            <li>
              <router-link class="text-dark" to="/dashboard"><i class="fa fa-dashboard m-3"></i>Dashboard</router-link>
             
            </li>
            <li>
              <router-link class="text-dark" to="/orders"><i class="fa fa-phone m-3"></i>Orders</router-link>
            </li>
            <li>
              <router-link class="text-dark" to="/humanResource"><i class="fa fa-users m-3"></i>Human Resource</router-link>
            </li>
            <li>
              <router-link class="text-dark" to="/trucks"><i class="fa fa-truck m-3"></i>Trucks</router-link>
            </li>
            <li>
              <router-link class="text-dark" to="/finance"><i class="fa fa-money m-3"></i>Finance</router-link>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'sideBar'
}
</script>

<style scoped>
li{
  list-style: none;
}
</style>