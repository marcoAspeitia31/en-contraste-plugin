<?php
/**
 * Services custom post type
 *
 * @link       https://devitm.com
 * @since      1.0.0
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin/custom-post-types
 */

/**
 * Services custom post type
 *
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin/custom-post-types
 * @author     DevITM <contacto@devitm.com>
 */
class En_Contraste_Plugin_Services_Post_Type {

    // Register Custom Post Type
    function services_post_type() {

        $labels = array(
            'name'                  => _x( 'Services', 'Post Type General Name', 'en-contraste-plugin' ),
            'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'en-contraste-plugin' ),
            'menu_name'             => __( 'Services', 'en-contraste-plugin' ),
            'name_admin_bar'        => __( 'Service', 'en-contraste-plugin' ),
            'archives'              => __( 'Service Archives', 'en-contraste-plugin' ),
            'attributes'            => __( 'Service Attributes', 'en-contraste-plugin' ),
            'parent_item_colon'     => __( 'Parent Service:', 'en-contraste-plugin' ),
            'all_items'             => __( 'All Services', 'en-contraste-plugin' ),
            'add_new_item'          => __( 'Add New Service', 'en-contraste-plugin' ),
            'add_new'               => __( 'Add New', 'en-contraste-plugin' ),
            'new_item'              => __( 'New Service', 'en-contraste-plugin' ),
            'edit_item'             => __( 'Edit Service', 'en-contraste-plugin' ),
            'update_item'           => __( 'Update Service', 'en-contraste-plugin' ),
            'view_item'             => __( 'View Service', 'en-contraste-plugin' ),
            'view_items'            => __( 'View Services', 'en-contraste-plugin' ),
            'search_items'          => __( 'Search Service', 'en-contraste-plugin' ),
            'not_found'             => __( 'Not found', 'en-contraste-plugin' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'en-contraste-plugin' ),
            'featured_image'        => __( 'Featured Image', 'en-contraste-plugin' ),
            'set_featured_image'    => __( 'Set featured image', 'en-contraste-plugin' ),
            'remove_featured_image' => __( 'Remove featured image', 'en-contraste-plugin' ),
            'use_featured_image'    => __( 'Use as featured image', 'en-contraste-plugin' ),
            'insert_into_item'      => __( 'Insert into item', 'en-contraste-plugin' ),
            'uploaded_to_this_item' => __( 'Uploaded to this item', 'en-contraste-plugin' ),
            'items_list'            => __( 'Services list', 'en-contraste-plugin' ),
            'items_list_navigation' => __( 'Services list navigation', 'en-contraste-plugin' ),
            'filter_items_list'     => __( 'Filter items list', 'en-contraste-plugin' ),
        );
        $rewrite = array(
            'slug'                  => 'servicios',
        );
        $args = array(
            'label'                 => __( 'Service', 'en-contraste-plugin' ),
            'description'           => __( 'Post Type Description', 'en-contraste-plugin' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'thumbnail' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'menu_icon'             => 'dashicons-clipboard',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => false,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'post',
            'rewrite'               => $rewrite,
            'show_in_rest'          => true,
        );
        register_post_type( 'services', $args );

    }

}