const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:4002' : 'https://jinhanbai-nearbyplaces.herokuapp.com/';
console.log('baseurl:', baseUrl);

class Http {
  BaseUrl = baseUrl;
  toUrlQuery(obj) {
    return Object.keys(obj || {})
      .map((key) => `${key}=${obj[key]}`)
      .join('&');
  }

  parseUrlParams(url) {
    const [, b] = (url || window.location.href).split('?');
    if (!b) {
      return {};
    }
    const obj = {};
    b.split('&').forEach((kv) => {
      const [key, value] = kv.split('=');
      obj[key] = decodeURIComponent(value);
    });
    return obj;
  }

  async ajax({ url, method = 'get', headers = { 'content-type': 'application/json' }, params, data } = {}) {
    const query = this.toUrlQuery(params || {});
    const _url = baseUrl + url + (query ? '?' + query : '');
    console.log(_url);
    try {
      const h = headers;
      const { id: user_id } = this.getValue('userInfo') || {};
      if (user_id) {
        h.user_id = user_id;
      }
      console.log(h);

      const result = await fetch(_url, { method, headers: h, body: data });
      const { status } = result;
      if (status < 300) {
        const body = await result.json();
        console.log(body);
        return body;
      }
      const msg = await result.text();
      console.log(msg);
      alert(msg);
      return Promise.reject(msg);
    } catch (ex) {
      console.log(ex);
    }
  }

  async getApi(url, params) {
    console.log(url, params);
    return this.ajax({ url, method: 'get', params });
  }
  async postApi(url, data) {
    return this.ajax({ url, method: 'post', data: JSON.stringify(data || {}) });
  }

  async delay(time = 1500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time || 1500);
    });
  }

  getValue(key) {
    const value = window.sessionStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (ex) {
      return null;
    }
  }

  save(key, value) {
    if (value) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      window.sessionStorage.removeItem(key);
    }
  }
}

export default new Http();
