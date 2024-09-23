import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui';
import { openStoryEditor } from '../utils/storyHelper';
import FBIImage from '../assets/wanted_by_FBI.jpeg';

export const Home = ({ id }) => {
    return (
        <Panel id={id}>
            <PanelHeader>SEMI-OFFICIAL FBI PAGE IN RUSSIA 🇷🇺 🇺🇸</PanelHeader>
            <Div style={{ textAlign: 'center' }}>
                <img src={FBIImage} alt="FBI Wanted" style={{ maxWidth: '100%', height: 'auto' }} />
            </Div>

            <Group header={<Header mode="primary">Help the FBI spread information about the most wanted fugitives!</Header>}>
                <Div>
                    <Button stretched size="l" mode="primary" onClick={openStoryEditor}>
                        Post in Story: Most Wanted Fugitives
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};