#!/bin/bash
PORT=${PORT-9001}

DIR="$(dirname "${BASH_SOURCE[0]}")"/app/
PHP=$(which php)

die() { echo "$@" 1>&2 ; exit 1; }

[[ -x "${PHP}" ]] || die "No php executable found"

php -S localhost:${PORT} -t ${DIR}
