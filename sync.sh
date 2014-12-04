#!/bin/bash
source ./upload.conf
DIR="$(dirname "${BASH_SOURCE[0]}")"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

die() { echo "$@" 1>&2 ; exit 1; }

[[ "${BRANCH}" == "master" ]] || die "Not on master branch"

[[ -z $(git status --porcelain) ]] || die "Working copy is not clean"

rsync -havl --delete --progress --exclude-from .rsyncignore "${DIR}" "${REMOTE}"
