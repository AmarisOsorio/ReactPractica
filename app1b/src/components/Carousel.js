function Carousel(){
    return(
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.autopista.es/uploads/s1/10/87/59/88/el-oso-panda-se-ha-convertido-con-el-tiempo-en-un-simbolo-de-conservacion-de-las-especies.jpeg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://blognasua.wordpress.com/wp-content/uploads/2015/05/panda-bear-plain.jpg?w=640" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://files.worldwildlife.org/wwfcmsprod/images/Giant_panda_china/story_full_width/4jlhq18c0w_giant_panda_what_wwf_is_doingHI_113976.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;