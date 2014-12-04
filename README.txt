A pretty decent base layout for PHP apps on Nearly Free Speech and similar
hosts.

+ Bower to manage client-side assets
+ Gulp to compile/watch/kick off the dev server (serve.sh)
+ Helper script (sync.sh) to rsync the app to a production server

App contents go in ./app/. Stylus and CSS in ./style/ will get compiled and
minified into ./css/; likewise coffeescript and JS from ./script/ into ./js/.
Happy coding.

(coffeescript is currently TODO)
