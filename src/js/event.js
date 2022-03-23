const setRem = () => {
  const htmlWidth = document.documentElement.offsetWidth || document.body.offsetWidth;

  const unit = htmlWidth / 3.6;

  const htmlDom = document.getElementsByTagName('html')[0];

  // 设置根元素字体大小
  htmlDom.style.fontSize = `${unit}px`;
};

window.onload = () => {
  window.onresize = setRem;
  setRem();
};

const baseURL = 'https://api.fes5.net/test';

const POST = function (url, data, cb = () => {}, errCb = () => {}) {
  axios({
    baseURL,
    timeout: 50000,
    method: 'POST',
    url,
    data,
  })
    .then((res) => {
      if (res.success) {
        cb(res);
      } else {
        errCb(res);
      }
    })
    .catch((err) => {
      errCb(err);
    });
};

axios.interceptors.response.use((response) => {
  const res = response.data;
  return res;
});

window.POST = POST;
