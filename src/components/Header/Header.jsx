import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {

    const {user, onClose} = useTelegram()

    const tg = window.Telegram.WebApp;


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