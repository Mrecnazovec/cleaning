const TOKEN = "6452204018:AAH_6ReW7vG7h_PwWj6SxtnsJVH7wM18dS8";
const CHAT_ID = "-1001907153342";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    let message = `<b>Имя:</b> ${ this.name.value }\n`;
		message += `<b>Фамилия:</b> ${ this.second.value }\n`;
    message += `<b>Телефон:</b> ${ this.phone.value }\n`;


    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode: `html`,
        text: message
    })
    .then((res) => {
        this.phone.value = "";
				this.second.value = "";
        this.name.value = "";
        alert("Сообщение было отправлено")
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец');
    })
		console.log(this.name.value);

})

// const TOKENN = "6274169376:AAGfqi-weAT5akT7Fzr6-FoyMMETw5KcoWk";
// const CHAT_IDD = "-1001851684754";
// const URI_APIL = `https://api.telegram.org/bot${ TOKENN }/sendDocument`;

// document.getElementById('tg').addEventListener('submit', function(e){
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('chat_id', CHAT_IDD);
//     formData.append('document', this.file.files[0]);


//     axios.post(URI_APIL, formData, {
//         headers:{
//             'Content-Type': 'multipart/form-data'
//         }
//     })
//     .then((res) => {

//     })
//     .catch((err) =>{
//         console.warn(err);
//     })
//     .finally(() =>{
//     })

// })