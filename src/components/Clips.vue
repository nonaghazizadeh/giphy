<template>
  <div class="mb-5">
    <h4 class="pt-3">
      <font-awesome-icon :icon="['fas', 'play']" /><span class="title"
        >Clips</span
      >
    </h4>
    <b-container>
      <b-row>
        <b-col>
          <b-row>
            <img
              src="https://media2.giphy.com/media/x8aurwY9fGOvTI1gLs/giphy.gif?cid=ecf05e47vsrky75d9936tcftvpz6g8h5o4f73nn3f8pgv7sc&amp;rid=giphy.gif"
              width="739"
              height="415.6875"
            />
            <p class="first-line">We are All In This Together</p>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <div class="pl-5">
              <img
                class="giphy-gif-img"
                src="https://media4.giphy.com/media/vZp3A38ErwQekfy4hE/200.gif?cid=ecf05e471j4vf6modc2ly2ub3a10rliazrjzstlywvia8xwu&amp;rid=200.gif"
                width="287"
                height="161.4375"
                alt="Lit Lit."
                style="background: rgb(255, 102, 102)"
              />
              <p>
                <span class="first-line"> Too Darn Loud</span>
                <br />
                Back To Future
              </p>
            </div>
          </b-row>
          <b-row class="pl-5">
            <div>
              <img
                class="giphy-gif-img giphy-img-loaded"
                src="https://media3.giphy.com/media/NUkOGzInVS7RrAOaJV/200.gif?cid=ecf05e471j4vf6modc2ly2ub3a10rliazrjzstlywvia8xwu&amp;rid=200.gif"
                width="287"
                height="161.4375"
                alt="Barbie Mic"
                style="background: rgb(153, 51, 255)"
              />
              <p>
                <span class="first-line"> Boogie Button </span>
                <br />
                Red Bull
              </p>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Clips",
};
</script>

<style scoped>
h4 {
  text-align: left !important;
  font-weight: bold;
}
.first-line {
  font-weight: bold;
}
svg {
  color: rgb(129, 236, 129);
}
.title {
  margin-left: 15px;
}
</style>