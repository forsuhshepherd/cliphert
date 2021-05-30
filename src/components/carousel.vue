<template>
  <div id="hero" class="hero-section">
    <!-- To contain two carousels one within another -->
    <!-- Carousel 1 -->
    <div
      id="hero-carousel"
      class="hero-carousel carousel carousel-fade slide"
      data-ride="carousel"
      data-interval="10000"
    >
      <div class="figure-holder-wrapper">
        <div class="container">
          <!-- Container two -->
          <div class="row justify-content-end">
        		<div class="figure-holder">
              <img class="figure-image img-fluid" src="../assets/media/MHA-Midoriya.jpg" alt="image" />
            </div><!--//figure-holder-->
        	</div><!--//row-->
        	</div><!--//container-->
  		</div><!--//figure-holder-wrapper-->

			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li class="active" data-slide-to="0" data-target="#hero-carousel"></li>
				<li data-slide-to="1" data-target="#hero-carousel"></li>
				<li data-slide-to="2" data-target="#hero-carousel"></li>
			</ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">

        <div class="carousel-item item-0 active" style="background-image: url('..assets/media/thumb2-f-35-british-fighters-british-aircraft-carrier-hms-queen-elizabeth-r08.jpg')">
          <div class="item-content container">
            <div class="item-content-inner">
              <h2 class="heading">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil, quo ea perferendis repellat.</p>
              <a class="btn btn-primary btn-cta" href="">Go There</a>
            </div><!-- item-content-inner -->
          </div> <!-- item-content -->
        </div><!-- item -->

        <div class="carousel-item item-0" style="background-image: url('..assets/mediia/images (1).jpg')">
          <div class="item-content container">
            <div class="item-content-inner">
              <h2 class="heading">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil, quo ea perferendis repellat.</p>
              <a class="btn btn-primary btn-cta" href="">Go There</a>
            </div><!-- item-content-inner -->
          </div> <!-- item-content -->
        </div><!-- item -->

        <div class="carousel-item item-0" style="background-image: url('..assets/media/wallpaper-of-marvel-avenger-luxe-black-panther-marvel-wallpaper-hd-iphone-pour-option-fond-ecran-of-wallpaper-of-marvel-avenger.jpg')">
          <div class="item-content container">
            <div class="item-content-inner">
              <h2 class="heading">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil, quo ea perferendis repellat.</p>
              <a class="btn btn-primary btn-cta" href="">Go There</a>
            </div><!-- item-content-inner -->
          </div> <!-- item-content -->
        </div><!-- item -->

      </div> <!-- carousel-inner -->
    </div> <!-- carousel -->
  </div> <!-- hero -->
</template>

<script>
export default {
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
</style>
