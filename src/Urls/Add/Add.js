import React from "react";
import './Add.css';
import Header from "../../Components/Header/Header";
import Basement from "../../Components/Basement/Basement";
import CentralList from "../../Components/CentralList/CentralList";
import BasicSidebar from "../../Components/Sidebars/BasicSidebar/BasicSidebar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import {base_url} from "../../constants";
import axios from "axios";
import { Navigate } from "react-router-dom";

const markdown = "# Как спать с мокрыми волосами\n" +
    "Случалось ли вам перед сном оказаться с мокрыми волосами, отсутствием сил или времени их высушить? Если да, то с такой проблемой сталкиваются многие! Спать с мокрыми волосами — не самое правильное решение, но с помощью нескольких простых действий вы сможете защитить волосы, с тем чтобы они не повредились и меньше электризовались. Вы не только сможете лечь спать с мокрыми волосами, но и даже проснуться с потрясающей прической!\n" +
    "\n" +
    "## Немного подсушите волосы перед тем, как лечь спать.\n" +
    "![n1](https://www.wikihow.com/images/thumb/9/99/Sleep-With-Wet-Hair-Step-1.jpg/v4-728px-Sleep-With-Wet-Hair-Step-1.jpg.webp)\n" +
    "\n" +
    "Если у вас есть немного времени, дайте волосам подсохнуть естественным путем или просушите волосы на затылке феном. Частично высушив волосы, вы повысите вероятность того, что они высохнут во время сна.\n" +
    "- Чтобы просушить волосы на затылке, которые обычно сохнут медленнее всего, наклонитесь вперед \tи направьте струю воздуха     из фена сверху вниз на затылок.\n" +
    "\n" +
    "## Для защиты волос нанесите на них несмываемый кондиционер.\n" +
    "![n2](https://www.wikihow.com/images/thumb/a/a8/Sleep-with-Wet-Hair-Step-2.jpg/v4-728px-Sleep-with-Wet-Hair-Step-2.jpg.webp)\n" +
    "\n" +
    "Распределите по волосам небольшое количество мусса или спрея-кондиционера, чтобы избежать повреждения и электризации волос. Кондиционер не только поможет избежать повреждения волос, но и проснуться с мягкими гладкими волосами.\n" +
    "\n" +
    "## Соберите волосы в пучок при помощи резинки, обтянутой тканью.\n" +
    "![n3](https://www.wikihow.com/images/thumb/6/6e/Sleep-with-Wet-Hair-Step-3.jpg/v4-728px-Sleep-with-Wet-Hair-Step-3.jpg.webp)\n" +
    "\n" +
    "Соберите волосы в высокий пучок на голове, чтобы можно было спать без болевых ощущений и мокрые холодные пряди вас не отвлекали. Аккуратно сверните волосы в нетугой пучок на макушке и закрепите мягкой резинкой, обтянутой тканью.\n" +
    "- В отличие от обычных резинок для волос, такие резинки оставляют меньше заломов на волосах.\n" +
    "- Когда утром вы распустите волосы, они могут сохранить форму волны от пучка, особенно если у вас от природы вьющиеся волосы. Это может послужить основой объемной прически с мягкими локонами!\n" +
    "\n" +
    "## Заверните волосы в полотенце из микроволокна.\n" +
    "![n4](https://www.wikihow.com/images/thumb/c/c0/Sleep-with-Wet-Hair-Step-4.jpg/v4-728px-Sleep-with-Wet-Hair-Step-4.jpg.webp)\n" +
    "\n" +
    "Аккуратно промокнув волосы полотенцем, наклонитесь вперед. Накиньте полотенце из микроволокна на волосы и оберните им голову, заправив волосы внутрь. Закрепите полотенце заколкой, застежкой-липучкой или повязкой. Можно спать в полотенце всю ночь, а утром просто придать волосам объем, чтобы получилась простая и естественная укладка.\n" +
    "- Нанесите на волосы свое любимое средство для укладки перед тем, как завернуть их в полотенце, особенно если у вас вьющиеся волосы.\n" +
    "- Можно купить специальное полотенце-конверт, предназначенное именно для волос. Обычно на них уже есть пуговицы или другие застежки.\n" +
    "\n" +
    "## Заверните волосы в шелковый платок или бандану.\n" +
    "![n5](https://www.wikihow.com/images/thumb/b/b8/Sleep-with-Wet-Hair-Step-5.jpg/v4-728px-Sleep-with-Wet-Hair-Step-5.jpg.webp)\n" +
    "\n" +
    "Нанесите на волосы свое любимое средство для укладки и расчешите их. Затем закрепите платок или бандану на голове, завязав края в узел. Если у вас длинные волосы, можно предварительно собрать их в хвост или пучок.\n" +
    "- Шелковая ткань отлично снимает с волос электрический заряд!\n" +
    "\n" +
    "## Чтобы защитить волосы от повреждения, наденьте на подушку шелковую наволочку.\n" +
    "![n6](https://www.wikihow.com/images/thumb/c/cc/Sleep-with-Wet-Hair-Step-6.jpg/v4-728px-Sleep-with-Wet-Hair-Step-6.jpg.webp)\n" +
    "\n" +
    "Шелковая ткань создает меньше трения, поэтому мокрые волосы с меньшей вероятностью повредятся. Просто откиньте волосы назад так, чтобы они свисали с края шелковой подушки. Так волосы смогут высохнуть естественным путем, пока вы спите, и при этом не примнутся.\n" +
    "- Этот способ больше подходит для тех, у кого прямые волосы.\n" +
    "- Если у вас волнистые или кудрявые волосы, нанесите на них перед сном средство для формирования кудрей, и вы проснетесь с полноценной прической!";

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

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: false,
            text: '',
            redirect: false
        };

        this.StartPreview = this.StartPreview.bind(this);
        this.EndPreview = this.EndPreview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    StartPreview() {
        this.setState({ preview: true });
    }

    EndPreview() {
        this.setState({ preview: false });
    }

    genPreview() {
        if (this.state.preview) {
            return (
                <>
                    <div className='background' onClick={this.EndPreview} />
                    <div className='central-list-preview'>
                        <ReactMarkdown children={this.state.text} remarkPlugins={[remarkGfm]} />
                    </div>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    genThemeSelector() {
        let options = []
        for (let i = 0; i < categories_list.length; ++i) {
            options.push(<option value={categories_list_a[i]}>{categories_list[i]}</option>)
        }
        return (
            <select>
                {options}
            </select>
        )
    }

    async handleSubmit(event) {
        event.preventDefault();
        const config = {
            url: base_url + '/Guide/create',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                'preview': [event.target[1].value],
                'text': event.target[3].value,
                'theme': [event.target[2].value],
                'title': event.target[0].value,
                'user': { 'username': this.props.user }
            },
        }

        await axios(config).then(res => {
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });
        this.setState({ 'redirect': true });
    }

    onChange(value) {
        this.setState({ text: value });
    }

    genForm() {
        if (this.props.user != null) {
            return (
                <form className="add-page" onSubmit={this.handleSubmit}>
                    <h1>Добавить гайд</h1>
                    <h2>Название</h2>
                    <input type="text" placeholder="Название" />
                    <h2>Превью</h2>
                    <input type="text" placeholder="Ссылка на превью" />
                    <h2>Тема</h2>
                    {this.genThemeSelector()}
                    <h2>Текст</h2>
                    <AceEditor
                        onChange={this.onChange}
                        width="90%"
                        height="1000px"
                        mode="markdown"
                        name="area"
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 4,
                        }}/>
                    <button type="button" onClick={this.StartPreview} >Предпросмотр</button>
                    <button type="submit">Создать</button>
                </form>
            )
        } else {
            return (
                <h2>Для добавления гайда необходимо авторизоваться.</h2>
            );
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Navigate to={'/'} />
            );
        }
        return (
            <>
                <Header user={this.props.user} />
                <div className="central-list-wrapper">
                    <CentralList>
                        {this.genForm()}
                    </CentralList>
                    <BasicSidebar user={this.props.user} login={this.props.login} logout={this.props.logout} register={this.props.register} />
                </div>
                <Basement />
                {this.genPreview()}
            </>
        )
    }
}

export default Add;
