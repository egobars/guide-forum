import React from "react";
import "./MainSidebar.css"
import "../Sidebar.css"
import LoginPanel from "../UserPanels/LoginPanel/LoginPanel";

class MainSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Категории:</h2>
                <span>Искусство и развлечения</span>
                <span>Транспорт</span>
                <span>Компьютеры и электроника</span>
                <span>Образование и коммуникации</span>
                <span>Семейная жизнь</span>
                <span>Финансы и бизнес</span>
                <span>Кулинария и гостеприимство</span>
                <span>Здоровье</span>
                <span>Хобби и рукоделие</span>
                <span>Дом и сад</span>
                <span>Праздники и традиции</span>
                <span>Стиль и уход за собой</span>
                <span>Питомцы и животные</span>
                <span>Философия и религия</span>
                <span>Взаимоотношения</span>
                <span>Спорт и фитнес</span>
                <span>Путешествия</span>
                <span>Мир работы</span>
                <span>Молодежь</span>
                <LoginPanel />
            </div>
        )
    }
}

export default MainSidebar;
