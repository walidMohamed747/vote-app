import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as $ from 'jquery';
import { HttpService } from 'src/app/core/services/http.service';
import { vots } from 'src/app/models/votings';
declare var Swiper: any
// import Swiper from 'swiper';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  movies !: any[];
  ngAfterViewInit() {
    this.getHomePage()
  }

  constructor(private http: HttpClient, private auth: HttpService) { }

  ngOnInit() {
  }

  getHomePage() {
    this.auth.getHomePage().subscribe((res) => {
      this.movies = res.CurrentVote.movies;

      $(document).ready(function () {
        "use strict";

        /* Swiper
          -------------------------------------------------------*/
        //initialize swiper when document ready
        var mySwiper = new Swiper(".swiper-container", {
          // Navigation arrows
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          slidesPerView: 4,
          centeredSlides: true,
          breakpoints: {
            1440: {
              slidesPerView: 4
            },
            1439: {
              slidesPerView: 3.5
            },
            1024: {
              slidesPerView: 3
            },
            1023: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 7
            },
            414: {
              slidesPerView: 1,
              spaceBetween: 9
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 6
            }
          }
        });

        /* Info Card
          -------------------------------------------------------*/
        var $revealCardContentBtn = $(".sl--card-nav-container"),
          $contentContainer = $(
            ".sl-card-wrapper .sl--content-wrapper .sl--content-container"
          ),
          $navGFX = $(
            ".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx"
          );

        $revealCardContentBtn.on("click", function () {
          var parent = $(this).closest(".swiper-slide");

          // IC Container
          parent
            .siblings()
            .find($contentContainer)
            .removeClass("sl--card-reveal");
          parent
            .siblings()
            .find($contentContainer)
            .addClass("sl--card-hide");
          parent.find($contentContainer).toggleClass("sl--card-hide sl--card-reveal");

          // IC Nav wrapper
          parent
            .siblings()
            .find(".sl--content-wrapper")
            .removeClass("sl--content-wrapper-active");
          parent
            .siblings()
            .find(".sl--content-wrapper")
            .addClass("sl--content-wrapper-inactive");
          parent
            .find(".sl--content-wrapper")
            .toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");

          // IC Nav GFX
          parent
            .siblings()
            .find($navGFX)
            .removeClass("sl--close-card-info");
          parent
            .siblings()
            .find($navGFX)
            .addClass("sl--show-card-info");
          parent.find($navGFX).toggleClass("sl--show-card-info sl--close-card-info");
        });

        /* Hide content on slide change
          -------------------------------------------------------*/
        mySwiper.on("onSlideChangeStart", function () {
          if ($contentContainer.hasClass("sl--card-reveal")) {
            var $CI_ContentWrapper = $(".sl--content-wrapper");

            $contentContainer.removeClass("sl--card-reveal");
            $contentContainer.addClass("sl--card-hide");
            $navGFX.removeClass("sl--close-card-info");
            $navGFX.addClass("sl--show-card-info");
            $CI_ContentWrapper.removeClass("sl--content-wrapper-active");
            $CI_ContentWrapper.addClass("sl--content-wrapper-inactive");
          }
        });
      });
      console.log(res)

    })
  }
}
