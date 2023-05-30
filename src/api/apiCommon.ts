export async function http(path: string, config: RequestInit): Promise<string> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  config.headers = { "Content-Type": "application/json" };

  const request = new Request(`${baseUrl + path}`, config);

  return fetch(request)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(Error("error"));
    })
    .catch((error) => error.message);
}

interface IRequest {
  path: string;
  config?: RequestInit;
  body?: Object;
}

export class ApiCommon {
  static async get({ path, config }: IRequest): Promise<string> {
    const init = { method: "get", ...config };
    return http(path, init);
  }

  static async post({ path, body, config }: IRequest): Promise<string> {
    const init = {
      method: "post",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, init);
  }

  static async put({ path, body, config }: IRequest): Promise<string> {
    const init = {
      method: "put",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, init);
  }

  static async delete({ path, body, config }: IRequest): Promise<string> {
    const init = { method: "delete", body: JSON.stringify(body), ...config };
    return http(path, init);
  }
}
