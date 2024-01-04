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

		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'slick', plugin_dir_url( __FILE__ ) . 'js/slick.min.js', array( 'jquery' ), $this->version, true );
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/en-contraste-plugin-admin.js', array( 'jquery' ), $this->version, true );

		wp_register_script( 
			$this->plugin_name . '-editor-blocks', 
			plugin_dir_url( __FILE__ ) . 'blocks/build/index.js',
			$this->get_blocks_assets()['dependencies'],
			$this->get_blocks_assets()['version']
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

		register_block_type( 
			plugin_dir_path( __FILE__ ) . 'blocks/services',
			array(
				'render_callback' => array( $this, 'en_contraste_plugin_render_services' ),
			)
		);

		register_block_type( 
			plugin_dir_path( __FILE__ ) . 'blocks/portfolio',
			array(
				'render_callback' => array( $this, 'en_contraste_plugin_render_portfolio' ),
			)
		);

		register_block_type( 
			plugin_dir_path( __FILE__ ) . 'blocks/testimonials',
			array(
				'render_callback' => array( $this, 'en_contraste_plugin_render_testimonials' ),
			)
		);

	}

	public function en_contraste_plugin_render_posts( $block_attributes, $block_content ) {

		ob_start();

		$block_title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : 'Últimas noticias';
		$block_content = isset( $block_attributes['content'] ) ? $block_attributes['content'] : 'Consulta nuestras últimas noticias';

		$args = array(
			'posts_per_page' => $block_attributes['per_page'],
			'ignore_sticky_posts' => true
		);
		$posts = new WP_Query( $args );

		if ( $posts->have_posts() ) :
			?>
			<section class="article-area">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6 col-md-9">
							<div class="section-title text-center">
								<h2 class="title"><?php echo esc_html( $block_title ); ?></h2>
								<p><?php echo esc_html( $block_content ); ?></p>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<?php
						while( $posts->have_posts() ):							
							$posts->the_post();
							?>
							<div class="col-lg-4 col-md-6 col-sm-9">
								<div class="article-item mt-30">
									<div class="article-top text-center">
										<a href="<?php echo esc_attr( the_permalink() ); ?>"><h4><?php echo esc_html( the_title() ); ?></h4></a>
									</div>
									<div class="article-thumb">
										<a href="<?php echo esc_attr( the_permalink() ); ?>"><?php echo wp_get_attachment_image( get_post_thumbnail_id(), 'blog-grid', false, array( 'class' => 'img-fluid' ) ); ?></a>
										<div class="date">
											<span class="title"><?php echo esc_html( get_the_date( 'd' ) ) ?></span>
											<span><?php echo esc_html( get_the_date( 'M' ) ) ?></span>
											<span><?php echo esc_html( get_the_date( 'Y' ) ) ?></span>
										</div>
									</div>
									<div class="article-content pl-25 pr-25 pt-25">
										<p><?php echo get_the_excerpt() ?></p>
										<a href="<?php echo esc_attr( the_permalink() ); ?>">Leer más</a>
									</div>
								</div>
							</div>
							<?php
						endwhile;
						?>
					</div>
				</div>
			</section>
			<?php			
		endif;

		wp_reset_postdata();

		return ob_get_clean();
	}

	public function en_contraste_plugin_render_services( $block_attributes, $block_content ) {

		ob_start();

		$block_title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : 'Nuestros servicios';
		$block_content = isset( $block_attributes['content'] ) ? $block_attributes['content'] : 'Adquiere la mejor experiencia en foto y video para tus eventos';

		$args = array(
			'posts_per_page' => $block_attributes['per_page'],
			'post_type' => array( 'services' )
		);
		$services = new WP_Query( $args );

		?>
		<section class="service-area pb-100">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6 col-md-9">
						<div class="section-title text-center">
							<h3 class="title"><?php echo esc_html( $block_title ); ?></h3>
							<p><?php echo esc_html( $block_content ); ?></p>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<?php
					if ( $services->have_posts() ) :

						while ( $services->have_posts() ) :
							$services->the_post();
							?>

							<div class="col-lg-4 col-md-6 col-sm-8">
								<div class="service-item-wrap mb-5 text-center">
									<div class="service-meta text-center">
										<a href="<?php echo esc_html( get_the_permalink() ); ?>"><h2 class="title"><?php echo esc_html( get_the_title() ); ?></h2></a>
										<a href="<?php echo esc_html( get_the_permalink() ); ?>" class="service-meta-link">Paquetes</a>
									</div>
									<?php
									echo wp_get_attachment_image( get_post_meta( get_the_ID(), 'services_image_image_id', true ), 'services-grid', false, array( 'class' => 'service-img-grid' ) );
									?>
								</div>
							</div>
							<?php
						endwhile;

					endif
					?>
				</div>
			</div>
		</section>
		<?php

		wp_reset_postdata();

		return ob_get_clean();
	}

	public function en_contraste_plugin_render_portfolio( $block_attributes, $block_content) {

		ob_start();

		$title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : 'Casos de éxito';
		$content = isset( $block_attributes['content'] ) ? $block_attributes['content'] : 'Te presentamos nuestros casos de éxito recientes';

		$args = array(
			'page_id' => get_option( 'page_on_front' )
		);
		$front_page = new WP_Query( $args );

		?>

		<section class="portfolio-area pb-130">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6 col-md-9">
						<div class="section-title text-center">
							<h3 class="title"><?php echo esc_html( $title ); ?></h3>
							<p><?php echo esc_html( $content ); ?></p>
						</div>
					</div>
				</div>
			</div>
			<?php
			if( $front_page->have_posts() ) :

				while( $front_page->have_posts() ) :
					$front_page->the_post();

					$front_page_portfolio_image = get_post_meta( get_the_ID(), 'front_page_portfolio_image', true );
					$wrapperSliderClass = count($front_page_portfolio_image) > 3 ? 'row portfolio-active' : 'row justify-content-center';

					?>
					<div class="container-fluid p-0">
						<div id="mydiv" class="<?php echo esc_html( $wrapperSliderClass ); ?>">
							<?php
							if ( $front_page_portfolio_image && ! empty( $front_page_portfolio_image ) ) :

								foreach ($front_page_portfolio_image as $key => $image_source) :
									?>
									<div class="col-lg-3">
										<div class="portfolio-item mt-30">
											<?php echo wp_get_attachment_image( $key, 'services-grid', false, array( 'class' => 'img-fluid' ) ); ?>
										</div>
									</div>
									<?php
								endforeach;
								
							endif;
							?>
						</div>
					</div>
					<?php
				endwhile;

			endif;
			wp_reset_postdata();
			?>

		</section>

		<?php
		return ob_get_clean();

	}

	public function en_contraste_plugin_render_testimonials( $block_attributes, $block_content ) {

		ob_start();

		$title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : 'Testimonios';
		$content = isset( $block_attributes['content'] ) ? $block_attributes['content'] : 'Así opinan de nosotros';

		$args = array(
			'post_type' => array( 'testimonials' ),
			'posts_per_page' => $block_attributes['per_page']
		);
		$testimonials = new WP_Query( $args );

		?>
		<section class="testimonial-area">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6 col-md-9">
						<div class="section-title section-title-2 text-center">
							<h3 class="title"><?php echo esc_html( $title ); ?></h3>
							<p><?php echo esc_html( $content ); ?></p>
						</div>
					</div>
				</div>
				<?php
				if( $testimonials->have_posts() ) :
					?>
					<div class="<?php echo $block_attributes['per_page'] >= 3 ? 'row testimonial-active' : 'row'; ?>">
					<?php
					while( $testimonials->have_posts() ):
						$testimonials->the_post();
						?>
						<div class="col-lg-4">
							<div class="testimonial-item mt-30">
								<div class="quote">
									<svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
									<g data-name="Group 21" transform="translate(0 0)">
										<path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)"/>
									</g>
									</svg>
								</div>
								<?php echo esc_html( get_post_meta( get_the_ID(), 'testimonials_opinion', true ) ); ?>
								<div class="info">
									<?php echo wp_get_attachment_image( get_post_meta( get_the_ID(), 'testimonials_image_id', true ), 'testimonial', false, array( 'class' => 'img-fluid rounded-circle' ) ); ?>
									<h5 class="title"><?php esc_html( the_title() ); ?></h5>
								</div>
							</div>
						</div>
						<?php
					endwhile;
					?>
					</div>
					<?php
				endif;
				wp_reset_postdata();
				?>
			</div>
		</section>
		<?php
		return ob_get_clean();

	}

	public function en_contraste_plugin_resgister_rest_fields() {

		register_rest_field( 
			array( 'post', 'services' ),
			'featured_image_src',
			array(
				'get_callback' => array( $this, 'en_contraste_plugin_get_featured_image_src' )
			)
		);

		register_rest_field( 
			array( 'services' ),
			'service_grid_image_src',
			array(
				'get_callback' => array( $this, 'en_contraste_plugin_get_service_grid_image_src' )
			)
		);

		register_rest_field( 
			array( 'page' ),
			'portfolio_images_src',
			array(
				'get_callback' => array( $this, 'en_contraste_plugin_get_portfolio_images_src' )
			)
		);

		register_rest_field( 
			array( 'testimonials' ),
			'featured_image_src',
			array(
				'get_callback' => array( $this, 'en_contraste_plugin_get_testimonial_featured_image_src' )
			)
		);

	}

	public function en_contraste_plugin_get_featured_image_src( $object ) {
		
		if ( $object['featured_media'] ) {

			$field = wp_get_attachment_image_src( $object['featured_media'], 'blog-grid' );
			return $field[0];

		}
		return false;

	}

	public function en_contraste_plugin_get_service_grid_image_src( $object ) {

		if ( get_post_meta( $object['id'], 'services_image_image_id', true ) ) {

			$field = wp_get_attachment_image_src( get_post_meta( $object['id'], 'services_image_image_id', true ), 'services-grid' );
			return $field[0];

		}		
		return false;
	}

	public function en_contraste_plugin_get_portfolio_images_src( $object ) {

		$front_page_portfolio_image = get_post_meta( $object['id'], 'front_page_portfolio_image', true );
		
		if ( $front_page_portfolio_image && ! empty( $front_page_portfolio_image ) ) {

			$images = array();
			foreach ($front_page_portfolio_image as $key => $image_source) {
				$item = array(
					$key => array(
						'media' => wp_get_attachment_image_src( $key, 'services-grid', false )[0]
					)
				);
				$images += $item ;
			}

			return $images;
		}
		return false;

	}

	public function en_contraste_plugin_get_testimonial_featured_image_src( $object ) {

		$testimonial_image_id = get_post_meta( $object['id'], 'testimonials_image_id', true );

		if( $testimonial_image_id ) {
			return wp_get_attachment_image_src( $testimonial_image_id, 'testimonial', false )[0];
		}
		return false;
	}

}
