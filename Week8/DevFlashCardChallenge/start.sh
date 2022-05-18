docker pull mysql/mysql-server
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test -e MYSQL_DATABASE=flash_card mysql:5.7
name=$(docker inspect --format="{{.Id}}" mysql)
docker exec -i $name mysql --user=root --password=test "flash_card" < dbschema.sql
