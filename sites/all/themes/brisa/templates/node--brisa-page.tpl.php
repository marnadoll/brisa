<?php if(!drupal_is_front_page()) : ?>
  <title-wrapper<?php print $attributes; ?>>
  <?php print $content; ?>
</title-wrapper>
<?php endif; ?>

<?php if(drupal_is_front_page()) : ?>
<div id="zone-feature-wrapper">
<script>
 var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})
</script>
</div>
<?php print render($content ['basic-waypoint']);
?>

<?php endif; 
?>

<script src="/sites/all/themes/v50theme/js/jquery.waypoints.js"></script>
<script src="/sites/all/themes/v50theme/js/waypoint.js"></script>
<script src="/sites/all/themes/v50theme/js/scripts.js"></script>
