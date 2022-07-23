import { $ } from "zx";

(async () => {
  await $`docker run -e MYSQL_ROOT_PASSWORD=randompassword -p 3306:3306 --name mysql --rm mysql`;
})();
