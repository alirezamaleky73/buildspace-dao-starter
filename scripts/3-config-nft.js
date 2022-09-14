import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xA1944d3A7f62CC1e9D6bB1d818dBA7f4e08bD001");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "MENA Builders Headband",
        description: "This NFT will give you access to MENA Web-3 Builders!",
        image: readFileSync("scripts/assets/MENA.JPEG"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
