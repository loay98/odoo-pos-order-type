{
    'name': 'POS Order Type',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Adds order type selection in POS',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_order_type/static/src/js/order_type.js',
            'pos_order_type/static/src/xml/order_type.xml',
            'pos_order_type/static/src/css/order_type.css',
        ],
    },
    'data': [
        'views/pos_order_views.xml',
    ],
    'installable': True,
    'application': False,
}