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
        Add Employee
      </div>
      <div class="view-list"><a href="/humanResource">View Employees List</a></div>
      <!--dashboard area-->
      <div class="m-2 bg-white shadow rounded" style="height: 92vh">
        <!-- add order form  -->
        <form class="px-5 pt-5">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "../components/sideBar.vue";
export default {
  name: "addEmpployee",
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
a{
    color: #fff;
}
a:hover{
    color: #fff;
}
</style>