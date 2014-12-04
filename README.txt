A pretty decent base layout for PHP apps on Nearly Free Speech and similar
hosts.

+ Bower to manage client-side assets
+ Gulp to compile/watch/kick off the dev server (serve.sh)
+ Helper script (sync.sh) to rsync the app to a production server

App contents go in ./app/. Stylus and CSS in ./app/style/ will get compiled and
minified into ./app/css/; likewise coffeescript and JS from ./app/script/ into
./app/js/. Happy coding.


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


(coffeescript is currently TODO)
