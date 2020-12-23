sh ./_build_helper.sh

createdb stackfetch__prod

(cd frontend && yarn --dev && yarn build && cp -rf build ../backend/build)
(cd backend && yarn --dev && yarn prod)
