import { $ } from "zx";

(async () => {
  await $`docker stop mysql`;
})();
