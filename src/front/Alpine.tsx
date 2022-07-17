import { __ } from '@wordpress/i18n';
import { Attributes } from '../types';
import './style.css';

export const AlpineBlock = ({ count }: Attributes) => {
    return (
        // This wrapper is for scoped tailwind styles
        <div className="alpine-poc">
            {/* Basic Alpine stuff here */}
            <div
                className="bg-gray-100 p-4"
                x-data="countdown()"
                x-init={`
                    $store.count = ${count};
                    initialCount = ${count};
                    $watch('$store.count', () => decrement());
                    $store.count = $store.count - 1;`}>
                Counting down:{' '}
                <span x-effect="$el.textContent = $store.count" />
                <button
                    type="button"
                    x-bind="reset"
                    className="bg-transparent p-2 text-sm underline text-blue-500">
                    Reset
                </button>
            </div>
        </div>
    );
};
