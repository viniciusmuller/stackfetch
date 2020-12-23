sh ./_build_helper.sh

createdb stackfetch__tests

cd ./backend && yarn && yarn test