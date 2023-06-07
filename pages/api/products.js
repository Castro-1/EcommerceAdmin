import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      console.log(req.query.id);
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { name, description, price } = req.body;
    const productDoc = await Product.create({
      name,
      description,
      price,
    });
    res.json(productDoc);
  }
}
