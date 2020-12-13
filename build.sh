c="docker-compose"  -f docker-compose.yml

e=".env"
ee=".env.example"
# Creates a .env based on .env.example if .env doesn't exist
[ -f $ee ] && [ ! -f $e ] && cp $ee $e
[ $1 = "dev" ] || [ $1 = "prod" ] || [ $1 = "test" ] ||
echo "usage: ./$0 <dev|prod|test>
use -h or --help." && exit 1;

$c -f $c.yml -f $c.$1.yml up

