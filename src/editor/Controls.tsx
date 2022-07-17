import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, BaseControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ControlAttributes } from '../types';
import './editor.css';

export const Controls = ({ attributes, setAttributes }: ControlAttributes) => (
    <InspectorControls>
        <PanelBody title={__('Start', 'alpine-poc')}>
            <BaseControl id="alpine-counter" className="alpine-poc-editor">
                {/* TW classes used here will not be loaded on the front end */}
                <div className="bg-indigo-500 text-white p-2 mb-4">
                    Set the starting number
                </div>
                <TextControl
                    onChange={(v) => setAttributes({ count: Number(v) })}
                    value={attributes.count}
                />
            </BaseControl>
        </PanelBody>
    </InspectorControls>
);
