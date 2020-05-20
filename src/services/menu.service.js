import { Subject } from "rxjs";

const $status = new Subject();

export const MenuService = {
    updateStatus : (status) => $status.next(status),
    getStatus : () => $status
};