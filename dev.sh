echo "Starting postgresql"...
sudo service postgresql start
createdb tests && createdb development

e="./backend/.env"
ee="./backend/.env.example"
# Creates a .env based on .env.example if .env doesn't exist
[ -f $ee ] && [ ! -f $e ] && cp $ee $e

(cd backend && yarn && yarn dev &)
(cd frontend && yarn && yarn start &)
