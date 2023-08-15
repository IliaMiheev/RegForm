import React, { useState } from 'react';
import ArrPeople from '../People';
import './Skip.css'
import Content from '../Content/Content';
function RegForm() {
    const [localFirstName, setLocalFirstName] = useState('илья');
    const [localLastName, setLocalLastName] = useState('михеев');
    const [localPassvord, setLocalPassvord] = useState('МихеевИлья');
    const [openSite, setOpenSite] = useState(false);

    function handleUser(el) {
        function capitalizeFirstLetter(str) {
            if (!/\d/.test(str)) {
                if (/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/.test(str)) {
                    alert("Строка содержит знаки")
                } else {
                    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                }
            } else {
                alert("Строка содержит числа")
            }
        }
        el.preventDefault();
        let firstName = capitalizeFirstLetter(localFirstName)
        let lastName = capitalizeFirstLetter(localLastName)
        let name
        if (firstName === null || lastName === null) {
            setLocalFirstName('')
            setLocalLastName('')
        } else {
            name = `${lastName} ${firstName}`
        }
        let res = ArrPeople.some(user => user.name === name)
        if (res === false) {
            alert('Неверное имя или пароль')
        }
        ArrPeople.forEach((el) => {
            if (res && localPassvord === el.passvord) {
                setOpenSite(res)
            }
        })
    }

    return (
        <>
            {openSite ? <Content /> :
                <div id="div">
                    <form className='form' autoComplete="off">
                        <h1>РЕГИСТРАЦИЯ</h1>
                        <label htmlFor='inp1'>Имя:</label>
                        <input tabIndex='1' id='inp1' type="text" onChange={(el) => setLocalFirstName(el.target.value)} value={localFirstName} placeholder='enter your firstname' />
                        <br />
                        <label htmlFor='inp2'>Фамилия:</label>
                        <input tabIndex='2' id='inp2' type="text" onChange={(el) => setLocalLastName(el.target.value)} value={localLastName} placeholder='enter your lastname' />
                        <br />
                        <label htmlFor='inp2'>Пароль:</label>
                        <input tabIndex='3' id='inp3' type="text" onChange={(el) => setLocalPassvord(el.target.value)} value={localPassvord} placeholder='enter your passvord' />
                        <br />
                        <button onClick={handleUser}>отправить</button>
                    </form>
                </div>
            }
        </>
    )
}
export default RegForm;