import { useBlockProps as blockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import blockConfig from './block.json';
import { AlpineBlockEditor } from './editor/AlpineBlockEditor';
import { Controls } from './editor/Controls';
import { AlpineBlock } from './front/Alpine';
import { Attributes } from './types';

registerBlockType<Attributes>('kevinbatdorf/alpine-poc', {
    ...blockConfig,
    icon: undefined,
    attributes: {
        count: {
            type: 'number',
            default: 50,
        },
    },

    title: __('Alpine POC', 'alpine-poc'),
    edit: ({ attributes, setAttributes }) => {
        return (
            <>
                <Controls
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <div {...blockProps()}>
                    <AlpineBlockEditor {...attributes} />
                </div>
            </>
        );
    },
    save: ({ attributes }) => <AlpineBlock {...attributes} />,
});
