import fs from "node:fs"
import path from "node:path"

const __root = path.resolve();
const routes = ["new"]
const index = fs.readFileSync(path.join(__root, "dist", "index.html"));

routes.forEach((route) => {
  const dir = path.join(__root, "dist", route)
  if (!fs.existsSync(route)) fs.mkdirSync(dir)
  fs.writeFileSync(path.join(dir, "index.html"), index);
})