self.onmessage = async (e) => {
  try {
    const res = await fetch(e.data.url);
    const text = await res.text();
    const data = JSON.parse(text);
    self.postMessage({ type: 'ready', data });
  } catch (err) {
    self.postMessage({ type: 'error', msg: err.message });
  }
};
