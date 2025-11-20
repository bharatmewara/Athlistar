// import_products.js
const admin = require("firebase-admin");
const csv = require("csvtojson");
const path = require("path");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const csvFilePath = path.resolve(process.cwd(), "products.csv"); // export your Google Sheet to products.csv

function parseArrayField(val) {
  if (!val) return [];
  // try comma separated sizes/colours
  return String(val)
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);
}

(async () => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    console.log(`Found ${jsonArray.length} rows`);
    let counter = 0;

    for (const row of jsonArray) {
      /* Example mapping: adjust column names as in your CSV header */
      const product = {
        sNo: row["S. no"] || row["S.no"] || row["S No"] || null,
        name: row["Name"] || "",
        brand: row["Brand"] || "",
        image: row["Image"] || "", // should be an accessible URL
        country: row["Country"] || "",
        sport: row["Sport"] || "",
        gender: row["Gender"] || "",
        mrp: row["MRP"] ? Number(row["MRP"]) : null,
        price: row["Price"] ? Number(row["Price"]) : null,
        sizes: parseArrayField(row["Sizes"] || row["Available sizes"] || row["Available sizes.1"]),
        colours: parseArrayField(row["Colours"] || row["Colors"]),
        links: {
          amazon: row["Amazon Link"] || "",
          flipkart: row["Flipkart Link"] || "",
          myntra: row["Myntra Link"] || "",
          tcliq: row["Tata Cliq Link"] || "",
          nba: row["NBA Store Link"] || "",
          ajio: row["Ajio Link"] || "",
          superkicks: row["Superkicks Link"] || "",
          official: row["Official Website"] || "",
        },
        footType: row["Foot Type"] || null,
        footWidth: row["Foot Width"] || null,
        injuryHistory: row["Injury History"] || null,
        playingSurface: row["Playing Surface"] || null,
        playingStyle: row["Playing Style"] || null,
        playingPosition: row["Playing Position"] || null,
        shoePreference: row["Shoe Preference"] || null,
        playerLevel: row["Player Level"] || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      };

      await db.collection("products").add(product);
      counter++;
    }

    console.log(`Imported ${counter} products`);
    process.exit(0);
  } catch (err) {
    console.error("Import error:", err);
    process.exit(1);
  }
})();
