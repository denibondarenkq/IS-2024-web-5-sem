import bridge from '@vkontakte/vk-bridge';
import { fetchRandomUser } from './fetchRandomUser';


export const openStoryEditor = async () => {
    const user = await fetchRandomUser();

    try {
        await bridge.send('VKWebAppShowStoryBox', {
            background_type: 'image',
            url: 'https://sun9-12.userapi.com/impg/Br9mEuQ0YlHhhYfVd_VFvSZpLr02QXuydEzmvg/NoeiScU8_r8.jpg?size=617x1080&quality=95&sign=5ad814887d7650c88a74b2fc229bd197&type=album', // Прямая ссылка на фон-картинку
            locked: true,
            stickers: [
                {
                    sticker_type: 'renderable',
                    sticker: {
                        content_type: 'image',
                        url: 'https://sun9-53.userapi.com/impg/vJNV8V9XE82oRujB8jkXSP5btpbRn543xXZBDw/S35x-VfZSIw.jpg?size=1279x224&quality=95&sign=7ccb78e686b8eb0251108b491bc300e1&type=album', // Используем ту же ссылку на изображение
                        can_delete: false,
                        transform: {
                            gravity: 'center_top',
                            translation_y: 0.1,
                            relation_width: 0.5
                        }
                    }
                },
                {
                    sticker_type: 'renderable',
                    sticker: {
                        content_type: 'image',
                        url: user.picture,
                        can_delete: false,
                        transform: {
                            gravity: 'center_top',
                            translation_y: 0.3
                        }
                    }
                },
                {
                    sticker_type: 'native',
                    sticker: {
                        action_type: 'text',
                        action: {
                            text: `${user.firstName} ${user.lastName}`,
                            style: 'classic',
                            background_style: 'none',
                            selection_color: '#FFFFFF',
                        },
                        transform: {
                            gravity: 'center',
                            translation_y: 0.3,
                            relation_width: 0.5
                        }
                    }
                }
            ]
        });
    } catch (error) {
        console.error('Error posting story:', error);
    }
};