import multiparty from "multiparty";

export default async function handle(req, res) {
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

export const config = {
  //config so we have all the data inside the req
  // and it does not parse our req into a JSON object
  api: { bodyParser: false },
};
