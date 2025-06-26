import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts", "src/preload.ts"], // electron의 두 entry
  format: ["cjs"],
  target: "node16",
  platform: "node",
  external: ["electron"], // 네이티브 모듈을 외부로 처리합니다. (번들X)
  clean: true,
});
