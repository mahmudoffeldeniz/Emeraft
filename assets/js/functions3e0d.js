jQuery(document).ready(function($) {

    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        var $targetElement = $($(this).attr('href'));
        if ($targetElement.length) {
            $('html, body').animate({
                scrollTop: $targetElement.offset().top
            }, 500);
        }
        return false;
    });

	// Navbar
    function stickyNav() {
        if ($(window).scrollTop() > 0) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    }

	$(window).scroll(function(){
    	stickyNav();
    });
    
    $(window).load(function(){
        stickyNav();
    });

    $('#main-menu').on('show.bs.collapse', function () {
        $('.navbar-toggler').removeClass('collapsed');
    });

    $('#main-menu').on('hide.bs.collapse', function () {
        $('.navbar-toggler').addClass('collapsed');
    });

    $('.navbar-nav > li > a[href="#"]').attr('href', 'javascript:void(0)');

    $('.navbar-nav>li.menu-item-has-children>ul').wrap('<div class="navbar-dropdown"></div>');

    $('.navbar-nav>li.menu-item-has-children>a').append('<span class="menu-item-toggle"><span class="icon-sort-down"></span></span>');
    $(document).on('click', '.menu-item-toggle', function(){
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle(300);
        return false;
    });

    // AOS
    AOS.init({
        // offset: 250,
        mirror: false,
        once: true,
        duration: 700,
    });

    // Staff
    function initStaffPagination() {
        var $container = $('.section-staff .search-filter-results > .row').infiniteScroll({
            path: '.section-staff .pagination a.nextpostslink',
            append: '.staff-item',
            history: false,
            button: '#load-more-staff',
            status: '.page-load-status',
            scrollThreshold: false,
            debug: false
        });
    }

    initStaffPagination();

    $(document).on("sf:ajaxfinish", ".section-staff .searchandfilter", function(){
        initStaffPagination();
    });

    // Video BG
    $('[data-vbg]').youtube_background();
    const videoBackgrounds = VIDEO_BACKGROUNDS;

    // Steps
    $('.section-steps .text-desktop').html($('.section-steps .accordion-collapse.show .accordion-body').html());
    $('.section-steps .accordion').on('show.bs.collapse', function (e) {
        var text = $(e.target).parents('.accordion-item').find('.accordion-body').html();
        $('.section-steps .text-desktop').html(text);
    });

    // Directions
    $('.section-directions .block-nav a').on('click', function(){
		
        var target = $(this).attr('data-target');
		
        $('.section-directions .block-nav a').removeClass('active');
        $(this).addClass('active');
        $('.block-content-direction').removeClass('active');
        $('.block-content-direction' + target).addClass('active');
        return false;
    });

    // Gallery
    var galleryThumbsSwiper = new Swiper('.gallery-thumbs .swiper', {
        direction: "horizontal",
        spaceBetween: 20,
        slidesPerView: 2,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });

    var galleryMainSwiper = new Swiper('.gallery-main .swiper', {
        direction: "horizontal",
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: galleryThumbsSwiper
        }
    });

    // Testimonials
    var testimonialsCarousel = new Swiper('.section-testimonials_carousel .swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }, 
        slidesPerView: 1,
    });

    // Related Trips
    var relatedTripsCarousel = new Swiper('.section-trip--related .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 5,
            },
        }
    });

    // Testimonials
    $('.section-testimonials .testimonial-single').each(function(){
        $(this).wrap('<div class="swiper-slide"></div>');
        $(this).find('.testimonial-author').prepend('<div class="testimonial-author-meta"><div class="testimonial-author-meta-content"></div></div>');
        $(this).find('.testimonial-name').appendTo($(this).find('.testimonial-author-meta-content'));
        $(this).find('.testimonial-date').appendTo($(this).find('.testimonial-author-meta-content'));
    });

    $('.section-testimonials .bne-testimonial-wrapper').wrap('<div class="swiper"></div>');
    $('.section-testimonials .bne-testimonial-wrapper').addClass('swiper-wrapper');
    var testimonialsPluginCarousel = new Swiper('.section-testimonials .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        // createElements: true,
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });

    // Related Blog
    var relatedPostsCarousel = new Swiper('.section-single_blog--related .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        createElements: true,
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        }
    });

    // Homepage Trips
    var homepageTripsCarousel = new Swiper('.homepage-trips .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        }
    });

    // Homepage Trips
    var exploreTripsCarousel = new Swiper('.section-explore_trips .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        }
    });

    // Related Trips
    function initgroupTripsCarousel() {
        var groupTripsCarousel = new Swiper('.section-trip_groups_with_filter .swiper', {
            loop: false,
            // autoplay: {
            //     delay: 5000,
            // },
            speed: 600,
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'bullets',
            //     clickable: true,
            // }, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1600: {
                    slidesPerView: 5,
                },
            }
        });
    }

    initgroupTripsCarousel();

    $(document).on("sf:ajaxfinish", ".section-trip_groups_with_filter .searchandfilter", function(){
        initgroupTripsCarousel();
    });

    $(document).on("sf:ajaxfinish", ".section-destinations .searchandfilter", function(){
        $('.section-destinations .destination-item .acf-map').each(function(){
            var map = initMap( $(this) );
        });
    });

    var hasDestination = false;
    $('.section-destinations').each(function(){
        var destinations = $(this).data('destinations');
        $(this).find('.searchandfilter li[data-sf-field-input-type="radio"] > ul > li input').each(function(){
            if ($(this).val()) {
                if (jQuery.inArray($(this).val(), destinations) === -1) {
                    $(this).parents('.sf-level-0').addClass('d-none');
                } else {
                    if (!hasDestination) {
                        hasDestination = true;
                        $(this).prop('checked', true);
                        $(this).parent().addClass('sf-option-active');
                    }
                }
            }
        });
    });


    // Explore the landscape
    $(document).on("sf:ajaxfinish", ".section-explore_the_landscape .searchandfilter", function(){
        $('.section-explore_the_landscape .acf-map').each(function(){
            var map = initMap( $(this) );
        });
    });

    $(document).on('click', '.map-marker-close', function(){
        $(this).parents('.gm-style-iw').children('button').click();
    });

    $(document).on('click', '.map-marker:not(.active) .image', function(){
        $(this).parent().addClass('active');
        $(this).parents('.gm-style-iw-a').parent().css('z-index', 9999);
        $(this).parents('.gm-style-iw-a').parent().siblings().css('z-index', 14).addClass('d-none');
    });

    // Trending Group Trips
    var trendingTripsCarousel = new Swiper('.section-trending_group_trips .swiper', {
        loop: false,
        // autoplay: {
        //     delay: 5000,
        // },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, 
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        }
    });

    // Trips Grid
    $(document).on('change', '.section-trips_grid .block-toggle input', function(){
        var val = $(this).val();
        $('.section-trips_grid .block-mode-map').hide();
        $('.section-trips_grid .block-mode-list').hide();
        $('.section-trips_grid .block-mode-' + val).show();
    });

    // $(document).on('change', '.section-trips_grid .searchandfilter select', function() {
    //     var val = $(this).val();
    //     var name = $(this).attr('name');
    //     $(this).parents('.block-filters').parent().siblings().find('select[name="' + name + '"]').val(val).change();
    // });

    $(document).on("sf:ajaxfinish", ".section-trips_grid .block-mode-map .searchandfilter", function(){
        $('.section-trips_grid .acf-map').each(function(){
            var map = initMap( $(this) );
        });
    });

    $(document).on("sf:ajaxfinish", ".section-trips_grid .block-mode-list .searchandfilter", function(){
        // $(this).attr('data-results-url', location.protocol + '//' + location.host + location.pathname)
        // $(this).attr('action', location.protocol + '//' + location.host + location.pathname)
    });

    if ($('.section-trips_grid').length) {
        $('.section-trips_grid').each(function(){
            var filter = $(this).data('filter');
            if (filter) {
                var activities = [];
                $.each(filter, function(i, e){
                    if (e.post_type == 'destination') {
                        $('.section-trips_grid .block-mode-list .searchandfilter select[name="_sfm_destinations[]"]').val(e.ID).change();
                        $('.section-trips_grid .block-mode-map .searchandfilter select[name="_sfm_destinations[]"]').val(e.ID).change();
                        // $('.section-trips_grid .searchandfilter').submit();
                    } else if (e.post_type == 'activity') {
                        activities.push(e.ID);
                    }
                });

                if (activities) {
                    $('.section-trips_grid .block-mode-list .searchandfilter select[name="_sfm_activities[]"]').val(activities).change();
                    $('.section-trips_grid .block-mode-map .searchandfilter select[name="_sfm_activities[]"]').val(activities).change();
                    // $('.section-trips_grid .searchandfilter').submit();
                }
            }

            var type = $(this).data('type');
            if (type.length < 2) {
                $('.section-trips_grid .block-mode-list .searchandfilter select[name="_sfm_trip_type[]"]').val(type[0]).change();
                $('.section-trips_grid .block-mode-map .searchandfilter select[name="_sfm_trip_type[]"]').val(type[0]).change();
                // $('.section-trips_grid .searchandfilter').submit();
            }
        });
    }

    var hash = window.location.hash;
    if (hash == '#trips-map') {
        if ($('#list-mode-map').length) {
            $('#list-mode-map').prop('checked', true).change();
            $('body, html').animate({scrollTop: $('.section-trips_grid').offset().top}, 0);
        }
    }
        
    $('a[href="#my_booking"]').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#openMyBookingModal').click();
        return false;
    });
});