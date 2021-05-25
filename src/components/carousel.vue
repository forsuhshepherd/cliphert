<template>
  <div id="hero">
    <div
      id="hero-carousel"
      class="hero-carousel carousel carousel-fade slide"
      data-ride="carousel"
      data-interval="10000"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
        <li data-target="#carouselId" data-slide-to="1"></li>
        <li data-target="#carouselId" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img
            src="..\assets\media\thumb2-f-35-british-fighters-british-aircraft-carrier-hms-queen-elizabeth-r08.jpg"
            data-src="holder.js/900x500/auto/#777:#555/text:First slide"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="..\assets\media\TSFH Battlecry.jpg"
            data-src="holder.js/900x500/auto/#666:#444/text:Second slide"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="..\assets\media\wallpaper-of-marvel-avenger-luxe-black-panther-marvel-wallpaper-hd-iphone-pour-option-fond-ecran-of-wallpaper-of-marvel-avenger.jpg"
            data-src="holder.js/900x500/auto/#666:#444/text:Third slide"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselId"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselId"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.carousel-item img {
  width: 100%;
  height: 100%;
}
</style>
