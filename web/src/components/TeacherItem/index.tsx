import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem (){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/5309065?s=460&u=08e491ea1caa0aab2b38e37ab48a9f3f2fc0cfa5&v=4" alt="Henrique Guimarães"/>
        <div>
            <strong>Henrique Guimarães</strong>
            <span>Química</span>
        </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );


}

export default TeacherItem