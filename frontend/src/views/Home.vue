<template>
  <div class="home">
    <p>This is the home page</p>
    <div>
      <p>Your user id is: {{ msg }}</p>
    </div>
  </div>
</template>

<script>
// import { apiService } from "@/common/api/api.service";
import session from "@/common/api/session";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: [],
      msg: "Waiting...",
      authStr: "Bearer " + `3f479250c2dec1508bff235e75ff0e5ce9b495c8`
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      session
        .get("user/")
        .then(response => {
          this.user = response.data;
        })
        .then(() => (this.msg = this.user[0].id))
        .catch(() => {
          this.msg = "API call failed";
        });
    }
  }
};
</script>
