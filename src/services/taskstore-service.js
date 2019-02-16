export default class TaskstoreService {
  _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend';
  _apiDeveloper = '?developer=Natalia'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      cache: 'no-cache',
      redirect: 'follow',
      referrer: 'no-referrer'      
    })

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json()
  };

  postResource = async (url, data) => {
    const res = await
    fetch(`${this._apiBase}${url}${this._apiDeveloper}`, {
      method: 'POST',
      body: data
    })

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json()
  };

  editResource = async (url, params) => {
    const res = await
    fetch(`${this._apiBase}${url}${this._apiDeveloper}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: params
    })

    return res
  }

  getTasks = async (page, sort_field) => {
    const res = await this.getResource(`/${this._apiDeveloper}&page=${page}&sort_field=${sort_field}`)
    return res.message
  };

  postNewTask = async (formData) => {
    const res = await this.postResource('/create', formData)
    return res.results
  };

  editTask = async (id, params) => {
    const res = await this.editResource(`/edit/${id}`, params)
    return res
  }
}
