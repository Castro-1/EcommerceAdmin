import multiparty from "multiparty";
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import fs from "fs";
import mime from "mime-types";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";

const bucketName = "next-ecommerce-jecg";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);
  const client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  if (req.method === "POST") {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const links = [];

    for (const file of files.file) {
      const ext = file.originalFilename.split(".").pop();
      const newFilename = Date.now() + "." + ext;
      await client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: newFilename,
          Body: fs.readFileSync(file.path),
          ACL: "public-read",
          ContentType: mime.lookup(file.path),
        })
      );
      const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
      links.push(link);
    }
    return res.json({ links });
  }
  if (req.method === "DELETE") {
    const imageKey = req.query.key;
    await client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: imageKey,
      })
    );
  }
  res.json("Deleted");
}

export const config = {
  //config so we have all the data inside the req
  // and it does not parse our req into a JSON object
  api: { bodyParser: false },
};
