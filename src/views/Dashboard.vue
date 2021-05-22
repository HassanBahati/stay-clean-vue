<template>
  <!--Grid row-->
  <div class="row bg-light">
    <!--Grid column for side bar-->
    <div class="col-lg-3">
      <!--side bar-->
      <sideBar />
    </div>
    <!--Grid column for dashboard area-->
    <div class="col-lg-9 bg-light">
      <!--relative of dashboard-->
      <div
        class="shadow-none mx-4 p-2 bg-success rounded text-white"
        style="margin: 10px 1px -30px 1px; position: relative"
      >
        good morning, Bahati 👋
      </div>
      <!--dashboard area-->
      <div class="m-2 bg-white shadow rounded" style="height: 92vh">
        <!-- add ons  -->
        <div class="p-5">
          <!-- add order  -->
          <router-link class="btn btn-secondary" to="/addOrder"
            >ADD ORDER +<i class="fa fa-phone"></i
          ></router-link>
          <!-- add employee  -->
          <router-link class="btn btn-secondary ml-3" to="/addEmployee"
            >ADD EMPLOYEE +<i class="fa fa-users"></i
          ></router-link>
          <!-- make payment  -->
          <router-link class="btn btn-secondary ml-3" to="/addFinance"
            >ADD PAYMENT +<i class="fa fa-money"></i
          ></router-link>
          <!-- add truck  -->
          <router-link class="btn btn-secondary ml-3" to="/addTruck"
            >ADD TRUCK +<i class="fa fa-truck"></i
          ></router-link>
        </div>

        <!--Grid row for dashboard cards-->
        <div class="row px-4">
          <!--Grid column with card 1-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 1</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 2-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 3-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <!-- 2nd row  -->
        <!--Grid row for dashboard cards-->
        <div class="row px-4 pt-4">
          <!--Grid column with card 1-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 1</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 2-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 3-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <!-- 3rd row  -->
        <!--Grid row for dashboard cards-->
        <div class="row px-4 pt-4">
          <!--Grid column with card 1-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 100</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 2-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <!--Grid column with card 3-->
          <div class="col">
            <div class="card-body shadow rounded">
              <h5 class="card-title">Section 3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>

              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "../components/sideBar.vue";
export default {
  name: "Dashboard",
  components: { sideBar },
};
</script>

<style scoped>
</style>