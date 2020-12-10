compose_base="docker-compose -f docker-compose.yml"

e=".env"
ee=".env.example"
# Renames .env.example into .env if .env is not supplied
[ -f $ee ] && [ ! -f $e ] && mv $ee $e

# Just a helper for deploying docker-compose
[ "$1" = "-h" -o "$1" = "--help" ] && echo "dev - Launch both frontend and backend with hot code reload.
prod - Build react app and serves it, starts backend API and postgres database." \
&& exit 0;

[ "$1" = "dev" ] && $compose_base -f development.yml up ||
[ "$1" = "prod" ] && $compose_base -f production.yml up ||
echo "usage: ./$0 <dev|prod>
        use -h or --help." \
&& exit 1;
