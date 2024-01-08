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
 * @subpackage En_Contraste_Plugin/admin/custom-fields
 * @author     DevITM <contacto@devitm.com>
 */
class En_Contraste_Plugin_Menu_Options_Page_Fields {

    function menu_page_portfolio_metabox() {

        $prefix = 'efp_options_page_';

        /**
         * Registers options page menu item and form.
         */
        $efp_options = new_cmb2_box( array(
            'id'           => $prefix . 'metabox',
            'title'        => esc_html__( 'Theme options', 'en-contraste-plugin' ),
            'object_types' => array( 'options-page' ),

            /*
            * The following parameters are specific to the options-page box
            * Several of these parameters are passed along to add_menu_page()/add_submenu_page().
            */

            'option_key'      => 'dme_theme_options', // The option key and admin menu page slug.
            'icon_url'        => plugin_dir_url( __DIR__ ) . 'img/logo-cideapps.png', // Menu icon. Only applicable if 'parent_slug' is left empty.
            'menu_title'              => esc_html__( 'Theme Options', 'en-contraste-plugin' ), // Falls back to 'title' (above).
            // 'parent_slug'             => 'themes.php', // Make options page a submenu item of the themes menu.
            'capability'              => 'manage_options', // Cap required to view options-page.
            'position'                => 2, // Menu position. Only applicable if 'parent_slug' is left empty.
            // 'admin_menu_hook'         => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
            'priority'                => 10, // Define the page-registration admin menu hook priority.
            // 'display_cb'              => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
            'save_button'             => esc_html__( 'Save', 'en-contraste-plugin' ), // The text for the options-page save button. Defaults to 'Save'.
            // 'disable_settings_errors' => true, // On settings pages (not options-general.php sub-pages), allows disabling.
            // 'message_cb'              => 'yourprefix_options_page_message_callback',
            // 'tab_group'               => '', // Tab-group identifier, enables options page tab navigation.
            // 'tab_title'               => null, // Falls back to 'title' (above).
            // 'autoload'                => false, // Defaults to true, the options-page option will be autloaded.
        ) );

        /**
         * Branding
         */
        $efp_options->add_field( array(
            'name' => esc_html__( 'Branding', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'This is a title description', 'en-contraste-plugin' ),
            'id'   => 'branding_title',
            'type' => 'title',
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Menu logo', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Upload an image or enter a URL.', 'en-contraste-plugin' ),
            'id'   => 'menu_logo',
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

        $efp_options->add_field( array(
            'name' => esc_html__( 'Footer Logo', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'Upload an image or enter a URL.', 'en-contraste-plugin' ),
            'id'   => 'footer_logo',
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

        /**
         * CTA
         */
        $efp_options->add_field( array(
            'name' => esc_html__( 'CTA', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'This is a title description', 'en-contraste-plugin' ),
            'id'   => 'cta_title',
            'type' => 'title',
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Menu call to action', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'menu_cta',
            'type' => 'text_url',
            'protocols' => array( 'https', 'http' ),
        ) );

        /**
         * Contact information
         */

        $efp_options->add_field( array(
            'name' => esc_html__( 'Contact information', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'This is a title description', 'en-contraste-plugin' ),
            'id'   => 'contact_title',
            'type' => 'title',
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Business address', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'business_address',
            'type' => 'text',
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Business phone', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'business_phone',
            'type' => 'text',
            'attributes' => array(
                'type' => 'number',
            ),
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Contact e-mail', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'contact_email',
            'type' => 'text_email',
        ) );

        /**
         * Social Media
         */
        $efp_options->add_field( array(
            'name' => esc_html__( 'Social Media', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'This is a title description', 'en-contraste-plugin' ),
            'id'   => 'social_media_title',
            'type' => 'title',
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Facebook URL', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'facebook_url',
            'type' => 'text_url',
            'protocols' => array( 'https' ),
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Instagram URL', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'instagram_url',
            'type' => 'text_url',
            'protocols' => array( 'https' ),
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Youtube URL', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'youtube_url',
            'type' => 'text_url',
            'protocols' => array( 'https' ),
        ) );

        $efp_options->add_field( array(
            'name' => esc_html__( 'Tik tok URL', 'en-contraste-plugin' ),
            'desc' => esc_html__( 'field description (optional)', 'en-contraste-plugin' ),
            'id'   => 'tiktok_url',
            'type' => 'text_url',
            'protocols' => array( 'https' ),
        ) );



        
    }

}