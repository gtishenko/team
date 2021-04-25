import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {List, Cell, Avatar, ModalPage, ModalPageHeader, PanelHeaderButton, withPlatform, IOS, IconButton, MiniInfoCell, Button, Div, SimpleCell, InfoRow, Separator, Link} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { User } from '../../panels/home/base';

import grisha from '../../../images/grisha.jpeg';
import zhenya from '../../../images/zhenya.jpeg';
import { Icon20ArticleOutline, Icon20PlaceOutline, Icon28MessageOutline, Icon28User } from '@vkontakte/icons';

var userData = [
    {
        name: 'Григорий Тищенко',
        image: grisha,
        caption: 'Frontend разработчик, дизайнер',
        url: 'gtishenko',
        description: 'Зовут Григорий, 17 лет. Занимаюсь тестированием, WEB-разработкой, дизайном интерфейсов.',
        country: 'Украина',
        instruments: 'React JS, HTML, CSS, JS, PHP'
    },
    {
        name: 'Евгений Руденок',
        image: zhenya,
        caption: 'Fullstack разработчик',
        url: 'evgrg',
        description: 'Зовут Евгений, 16 лет. Живу в Беларуси, FullStack-разработчик, также разрабатываю ботов',
        country: 'Беларусь',
        instruments: 'React JS, JS, Node JS, PHP'
    },
];

class HomeBotsListModal extends React.Component {

    render() {
        const {id, onClose, openModal, platform} = this.props;

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Информация
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
                <Cell
                    disabled
                    description={userData[User].caption}
                    before={<Avatar src={userData[User].image}/>}
                    after={<IconButton href={"https://vk.me/" + userData[User].url} target="_blank">
                        <Icon28MessageOutline/>
                    </IconButton>}
                >
                    {userData[User].name}
                </Cell>
                <MiniInfoCell
                    before={<Icon20ArticleOutline />}
                    textWrap="full"
                    textLevel="primary"
                >
                    {userData[User].description}
                </MiniInfoCell>
                <MiniInfoCell
                    before={<Icon20PlaceOutline />}
                >
                    {userData[User].country}
                </MiniInfoCell>
                <SimpleCell disabled multiline>
                    <InfoRow header="Предпочитаемые инструменты">
                        {userData[User].instruments}
                    </InfoRow>
                </SimpleCell>
                <Separator/>
                <Div style={{ width: '100%', textAlign: 'center', marginTop: 8 }}>
                    <Link href={"https://vk.com/" + userData[User].url} target="_blank">
                        <Button size="l" before={<Icon28User/>}>Открыть профиль</Button>
                    </Link>
                </Div>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
