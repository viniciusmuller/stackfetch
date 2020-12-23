sh ./_build_helper.sh

createdb stackfetch__dev

(cd backend && yarn && yarn dev &)
(cd frontend && yarn && yarn start)
