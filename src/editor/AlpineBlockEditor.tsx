import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AlpineBlock } from '../front/Alpine';
import { Alpine } from '../front/front-script';
import { Attributes } from '../types';

export const AlpineBlockEditor = ({ count }: Attributes) => {
    useEffect(() => {
        // @ts-ignore-next-line
        Alpine.store('data').count = count;
    }, [count]);

    return <AlpineBlock count={count} />;
};
