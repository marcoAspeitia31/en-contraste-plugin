<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://devitm.com
 * @since      1.0.0
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/admin
 * @author     DevITM <contacto@devitm.com>
 */
class En_Contraste_Plugin_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	private $blocks_assets;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->blocks_assets = require_once plugin_dir_path( __FILE__ ) . 'blocks/build/index.asset.php';

	}

	public function get_blocks_assets() {

		return $this->blocks_assets;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in En_Contraste_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The En_Contraste_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		 // Styles.
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/en-contraste-plugin-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in En_Contraste_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The En_Contraste_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/en-contraste-plugin-admin.js', array( 'jquery' ), $this->version, false );

		wp_register_script( 
			$this->plugin_name . '-editor-blocks', 
			plugin_dir_url( __FILE__ ) . 'blocks/build/index.js',
			$this->get_blocks_assets()['dependencies'],
			$this->get_blocks_assets()['version']
		);

	}

	/**
	 * Register the Gutenberg blocks for the admin area.
	 *
	 * @since    1.0.0
	 * @link	 https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	public function en_contraste_plugin_register_blocks() {

		$blocks = array(
			$this->plugin_name . '/about',
		);

		foreach ( $blocks as $block_type ) {

			register_block_type( 
				$block_type, 
				array(
					'editor_script' => $this->plugin_name . '-editor-blocks',
				)
			);

		}

		register_block_type( 
			plugin_dir_path( __FILE__ ) . 'blocks/posts',
			array(
				'render_callback' => array( $this, 'en_contraste_plugin_render_posts' ),
			)
		);

	}

	public function en_contraste_plugin_blocks_styles() {
		wp_enqueue_style( 'bootstrap', plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css', array(), '4.5.0' );
		wp_enqueue_style( 'font-awesome', plugin_dir_url( __FILE__ ) . 'css/font-awesome.min.css', array(), '5.8.0' );
		wp_enqueue_style( 'magnific-popup', plugin_dir_url( __FILE__ ) . 'css/magnific-popup.css', array(), $this->version );
		wp_enqueue_style( 'animate', plugin_dir_url( __FILE__ ) . 'css/animate.min.css', array(), '3.7.2' );
		wp_enqueue_style( 'slick', plugin_dir_url( __FILE__ ) . 'css/slick.css', array(), $this->version );
		wp_enqueue_style( 'default', plugin_dir_url( __FILE__ ) . 'css/default.css', array(), $this->version );
		wp_enqueue_style( 'style', plugin_dir_url( __FILE__ ) . 'css/style.css', array(), $this->version );
	}

	public function en_contraste_plugin_render_posts() {
		return '<h1>esto es un bloque dinámico, parte frontend</h1>';
	}

	public function en_contraste_plugin_resgister_rest_fields() {

		register_rest_field( 
			array( 'post' ),
			'featured_image_meta',
			array(
				'get_callback' => array( $this, 'en_contraste_plugin_get_featured_image_meta' )
			)
		);

	}

	public function en_contraste_plugin_get_featured_image_meta( $object ) {
		
		if ( $object['featured_media'] ) {

			$field = wp_get_attachment_image_src( $object['featured_media'], array( 'blog-grid' ) );
			return $field;
		}
		return false;

	}

}
