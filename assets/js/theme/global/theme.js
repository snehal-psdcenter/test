/* eslint-disable */

import $ from 'jquery';
import treeviewjs from 'treemenu.js/treemenu.js';

export default function() {

  jQuery(document).ready(function() {

    jQuery("ul.treeview").treeview({
      collapsed: true,
      animated: "medium"
    });

  }); // READY END

}

/* eslint-enable */
