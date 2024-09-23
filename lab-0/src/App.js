import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home } from './panels/Home';

export const App = () => {
  const { panel: activePanel = 'home' } = useActiveVkuiLocation();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function initBridge() {
      try {
        await bridge.send('VKWebAppInit');
        setPopout(null);
      } catch (error) {
        console.error('Failed to initialize VK Bridge:', error);
      }
    }

    initBridge();
  }, []);

  return (
      <SplitLayout popout={popout}>
        <SplitCol>
          <View activePanel={activePanel}>
            <Home id="home" />
          </View>
        </SplitCol>
      </SplitLayout>
  );
};