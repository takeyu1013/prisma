import { $ } from "zx";

(async () => {
  await $`rm -fr ../prisma/migrations`;
})();
