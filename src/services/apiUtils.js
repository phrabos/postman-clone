export async function getJson(url, body, method, auth, authKey, authValue){
  if(method  === 'GET' || method === 'DELETE'){
    if(auth){
      const res = await fetch(url, {
        method,
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          [authKey]: authValue,
        }
      });
      
      const json = await res.json();
      
      return JSON.stringify(json, null, 2);
    } else {
      const res = await fetch(url, {
        method,
      });
      
      const json = await res.json();
      
      return JSON.stringify(json, null, 2);
    }

  } else {
    if(auth){
      const res = await fetch(url, {
        method,
        body,
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          [key]: value,
        }
      });
      const json = await res.json();
      return JSON.stringify(json, null, 2);
    } else {
      const res = await fetch(url, {
        method,
        body,
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      });
      const json = await res.json();
      return JSON.stringify(json, null, 2);
    }
  }
}

export async function postJson(url, body, method){
  const res = await fetch(url, {
    method,
    body,
    headers:{
      'Content-type': 'application/json; charset=UTF-8'
    }

  });
  const json = await res.json();

  return json;
}
