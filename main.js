const username = document.querySelector('#username');
const password = document.querySelector('#password');
const type = document.querySelector('#type');
const createBtn = document.querySelector('#create');

const create = () => {
    const body = {
        username: username.value,
        password: password.value,
        type: type.value
    };

    fetch(`https://class-presence-backend.onrender.com/api/teacher_code/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => {
            if (res.ok) return res.json();
            if (res.status === 401 || res.status === 403) {
                alert('Credenciais inválidas!');
            }
            throw new Error(res);
        })
        .then(code => alert(`O código para criação é: ${code.code}`));
}

createBtn.addEventListener('click', create);