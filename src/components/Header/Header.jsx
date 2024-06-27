import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {

    const {tg, onClose} = useTelegram()

    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;