<template>
  <!--Grid row-->
  <div class="row bg-light">
    <!--Grid column for side bar-->
    <div class="col-lg-3">
      <!--side bar-->
      <sideBar />
    </div>
    <!--Grid column for employee list area-->
    <div class="col-lg-9 bg-light">
      <!--relative of dashboard-->
      <div
        class="shadow-none mx-4 p-2 bg-success rounded text-white"
        style="margin: 10px 1px -30px 1px; position: relative"
      >
        Employee List
      </div>
      <!--dashboard area-->
      <div class="m-2 bg-white shadow rounded" style="height: 92vh">
        <!--ADD employee-->
        <div class="p-5">
          <!--add driver btn-->
          <a class="btn btn-secondary" href=""
            >ADD DRIVER +<i class="fa fa-users"></i
          ></a>
          <!--add conductor-->
          <a class="mx-5 btn btn-secondary" href=""
            >ADD CONDUCTOR +<i class="fa fa-users"></i
          ></a>
          <!--search bar-->
          <form class="search" action="">
            <div class="row">
              <div class="col-lg-10"></div>
              <input
                type=""
                class="form-control"
                placeholder="Search role ..."
              />
              <div class="col-lg-2">
                <input type="submit" value="Search" class="btn btn-block" />
              </div>
            </div>
          </form>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>D.O.B</th>
              <th>NIN</th>
              <th>Residence</th>
              <th>Licence</th>
              <th>past Incidence</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bahati</td>
              <td>Male</td>
              <td>25/01/2021</td>
              <td>cm47059720495gh</td>
              <td>Kampala</td>
              <td>r5983</td>
              <td>theft,accident</td>
              <td>driver</td>
              <td><a href="">Update</a></td>
              <td>
                <form action="">
                  <input type="hidden" placeholder="" name="" value="" /><button
                    type="submit"
                    class="btn btn-dark btn-block"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "../components/sideBar.vue";
export default {
  name: "humanResource",
  components: { sideBar },
};
</script>

<style scoped>
</style>