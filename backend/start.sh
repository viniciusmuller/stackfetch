if [ $NODE_ENV = "production" ]; then
    echo "how low can you gooooooooo!"
    yarn migrate $NODE_ENV
    yarn dev
elif [ $NODE_ENV = "development" ]; then
    yarn migrate $NODE_ENV
    yarn dev
elif [ $NODE_ENV = "test" ]; then
    yarn migrate $NODE_ENV
    yarn test
fi
