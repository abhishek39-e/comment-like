# comment-like
Created with CodeSandbox



<script>
      {% comment %} slider for mega manu by collection  25Aug2025 {% endcomment %}
      document.querySelector('#parent_menus-5').addEventListener('mouseenter', ()=>{
        {% comment %}$('#parent_menus-5 > #drpdwn__menus-5 > .submenu-wrapper').slick({
      dots: false,
      prevArrow: '<div class="menu-prevbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M12.75 6.125L8.375 10.5L12.75 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
      nextArrow: '<div class="menu-nextbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M8.25 6.125L12.625 10.5L8.25 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>', 
      arrows: true,
      infinite: true,
      centerMode: true,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1
      });   {% endcomment %}
      console.log('200')
        
        {% comment %} $('#parent_menus-5 > #drpdwn__menus-5 > .submenu-wrapper').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      prevArrow: '<div class="menu-prevbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M12.75 6.125L8.375 10.5L12.75 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
      nextArrow: '<div class="menu-nextbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M8.25 6.125L12.625 10.5L8.25 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>', 
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      
    });       {% endcomment %}
    {% comment %} $('#parent_menus-5 > #drpdwn__menus-5 > .submenu-wrapper').each(function () {
      let $this = $(this);

      if (!$this.hasClass("slick-initialized")) {
        $this.slick({
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          prevArrow:
            '<div class="menu-prevbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M12.75 6.125L8.375 10.5L12.75 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
          nextArrow:
            '<div class="menu-nextbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M8.25 6.125L12.625 10.5L8.25 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }
    }); {% endcomment %}
    $(document).ready(function() {
        var $parent = $('#parent_menus-5');
        var $dropdown = $('#drpdwn__menus-5');
        var $slider = $('#parent_menus-5 > #drpdwn__menus-5 > .submenu-wrapper');
        var slickInitialized = false;
        var hoverTimeout;
        
        // Initialize slick once when page loads
        if ($slider.length > 0 && $slider.children().length > 0) {
            // Temporarily show to initialize
            $parent.css('visibility', 'visible');
            $dropdown.show();
            
            setTimeout(function() {
                if (!slickInitialized && !$slider.hasClass('slick-initialized')) {
                    $slider.slick({
                        dots: false,
                        arrows: true,
                        infinite: true,
                        speed: 300,
                        prevArrow: '<div class="menu-prevbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M12.75 6.125L8.375 10.5L12.75 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
                        nextArrow: '<div class="menu-nextbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"> <path d="M8.25 6.125L12.625 10.5L8.25 14.875" stroke="black" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/> </svg></div>',
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        autoplay: false, // Turn off autoplay to avoid conflicts
                        autoplaySpeed: 2000,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    
                    slickInitialized = true;
                    console.log('Slick initialized once');
                    
                    // Hide back after initialization
                    $dropdown.hide();
                }
            }, 200);
        }
        
        // Simple hover show/hide - NO REFRESH CALLS
        $parent.hover(
            function() { // Mouse enter
                clearTimeout(hoverTimeout);
                
                if (slickInitialized) {
                    $dropdown.show();
                    console.log('Dropdown shown');
                }
            },
            function() { // Mouse leave
                hoverTimeout = setTimeout(function() {
                    $dropdown.hide();
                    console.log('Dropdown hidden');
                }, 300);
            }
        );
    });
    });    



</script>
