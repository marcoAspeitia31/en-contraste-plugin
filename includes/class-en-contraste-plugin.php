<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://devitm.com
 * @since      1.0.0
 *
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    En_Contraste_Plugin
 * @subpackage En_Contraste_Plugin/includes
 * @author     DevITM <contacto@devitm.com>
 */
class En_Contraste_Plugin {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      En_Contraste_Plugin_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'EN_CONTRASTE_PLUGIN_VERSION' ) ) {
			$this->version = EN_CONTRASTE_PLUGIN_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'en-contraste-plugin';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_services_hooks();
		$this->define_testimonials_hooks();
		$this->define_front_page_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - En_Contraste_Plugin_Loader. Orchestrates the hooks of the plugin.
	 * - En_Contraste_Plugin_i18n. Defines internationalization functionality.
	 * - En_Contraste_Plugin_Admin. Defines all hooks for the admin area.
	 * - En_Contraste_Plugin_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-en-contraste-plugin-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-en-contraste-plugin-i18n.php';
		
		/**
		 * The file responsible to add CMB2 functionality
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/cmb2-functions.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-en-contraste-plugin-admin.php';

		/**
		 * The class responsible for adding services custom post type
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/custom-post-types/class-en-contraste-plugin-services-post-type.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/custom-post-types/class-en-contraste-plugin-testimonials-post-type.php';

		/**
		 * The classes responsible for adding custom metaboxes via CMB2
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/custom-fields/class-en-contraste-plugin-services-fields.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/custom-fields/class-en-contraste-plugin-testimonials-fields.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/custom-fields/class-en-contraste-plugin-front-page-fields.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-en-contraste-plugin-public.php';

		$this->loader = new En_Contraste_Plugin_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the En_Contraste_Plugin_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new En_Contraste_Plugin_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new En_Contraste_Plugin_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'rest_api_init', $plugin_admin, 'en_contraste_plugin_resgister_rest_fields' );
		$this->loader->add_action( 'init', $plugin_admin, 'en_contraste_plugin_register_blocks' );
		$this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'en_contraste_plugin_blocks_styles' );

	}

	/**
	 * Register all of the hooks related to services custom post type functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_services_hooks() {

		$plugin_services_post_type = new En_Contraste_Plugin_Services_Post_Type();

		$this->loader->add_action( 'init', $plugin_services_post_type, 'services_post_type', 0 );

		$plugin_services_fields = new En_Contraste_Plugin_Services_Fields();

		$this->loader->add_action( 'cmb2_init', $plugin_services_fields, 'services_image_metabox', 0 );

	}

	/**
	 * Register all of the hooks related to services custom post type functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_testimonials_hooks() {

		$plugin_testimonials_post_type = new En_Contraste_Plugin_Testimonials_Post_Type();

		$this->loader->add_action( 'init', $plugin_testimonials_post_type, 'testimonials_post_type', 0 );

		$plugin_testimonials_fields = new En_Contraste_Plugin_Testimonials_Fields();

		$this->loader->add_action( 'cmb2_init', $plugin_testimonials_fields, 'testimonials_metabox', 0 );

	}

	/**
	 * Register all of the hooks related to front_page custom post type functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_front_page_hooks() {

		$plugin_front_page_fields = new En_Contraste_Plugin_Front_Page_Fields();

		$this->loader->add_action( 'cmb2_init', $plugin_front_page_fields, 'front_page_portfolio_metabox', 0 );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new En_Contraste_Plugin_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    En_Contraste_Plugin_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
