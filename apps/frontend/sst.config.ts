/// <reference path="./.sst/platform/config.d.ts" />

import { link } from "fs";

export default $config({
  app(input) {
    return {
      name: "frontend",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("MyBucket", {
      public: true,
    });
    new sst.aws.Nextjs("ZotnFound", { link: [bucket] });
  },
});
