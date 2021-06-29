const formEl = document.forms.uploadFile;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/', formData);
    console.log('ответ сервера:', data);
});