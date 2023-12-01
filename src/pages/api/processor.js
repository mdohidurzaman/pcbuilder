const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://assignment:s5h14sHZto9UhjyV@amazon.38elh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const pcsCollection = client.db("assignment").collection("processor");
    if (req.method === "GET") {
      const processor = await pcsCollection.find({}).toArray().limit(6);
      res.send({ message: "success", status: 200, data: processor });
    }

    if (req.method === "POST") {
      const processor = req.body;
      const result = await pcsCollection.insertOne(processor);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
