import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Avatar,
    Cell,
    Group,
    Header,
    HorizontalCell,
    HorizontalScroll,
    InfoRow,
    Panel,
    PanelHeader,
    Separator,
    SimpleCell,
    Snackbar,
    IOS
} from "@vkontakte/vkui";

import Icon16ErrorCircleFill from '@vkontakte/icons/dist/16/error_circle_fill';
import Icon20CheckCircleFillGreen from '@vkontakte/icons/dist/20/check_circle_fill_green';

import grisha from '../../../images/grisha.jpeg';
import zhenya from '../../../images/zhenya.jpeg';

import school from '../../../images/school.jpeg';
import calories from '../../../images/calories.jpeg';
import world_guide from '../../../images/world_guide.jpeg';
import tricks from '../../../images/tricks.jpeg';
import chemistry from '../../../images/chemistry.jpeg';

var User = 1;

var services = [
    {
        title: 'Учи трюки',
        image: tricks,
        url: 'https://vk.com/tricks'
    },
    {
        title: 'School — учебный помощник',
        image: school,
        url: 'https://vk.com/schools'
    },
    {
        title: 'Химик!',
        image: chemistry,
        url: 'https://vk.com/himik_app'
    },
    {
        title: 'Калькулятор калорий',
        image: calories,
        url: 'https://vk.com/calories'
    },
    {
        title: 'Путеводитель по миру',
        image: world_guide,
        url: 'https://vk.com/world_guide'
    }
]

class HomePanelBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null
        };

        this.showError = this.showError.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
    }

    showError(text) {
        if (this.state.snackbar) return;
        this.setState({ snackbar:
        <Snackbar
            layout="vertical"
            onClose={() => this.setState({ snackbar: null })}
            before={<Icon16ErrorCircleFill width={24} height={24} />}
        >
            {text}
        </Snackbar>
        });
    }

    showSuccess(text) {
        if (this.state.snackbar) return;
        this.setState({ snackbar:
        <Snackbar
            layout="vertical"
            onClose={() => this.setState({ snackbar: null })}
            before={<Icon20CheckCircleFillGreen width={24} height={24} />}
        >
            {text}
        </Snackbar>
        });
    }

    componentDidMount() {
    }

    render() {
        const {id, setPage, platform} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Двое из QA</PanelHeader>
                <Group>
                    <SimpleCell multiline>
                        <InfoRow header="О нас">
                            Мы команда разработчиков, познакомившихся несколько лет назад в программе VK Testers. Мы занимаемся разработкой мини-приложений ВКонтакте.
                        </InfoRow>
                    </SimpleCell>
                    <Separator/>
                    <Header mode="primary">Команда</Header>
                    <Cell onClick={() => {
                        User = 0;
                        this.props.openModal("MODAL_PAGE_BOTS_LIST");
                    }} description="Frontend разработчик, дизайнер" before={<Avatar src={grisha}/>} expandable>
                        Григорий Тищенко
                    </Cell>
                    <Cell onClick={() => {
                        User = 1;
                        this.props.openModal("MODAL_PAGE_BOTS_LIST");
                    }} description="Fullstack разработчик" before={<Avatar src={zhenya}/>} expandable>
                        Евгений Руденок
                    </Cell>
                    <Header mode="primary">Совместные проекты</Header>
                    <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
                        <div style={{ display: 'flex' }}>
                            {services.map((item) => 
                                <a href={item.url} target="_blank" style={{ color: 'unset', textDecoration: 'none' }}>
                                    <HorizontalCell size='s' header={item.title}>
                                        <Avatar size={platform === IOS ? 64 : 56} mode='app'
                                                src={item.image}/>
                                    </HorizontalCell>
                                </a>
                            )}
                        </div>
                    </HorizontalScroll>
                </Group>
                {this.state.snackbar}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
export var User;