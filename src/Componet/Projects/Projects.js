import React from 'react'
import Header from '../Header/Header'
import "./Prostyle.css"
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import 'bootstrap';




function Projects() {
  $(document).ready(function () {
    // invoke the carousel
    $('#myCarousel').carousel({
      interval: 6000
    });

    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('prev');


      }
      else {
        $(this).carousel('next');

      }
    });

    //scroll slides on swipe for touch enabled devices  
    $("#myCarousel").on("touchstart", function (event) {

      var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function (event) {

        var yMove = event.originalEvent.touches[0].pageY;
        if (Math.floor(yClick - yMove) > 1) {
          $(".carousel").carousel('next');
        }
        else if (Math.floor(yClick - yMove) < -1) {
          $(".carousel").carousel('prev');
        }
      });
      $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
      });
    });

  });
  //animated  carousel start
  $(document).ready(function () {

    //to add  start animation on load for first slide 
    $(function () {
      $.fn.extend({
        animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass(animationName);
          });
        }
      });
      $('.item1.active img').animateCss('slideInDown');
      $('.item1.active h2').animateCss('zoomIn');
      $('.item1.active p').animateCss('fadeIn');

    });

    //to start animation on  mousescroll , click and swipe 
    $("#myCarousel").on('slide.bs.carousel', function () {
      $.fn.extend({
        animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass(animationName);
          });
        }
      });

      // add animation type  from animate.css on the element which you want to animate

      $('.item1 img').animateCss('slideInDown');
      $('.item1 h2').animateCss('zoomIn');
      $('.item1 p').animateCss('fadeIn');

      $('.item2 img').animateCss('zoomIn');
      $('.item2 h2').animateCss('swing');
      $('.item2 p').animateCss('fadeIn');

      $('.item3 img').animateCss('fadeInLeft');
      $('.item3 h2').animateCss('fadeInDown');
      $('.item3 p').animateCss('fadeIn');
    });
  });



  return (
    <div style={{ background: "#20639b" }}>
      <Header />
      <section class="slide-wrapper">
        <div class="container">
          <div id="myCarousel" class="carousel slide">

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              <div class="item item1 active">
                <div class="fill" style={{ backgroundcolor: "#48c3af" }}>
                  <div class="inner-content">
                    <div class="carousel-img">
                      <img src="http://vocefalandoingles.com/wp-content/uploads/2016/09/sofa.png" alt="sofa" class="img img-responsive" />
                    </div>
                    <div class="carousel-desc">

                      <h2>Modern Designer Sofa</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus iaculis eu. Ut ut viverra libero.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="item item2">
                <div class="fill" style={{ backgroundcolor: "#b33f4a" }}>
                  <div class="inner-content">
                    <div class="carousel-img">
                      <img src="http://cdn.homedit.com/wp-content/uploads/2011/08/137CLUB2ST.png" alt="white-sofa" class="img img-responsive" />
                    </div>
                    <div class="carousel-desc">

                      <h2>Vintage Style Sofa</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus iaculis eu. Ut ut viverra libero.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="item item3">
                <div class="fill" style={{ backgroundcolor: "#7fc2f4" }}>
                  <div class="inner-content">
                    <div class="col-md-6">

                      <div class="carousel-img">
                        <img src="http://vocefalandoingles.com/wp-content/uploads/2016/09/sofa.png" alt="sofa" class="img img-responsive" />
                      </div>
                    </div>

                    <div class="col-md-6 text-left">
                      <div class="carousel-desc">

                        <h2>Stylish Sofa</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus iaculis eu. Ut ut viverra libero.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div >


  )


}

export default Projects
