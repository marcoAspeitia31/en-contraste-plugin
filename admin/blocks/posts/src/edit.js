/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */
import apiFetch from '@wordpress/api-fetch'
import { useState, useEffect } from '@wordpress/element'

const Edit = props => {

    const {
        title,
        per_page
    } = props

    /**
     * useState Returns a stateful value, and a function to update it.
     * 
     * During the initial render, the returned state (posts) is the same
     * as the value passed as the first argument ( [] ). (empty array)
     * 
     * The setPosts is used to update the state.
     * It accepts a new state value and enqueues a re-render of the component.
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#usestate
     * @since 1.0.0
     */
    const [ posts, setPosts ] = useState( [] )

    const fetchPosts = async () => {

        const path = per_page === undefined ? 'wp/v2/posts?per_page=3' : `wp/v2/posts?per_page=${per_page}`
        const newPosts = await apiFetch( { path } )
        setPosts( newPosts )
    }

    useEffect( () => {
        fetchPosts()
    }, [] )

    return(
        <>
        {
            posts.length > 0 &&
            <section class="article-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9">
                            <div class="section-title text-center">
                                <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/hero-line.png" alt=""/>
                                <h3 class="title">Recent Article</h3>
                                <p>Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        {
                            posts.map( ( post ) => {
                                
                                const parser = new DOMParser()
                                const excerpt = parser.parseFromString( post.excerpt.rendered, "text/html" )
                                let excerptRendered = excerpt.documentElement.textContent

                                if( excerptRendered.length > 100 ){
                                    excerptRendered = `${excerptRendered.substring( 0, 100 )}...`
                                }

                                return(
                                    <div class="col-lg-4 col-md-6 col-sm-9" key={ post.id }>
                                        <div class="article-item mt-30">
                                            <div class="article-top text-center">
                                                <a href={ post.link }><h4>{ post.title.rendered }</h4></a>
                                            </div>
                                            <div class="article-thumb">
                                                <a href={ post.link }><img src={ post.featured_image_meta[0] } alt=""/></a>
                                                <div class="date">
                                                    <span class="title">25</span>
                                                    <span>JUN</span>
                                                </div>
                                            </div>
                                            <div class="article-content pl-25 pr-25 pt-25">
                                                <p>{ excerptRendered }</p>
                                                <a href={ post.link }>Leer más</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                        
                    </div>
                </div>
            </section>
        }
        </>
    )
}

export default Edit