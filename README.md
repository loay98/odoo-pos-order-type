\# POS Order Type (Odoo Module)



This module adds a mandatory \*\*Order Type selection\*\* in the POS before validating an order.



Supported order types:



\* Delivery

\* Take Away

\* Dine In



Developed for Odoo POS customization assessment.



\---



\# Features



\* Forces cashier to select order type before payment validation

\* Stores order type in backend (`pos.order`)

\* Visible in POS order backend form and list view

\* Follows standard Odoo module structure

\* Works in Odoo 17 POS



\---



\# Requirements



\* Docker Desktop

\* Git

\* Odoo 17 (via Docker recommended)

\* PostgreSQL (handled by Docker)



\---



\# Installation Steps



\## 1. Clone the repository



```bash

git clone https://github.com/YOUR\_USERNAME/pos\_order\_type.git

cd pos\_order\_type

```



\---



\## 2. Start Odoo using Docker



Run:



```bash

docker compose up -d

```



Then open:



```

http://localhost:8069

```



\---



\## 3. Create Database



When opening Odoo for the first time:



\* Master Password:



```

ix2c-hi5f-iki2

```



Create database:



\* Database Name: `pos17`

\* Email: `loayalshaddakh@gmail.com`

\* Password: `@Ll123456`

\* Language: English

\* Country: Bahrain



Click \*\*Create Database\*\*



\---



\## 4. Install POS App



Inside Odoo:



\* Go to Apps

\* Search: \*\*Point of Sale\*\*

\* Install it



\---



\## 5. Add Custom Module



Ensure your module is inside:



```

custom\_addons/pos\_order\_type

```



Then restart Docker:



```bash

docker compose restart

```



\---



\## 6. Update Apps List



Enable Developer Mode:



\* Settings → Activate Developer Mode



Then:



\* Apps → Update Apps List

\* Search: `POS Order Type`

\* Install



\---



\## 7. Test the Feature



1\. Open POS session

2\. Add products

3\. Click \*\*Payment\*\*

4\. You will be forced to select:



&#x20;  \* Delivery

&#x20;  \* Take Away

&#x20;  \* Dine In

5\. Validate order

6\. Check backend:



&#x20;  \* POS Orders → Order Type column



\---



\# Technical Notes



\* Backend model extended: `pos.order`

\* POS JS patched using OWL framework

\* Order type stored in POS JSON export/import cycle

\* Validation hook prevents order confirmation without selection



\---



\# Project Structure



```

pos\_order\_type/

├── \_\_manifest\_\_.py

├── models/

├── views/

├── static/

│   └── src/

│       ├── js/

│       ├── xml/

│       └── css/

```



\---



\# Author



Loay Alshaddakh



