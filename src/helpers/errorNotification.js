import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const errorNotification = name => {
    Notify.failure(`${name} is already in contacts.`);
};
