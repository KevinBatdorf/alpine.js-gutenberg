# Alpine.js + Gutenberg

This is an example of how to build a block that incorporates Alpine.js in both the editor and on the front end of the user's site. I've created a very simple countdown Alpine component that will also update when the user changes the starting number within Gutenberg. It has a demo `@click` event added that just resets the counter.

Overall, it works pretty well. If you do not want to load React on the front end of the user's site, this is a great alternative.

https://alpinejs.dev/

---

-   Follow me on Twitter: https://twitter.com/kevinbatdorf
-   Sponsor this package: https://github.com/sponsors/KevinBatdorf/

---

![alt text](assets/demo.gif 'Demo component')

Some notable stuff:

-   To keep the Gutenberg editor in sync with Alpine, you will want to use a `$store` and update it in a react `useEffect`. You could build a helper function to abstract this more.
-   You need to bind your directives outside of the jsx, otherwise it wont validate.
-   This repo also includes Tailwind css in a way where the backend and front end are compiled separately and only loads what is required.
