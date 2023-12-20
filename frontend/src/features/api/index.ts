import { Task } from "@/containers/task/Container";

// データfetch Utils
const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              // jsonが取得できた場合だけresolve
              resolve(json);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const fetcher = <T = any>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  return wrap<T>(fetch(input, init));
};

// APIs
// ここにAPIアクセスを記載
// fetchの記載例 (https://developer.mozilla.org/ja/docs/Web/API/fetch#%E4%BE%8B)
async function getTasks(): Promise<Task[]> {
  const res = await fetcher<Task[]>("http://localhost:3000/api");
  return res;
}

async function createTask(task: Task): Promise<Task> {
  const created = await fetcher<Task>("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify({
      title: task.title,
      summary: task.summary,
    }),
  });
  return created;
}

async function deleteTask(id: number): Promise<void> {
  await fetch("http://localhost:3000/api", {
    method: "DELETE",
    body: JSON.stringify({
      id: id
    }), 
  })
}

export { getTasks, createTask, deleteTask };
