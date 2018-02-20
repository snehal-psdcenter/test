/* eslint-disable */

import $ from 'jquery';
import treeviewjs from 'treemenu.js/treemenu.js';
import fancybox from '@fancyapps/fancybox/dist/jquery.fancybox.min';
$.fancybox.defaults.hash = false;

export default function() {

  jQuery(document).ready(function() {

    jQuery("ul.treeview").treeview({
      collapsed: true,
      animated: "medium"
    });

    //Don't enable Cloud Zoom (product image zoom) on touch device
//Mouseenter/Mouseover events are not ideal for touch devices
//for more info search for this code in /script/main.js
if (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)){
  jQuery('#menu ul a.has-subMenu').click(function(e){
   e.preventDefault();
   if(!$(this).hasClass("activeli")){
   $('.activeli').next().fadeOut('fast');
   $('.activeli').removeClass("activeli");
   $(this).next().fadeIn('slow');

   $(this).addClass("activeli")
   } else if($(this).hasClass("activeli")){
   $(this).removeClass("activeli");
   $(this).next().fadeOut('fast');
   location.href = $(this).attr("href");
   }
   });
}

//search results close on click on body
$('html,body').click(function(e){

    if($('.quickSearchResults').hasClass('visible') && $(e.target).attr('id')!="search_query" && $(e.target).parents('.quickSearchResults').length==0){
      $('.quickSearchResults').removeClass('visible');
    $('.quickSearchResults').hide();
    $('.quickSearchResults').html("");
  }
});

$('.quickSearchResults').parent().find('input').change(function(){
  $('.quickSearchResults').addClass('visible').show();
});




    /*  Fancybox  */
    $('.fancythumb').click(function(){
      $('ul.productView-thumbnails li a.is-active').trigger('click');
    });

    $('ul.productView-thumbnails li a').mouseenter(function(){
      $(this).removeAttr('data-fancybox');
      $(this).attr("href","javascript:void(0)");
    });
    $('ul.productView-thumbnails li a').mouseleave(function(){
      $(this).attr('data-fancybox','gallery');
      $(this).attr("href",$(this).attr('data-fancybox-href'));
    });


  }); // READY END

}

/* eslint-enable */
