from odoo import fields, models, api

class PosOrder(models.Model):
    _inherit = 'pos.order'

    order_type = fields.Selection([
        ('delivery', 'Delivery'),
        ('take_away', 'Take Away'),
        ('dine_in', 'Dine In'),
    ], string='Order Type')

    @api.model
    def _order_fields(self, ui_order):
        res = super()._order_fields(ui_order)
        res['order_type'] = ui_order.get('order_type')
        return res