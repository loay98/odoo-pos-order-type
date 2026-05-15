/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Order } from "@point_of_sale/app/store/models";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";

patch(Order.prototype, {

    export_as_JSON() {
        const json = super.export_as_JSON(...arguments);
        json.order_type = this.order_type || null;
        return json;
    },

    init_from_JSON(json) {
        super.init_from_JSON(...arguments);
        this.order_type = json.order_type;
    },

    set_order_type(type) {
        this.order_type = type;
    },

});

patch(PaymentScreen.prototype, {

    async validateOrder(isForceValidate) {

        const order = this.currentOrder;

        if (!order.order_type) {

            const type = prompt(
                "Select Order Type:\n\n" +
                "delivery\n" +
                "take_away\n" +
                "dine_in"
            );

            if (!type) {
                return;
            }

            order.set_order_type(type);
        }

        await super.validateOrder(isForceValidate);
    },

});