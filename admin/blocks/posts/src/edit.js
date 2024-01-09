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
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, RangeControl } from '@wordpress/components';

const Edit = props => {

    const {
        attributes: {
            title,
            content,
            per_page
        },
        setAttributes
    } = props

    const blockProps = useBlockProps()

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

        if ( per_page === undefined ) {
            setAttributes( { per_page: 3 } )
        }

        const path = `wp/v2/posts?per_page=${per_page}`
        const newPosts = await apiFetch( { path } )
        setPosts( newPosts )

    }

    useEffect( () => {
        fetchPosts()
    }, [ per_page ] )

    const onChangePostsPerPage = newPerPage => { setAttributes( { per_page: newPerPage } ) }
    const onChangeTitle = newTitle => { setAttributes( { title: newTitle } ) }
    const onChangeContent = newContent => { setAttributes( { content: newContent } ) }

    return(
        <>
            <InspectorControls>
                <Panel header="Últimos posts">
                    <PanelBody
                        title="Cantidad de Posts a mostrar"
                        icon="welcome-widgets-menus"
                        initialOpen={ true }
                    >
                        <PanelRow>
                            <RangeControl
                                label="Número de posts"
                                value={ per_page }
                                onChange={ onChangePostsPerPage }
                                min={1}
                                max={10}
                                help="Elige la cantidad de posts a mostrar"
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            {
                posts.length > 0 &&
                <div { ...blockProps } >
                    <section className="article-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-9">
                                    <div className="section-title text-center">
                                        <RichText
                                            tagName='h2'
                                            className='title'
                                            value={ title }
                                            onChange={ onChangeTitle }
                                            placeholder='Agrega un título'
                                        />
                                        <RichText
                                            tagName='p'
                                            value={ content }
                                            onChange={ onChangeContent }
                                            placeholder='Agrega un descripción'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {
                                    posts.map( ( post ) => {
                                        
                                        const timestampDate = moment(post.date)
                                        const month = timestampDate.format('MMM')
                                        const day   = timestampDate.format('D')
                                        const year  = timestampDate.format('YYYY')
                                        const parser = new DOMParser()
                                        const excerpt = parser.parseFromString( post.excerpt.rendered, "text/html" )
                                        let excerptRendered = excerpt.documentElement.textContent

                                        if( excerptRendered.length > 100 ){
                                            excerptRendered = `${excerptRendered.substring( 0, 100 )}...`
                                        }

                                        return(
                                            <div className="col-lg-4 col-md-6 col-sm-9" key={ post.id }>
                                                <div className="article-item mt-30">
                                                    <div className="article-top text-center">
                                                        <a href={ post.link } aria-label={`Learn more in ${ post.title.rendered }`}><h4>{ post.title.rendered }</h4></a>
                                                    </div>
                                                    <div className="article-thumb">
                                                        <a href={ post.link } aria-label={`Learn more in ${ post.title.rendered }`}><img src={ post.featured_image_src } alt=""/></a>
                                                        <div className="date">
                                                            <span className="title">{ day }</span>
                                                            <span>{ month }</span>
                                                            <span>{ year }</span>
                                                        </div>
                                                    </div>
                                                    <div className="article-content pl-25 pr-25 pt-25">
                                                        <p>{ excerptRendered }</p>
                                                        <a href={ post.link } aria-label={`Learn more in ${ post.title.rendered }`}>Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default Edit