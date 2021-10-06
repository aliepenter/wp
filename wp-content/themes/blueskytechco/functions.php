<?php
// register sidebar
// add_action('widgets_init', 'blueskytechco_widgets_init_td');
// function blueskytechco_widgets_init_td(){
//     register_sidebar(array(
//         'name' => __('Above Menu Left', 'text_domain'),
//         'id' => 'sidebar-above-menu-left',
//         'description' => __('Add widgets Above Menu Left here', 'text_domain'),
//         'before_widget' => '<section id="%1$s" class="widget %2$s">',
//         'after_widget' => '</section>',
//         'before_title' => '<h2 class="widget-title">',
//         'after_title'   => '</h2>',
//     ));
//     register_sidebar(array(
//         'name' => __('Above Menu Right', 'text_domain'),
//         'id' => 'sidebar-above-right',
//         'description' => __('Add widgets Above Right here', 'text_domain'),
//         'before_widget' => '<section id="%1$s" class="widget %2$s">',
//         'after_widget' => '</section>',
//         'before_title' => '<h2 class="widget-title">',
//         'after_title'   => '</h2>',
//     ));
//     register_sidebar(array(
//         'name' => __('Menu', 'text_domain'),
//         'id' => 'sidebar-menu',
//         'description' => __('Add widgets Menu here', 'text_domain'),
//         'before_widget' => '<section id="%1$s" class="widget %2$s">',
//         'after_widget' => '</section>',
//         'before_title' => '<h2 class="widget-title">',
//         'after_title'   => '</h2>',
//     ));
//     register_sidebar(array(
//         'name' => __('Footer', 'text_domain'),
//         'id' => 'sidebar-footer',
//         'description' => __('Add widgets *[Footer] here', 'text_domain'),
//         'before_widget' => '<section id="%1$s" class="widget %2$s">',
//         'after_widget' => '</section>',
//         'before_title' => '<h2 class="widget-title">',
//         'after_title'   => '</h2>',
//     ));
// };
function iconic_disable_reviews() {
	remove_post_type_support( 'product', 'comments' );
}
add_action( 'init', 'iconic_disable_reviews' );

function blueskytechco_theme_support(){
    add_theme_support('title-tag');
}
add_action('after_setup_theme','blueskytechco_theme_support');

function blueskytechco_menus(){
    $location = array(
        'primary' => 'Header Menu',
        'footer' => "Footer Menu Items"
    );

    register_nav_menus($location);
}
add_action('init', 'blueskytechco_menus');
add_filter( 'woocommerce_price_trim_zeros', '__return_true' ); 





function blueskytechco_register_styles(){
    wp_enqueue_style('blueskytechco-style', get_template_directory_uri() . "/style.css", array(), '1.0', 'all');
}

add_action('wp_enqueue_scripts', 'blueskytechco_register_styles');

function blueskytechco_register_scripts(){
    wp_enqueue_script('blueskytechco-jquery', 'https://code.jquery.com/jquery-3.6.0.min.js', array(), '3.6.0', true);
    wp_enqueue_script('blueskytechco-script', get_template_directory_uri() . "/assets/js/app.js", array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'blueskytechco_register_scripts');
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_single_excerpt', 5);
?>
