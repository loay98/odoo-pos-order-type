# POS Order Type (Odoo Module)

This module adds a mandatory **Order Type** selection in Odoo POS before validating an order.

Supported order types:
- Delivery
- Take Away
- Dine In

## Features

- Forces cashier to select an order type before payment validation
- Stores order type in backend model `pos.order`
- Shows order type in POS order form and list views
- Follows standard Odoo module structure
- Compatible with Odoo 17 POS

## Requirements

- Docker Desktop
- Git
- Odoo 17 (Docker setup recommended)
- PostgreSQL (via Docker)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/loay98/odoo-pos-order-type.git
cd odoo-pos-order-type
```

### 2. Start services

```bash
docker compose up -d
```

Open Odoo at:

```text
http://localhost:8069
```

### 3. Create a database

When opening Odoo for the first time, create a database with your own credentials.

> **Security note:** Do not commit real passwords or personal credentials to the repository.

### 4. Install Point of Sale

In Odoo:
1. Go to **Apps**
2. Search for **Point of Sale**
3. Install it

### 5. Add this custom module

Ensure the module exists at:

```text
custom_addons/pos_order_type
```

Then restart:

```bash
docker compose restart
```

### 6. Update app list and install module

1. Enable Developer Mode (**Settings → Activate Developer Mode**)
2. Go to **Apps → Update Apps List**
3. Search for `POS Order Type`
4. Install the module

## How to test

1. Open a POS session
2. Add products
3. Click **Payment**
4. Confirm order type is required (Delivery / Take Away / Dine In)
5. Validate the order
6. Check backend under **POS Orders** for the `Order Type` value

## Technical notes

- Backend model extended: `pos.order`
- POS JavaScript patched with OWL
- Order type persists through POS export/import flow
- Validation is blocked until order type is selected

## Project structure

```text
custom_addons/
└── pos_order_type/
	├── __manifest__.py
	├── models/
	├── views/
	└── static/
		└── src/
			├── js/
			├── xml/
			└── css/
```

## Author

Loay Alshaddakh



