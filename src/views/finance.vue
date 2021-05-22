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
        Finances Summary
      </div>
       <div class="view-list"><a class="view-link" href="/addEmployee">Add Payment</a></div>
      <!--dashboard area-->
      <div class="m-2 bg-white shadow rounded" style="height: 92vh">
        <!--ADD employee-->
        <div class="p-5">
          <!--MAKE PAYMENT btn-->
          <a class="btn btn-secondary" href=""
            >MAKE PAYMENT +<i class="fa fa-money"></i
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
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td></td>
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
  name: "Finance",
  components: { sideBar },
};
</script>

<style scoped>
.view-list{
    position: relative;
    display: flex;
    float: right;
    margin-right: 50px;
}
.view-link{
    color: #fff;
}
.view-link:hover{
    color: #fff;
}
</style>