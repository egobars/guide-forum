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
    'Праздники и традиции',
    'Дом и сад',
    'Стиль и уход за собой',
    'Питомцы и животные',
    'Философия и религия',
    'Взаимоотношения',
    'Спорт и фитнес',
    'Путешествия',
    'Мир работы',
    'Молодёжь'
];

const categories_list_a = [
    'arts_and_entertainments',
    'cars_ant_other_vehicles',
    'computers_and_electronics',
    'education_and_communications',
    'family_life',
    'finance_and_business',
    'food_and_entertaining',
    'health',
    'hobbies_and_crafts',
    'holidays_and_traditions',
    'home_and_garden',
    'personal_care_and_style',
    'pets_and_animals',
    'philosophy_and_religion',
    'relationships',
    'sports_and_fitness',
    'travel',
    'work_world',
    'youth'
];

class MainSidebar extends React.Component {
    GenCategory(i) {
        return (
            <a href={'?theme=' + categories_list_a[i].toString()}>
                <div className="categories-list-item">
                    <span>{categories_list[i]}</span>
                </div>
            </a>
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
                <LoginPanel user={this.props.user} login={this.props.login} logout={this.props.logout} register={this.props.register} />
                <a href="/add"><button>Добавить статью</button></a>
            </div>
        )
    }
}

export default MainSidebar;
