echo "Starting postgresql"...
sudo service postgresql start
createdb tests && createdb development

(cd backend && yarn && yarn dev &)
(cd frontend && yarn && yarn start &)
