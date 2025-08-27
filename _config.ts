import lume from "lume/mod.ts";
import theme from "https://denopkg.com/i11n-docs/kz-theme@dev/mod.ts";

const site = lume();

site.use(theme());

export default site;
