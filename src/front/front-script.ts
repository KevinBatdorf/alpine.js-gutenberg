import Alpine from 'alpinejs';

// Scripts added to this file only load on the front end,
// and only when the block exists on the page
// They can also be imported into the editor

Alpine.store('data', {
    count: 0,
});

Alpine.data('countdown', () => ({
    timer: 0,
    initialCount: 0,
    decrement() {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => {
            this.$store.count = this.$store.count - 1;
        }, 1000);
    },
    reset: {
        // This pattern is required as JSX won't allow : or @ as attributes
        ['@click']() {
            this.$store.count = this.initialCount;
        },
    },
}));
// @ts-ignore-next-line
window.Alpine = Alpine;
Alpine.start();

export { Alpine };
