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
class En_Contraste_Plugin_Front_Page_Fields {

    function front_page_portfolio_metabox() {

        $prefix = 'front_page_portfolio_';
        $front_page_id = get_option( 'page_on_front' );

        $front_page_portfolio_metabox = new_cmb2_box( array(
            'id'            => $prefix . 'metabox',
            'title'         => esc_html__( 'Portafolio', 'en-contraste-plugin' ),
            'object_types'  => array( 'page' ), // Post type
            'context'    => 'normal',
            'priority'   => 'high',
            'show_names' => true,
            'show_on'    => array(
                'id' => array( $front_page_id ),
            ),
            'show_in_rest' => WP_REST_Server::ALLMETHODS,
        ) );

        $front_page_portfolio_metabox->add_field( array(
            'name' => esc_html__( 'Galeria de imágenes del portafolio', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Tamaño recomendado 385 x 600 pixels.', 'en-contraste-plugin' ),
            'id'   => $prefix . 'image',
            'type' => 'file_list',
		    'preview_size' => array( 80, 80 ), // Default: array( 50, 50 )
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