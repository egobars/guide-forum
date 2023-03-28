import React from "react";
import "./MainSidebar.css"
import "../Sidebar.css"
import LoginPanel from "../UserPanels/LoginPanel/LoginPanel";

const categories_list = [
    'Искусство и развлечения',
    'Транспорт',
    'Компьютеры и электроника',
    'Образование и коммуникации',
    'Семейная жизнь',
    'Финансы и бизнес',
    'Кулинария и гостеприимство',
    'Здоровье',
    'Хобби и рукоделие',
    'Дом и сад',
    'Праздники и традиции',
    'Стиль и уход за собой',
    'Питомцы и животные',
    'Философия и религия',
    'Взаимоотношения',
    'Спорт и фитнес',
    'Путешествия',
    'Мир работы',
    'Молодежь'
];

class MainSidebar extends React.Component {
    GenCategory(i) {
        return (
            <div className="categories-list-item">
                <span>{categories_list[i]}</span>
            </div>
        );
    }

    genCategoriesList() {
        let result = [];
        for (let i = 0; i < categories_list.length; ++i) {
            result.push(this.GenCategory(i));
        }
        return result;
    }

    render() {
        return (
            <div className="sidebar">
                <h2>Категории:</h2>
                <div className="categories-list">
                    {this.genCategoriesList()}
                </div>
                <LoginPanel />
                <a href="/add"><button>Добавить статью</button></a>
            </div>
        )
    }
}

export default MainSidebar;
