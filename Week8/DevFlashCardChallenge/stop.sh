name=$(docker inspect --format="{{.Id}}" mysql)
docker stop mysql
docker rm mysql