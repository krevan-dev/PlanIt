<template>
  <div class="d-flex justify-content-end">
    <i
      style="font-size:25px"
      class="mdi mdi-message-bulleted selectable commentbutton m-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    ></i>
  </div>
  <!-- <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Toggle right offcanvas
  </button> -->

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="text-light">Notes</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <input type="text" placeholder="Say Something..." class="p-5 m-4" />
      </form>
      <button class="btn btn-outline-info mx-4">Note!</button>

      <div class="card shadow border border-info border-2 p-2 m-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
          class="fakeimg"
          alt=""
        />
        <h4>Harry Potter</h4>
        <p>
          Don't forget the pumpkin pie again Gandalf. I WON'T LET YOU DISAPPOINT
          ME AGAIN!
        </p>
      </div>
      <div class="card shadow border border-info border-2 p-2 m-4">
        <img
          src="https://i1.sndcdn.com/avatars-2AI10Rs3s1EneWOl-317StQ-t500x500.jpg"
          class="fakeimg"
          alt=""
        />
        <h4>Gandalf</h4>
        <p>Hey Siri, remind me to take 30 points off Griffindor -_-</p>
      </div>
      <div class="card shadow border border-info border-2 p-2 m-4">
        <img
          src="https://i2-prod.irishmirror.ie/incoming/article22128856.ece/ALTERNATES/s615/1_GLEE.jpg"
          class="fakeimg"
          alt=""
        />
        <h4>Rachel B.</h4>
        <p>Without GLEE I wouldnt have had a singing career</p>
      </div>
      <div class="card shadow border border-info border-2 p-2 m-4">
        <img
          src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
          class="fakeimg"
          alt=""
        />
        <h4>Dawgggg</h4>
        <p>Bork Bork Bork SQUIRREL ... Bork Bork Bork</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.offcanvas-header {
  background-image: url("https://cutewallpaper.org/21/moving-wallpaper-gif/4K-Peaceful-Purple-Space-Moving-Background-AAVFX-Animated-Wallpaper-GIF-by-Th.gif");
  background-position: center;
  font-family: "Dosis", sans-serif;
}

.offcanvas-body {
  font-family: "Prompt", sans-serif;
}

.fakeimg {
  height: 60px;
  width: 60px;
}

.delbutton {
  transform: translate(-10px, 8px);
}
</style>