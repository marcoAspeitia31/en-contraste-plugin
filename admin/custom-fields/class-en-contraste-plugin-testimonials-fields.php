<?php
/**
 * Testimonials custom post type
 *
 * @link       https://devitm.com
 * @since      1.0.0
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin/custom-post-types
 */

/**
 * Testimonials custom post type
 *
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin/custom-post-types
 * @author     DevITM <contacto@devitm.com>
 */
class En_Contraste_Plugin_Testimonials_Fields {

    function testimonials_metabox() {

        $prefix = 'testimonials_';

        $testimonials_metabox = new_cmb2_box( array(
            'id'            => $prefix . 'metabox',
            'title'         => esc_html__( 'Detalle del testimonio', 'en-contraste-plugin' ),
            'object_types'  => array( 'testimonials' ),
            'context'    => 'normal',
            'priority'   => 'high',
            'show_names' => true,
            'show_in_rest' => WP_REST_Server::ALLMETHODS,
        ) );

        $testimonials_metabox->add_field( array(
            'name' => esc_html__( 'Imagen principal', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Tamaño recomendado 256 x 256 pixeles.', 'en-contraste-plugin' ),
            'id'   => $prefix . 'image',
            'preview_size' => array( 150, 150 ),
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

        $testimonials_metabox->add_field( array(
            'name' => esc_html__( 'Opinión del testimonio', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Agregar la opinión del testimonio', 'en-contraste-plugin' ),
            'id'   => $prefix . 'opinion',
            'type' => 'textarea_small',
        ) );
        
    }

}