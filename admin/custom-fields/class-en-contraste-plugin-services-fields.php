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
class En_Contraste_Plugin_Services_Fields {

    function services_image_metabox() {

        $prefix = 'services_image_';
        /**
         * Sample metabox to demonstrate each field type included
         */
        $services_image_metabox = new_cmb2_box( array(
            'id'            => $prefix . 'metabox',
            'title'         => esc_html__( 'Test Metabox', 'en-contraste-plugin' ),
            'object_types'  => array( 'services' ), // Post type
            // 'show_on_cb' => 'yourprefix_show_if_front_page', // function should return a bool value
            'context'    => 'normal',
            'priority'   => 'high',
            'show_names' => true, // Show field names on the left
            // 'cmb_styles' => false, // false to disable the CMB stylesheet
            // 'closed'     => true, // true to keep the metabox closed by default
            // 'classes'    => 'extra-class', // Extra cmb2-wrap classes
            // 'classes_cb' => 'yourprefix_add_some_classes', // Add classes through a callback.
            'show_in_rest' => WP_REST_Server::ALLMETHODS,
        ) );
    
        $services_image_metabox->add_field( array(
            'name'       => esc_html__( 'Test Text', 'en-contraste-plugin' ),
            'desc'       => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'         => $prefix . 'text',
            'type'       => 'text',
            // 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
            // 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
            // 'on_front'        => false, // Optionally designate a field to wp-admin only
            // 'repeatable'      => true,
            // 'column'          => true, // Display field value in the admin post-listing columns
        ) );

        $services_image_metabox->add_field( array(
            'name' => esc_html__( 'Test Image', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Upload an image of 385 x 600 pixels.', 'en-contraste-plugin' ),
            'id'   => $prefix . 'image',
            'type' => 'file',
            'query_args' => array(
                'type' => array(
                    'image/jpg',
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                )
            )
        ) );
        
    }

}