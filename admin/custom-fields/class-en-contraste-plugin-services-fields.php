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

        $services_image_metabox = new_cmb2_box( array(
            'id'            => $prefix . 'metabox',
            'title'         => esc_html__( 'Imagen sección servicios', 'en-contraste-plugin' ),
            'object_types'  => array( 'services' ),
            'context'    => 'normal',
            'priority'   => 'high',
            'show_names' => true,
            'show_in_rest' => WP_REST_Server::ALLMETHODS,
        ) );

        $services_image_metabox->add_field( array(
            'name' => esc_html__( 'Imagen principal', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Tamaño recomendado 385 x 600 pixels.', 'en-contraste-plugin' ),
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