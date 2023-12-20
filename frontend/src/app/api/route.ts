// Utils
// 疑似的にAPIにアクセスしてるかのように見せるためだけの関数なので、そのうち消す
function getRandomIntInclusive(min: number, max: number) {
  const lmin = Math.ceil(min);
  const lmax = Math.floor(max);
  return Math.floor(Math.random() * (lmax - lmin + 1) + lmin); //The maximum is inclusive and the minimum is inclusive
}
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const tmpTasks = [
  { id: 1, title: "Test", summary: "Summary Test" },
  { id: 2, title: "MyTask", summary: "My Summary" },
];

export const dynamic = "force-dynamic"; // defaults to auto_
export async function GET(request: Request) {
  await sleep(1000);
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  return Response.json(tmpTasks);
}
export async function POST(request: Request) {
  await sleep(1000);
  const body = await request.json();
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  const created = { id: getRandomIntInclusive(1, 100), title: body.title, summary: body.summary };
  return Response.json(created);
}
export async function DELETE(request: Request) {
  await sleep(1000);
  const body = await request.json();
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()
  console.log("Deleted Id:", body.id)
  const response = new Response(null, {status: 204})
  return response
}
