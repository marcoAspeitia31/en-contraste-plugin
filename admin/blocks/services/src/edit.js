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
     * During the initial render, the returned state (services) is the same
     * as the value passed as the first argument ( [] ). (empty array)
     * 
     * The setServices is used to update the state.
     * It accepts a new state value and enqueues a re-render of the component.
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#usestate
     * @since 1.0.0
     */
    const [ services, setServices ] = useState( [] )

    const fetchServices = async () => {

        if ( per_page === undefined ) {
            setAttributes( { per_page: 3 } )
        }

        const path = `wp/v2/services?per_page=${per_page}`
        const newServices = await apiFetch( { path } )
        setServices( newServices )

    }

    useEffect( () => {
        fetchServices()
    }, [ per_page ] )

    const onChangeServicesPerPage = newPerPage => { setAttributes( { per_page: newPerPage } ) }
    const onChangeTitle = newTitle => { setAttributes( { title: newTitle } ) }
    const onChangeContent = newContent => { setAttributes( { content: newContent } ) }

    return(
        <>
            <InspectorControls>
                <Panel header="Últimos services">
                    <PanelBody
                        title="Cantidad de Services a mostrar"
                        icon="welcome-widgets-menus"
                        initialOpen={ true }
                    >
                        <PanelRow>
                            <RangeControl
                                label="Número de services"
                                value={ per_page }
                                onChange={ onChangeServicesPerPage }
                                min={1}
                                max={10}
                                help="Elige la cantidad de services a mostrar"
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            {
                services.length > 0 &&
                <div { ...blockProps } >
                    <section className="service-area pb-100">
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
                                    services.map( service => {

                                        const serviceGridImageSrc = service.service_grid_image_src === false ? service.cmb2.services_image_metabox.services_image_image : service.service_grid_image_src
                      
                                        return(
                                            <div className="col-lg-4 col-md-6 col-sm-8">
                                                <div className="service-item-wrap mb-5">
                                                    <div className="service-meta text-center">
                                                        <a href={ service.link } aria-label={`Learn more in ${ service.title.rendered }`}>
                                                            <h2 className="title">{ service.title.rendered }</h2>
                                                        </a>                                                        
                                                        <a href={ service.link } aria-label={`Ver paquetes de ${ service.title.rendered }`} className="service-meta-link">Paquetes</a>
                                                    </div>
                                                    <img src={ serviceGridImageSrc } alt="" className="service-img-grid img-fluid"/>
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