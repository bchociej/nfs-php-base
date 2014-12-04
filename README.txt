A pretty decent base layout for PHP apps on Nearly Free Speech and similar
hosts.

+ Bower to manage client-side assets
+ Gulp to compile/watch/kick off the dev server (serve.sh)
+ Helper script (sync.sh) to rsync the app to a production server

App contents go in ./app/. Stylus and CSS in ./app/style/ will get compiled and
minified into ./app/css/; likewise coffeescript and JS from ./app/script/ into
./app/js/. Happy coding.

(coffeescript is currently TODO)



PREREQUISITES

You need these binaries on your PATH:
	npm
	rsync

If you do not have gulp globally installed, or there seems to be some kind of
incompatbility with your globally installed version, you can use:
	$ ./gulp

Bower is an optional dependency. You can install it or not. Either way, the
included bower script will try to find it. If you run the included script, it
will try to npm install bower if necessary. Call the script like so:
	$ ./bower



QUICKSTART

Initial Setup
	$ npm install

Start dev server (compile & watch stylus and coffeescript)
	$ gulp

Custom port
	$ PORT=1234 gulp

Sync project to production server
	$ vim upload.conf
	... edit rsync remote appropriately ...
	$ ./sync.sh


