-- table contents are from https://mondocoatbridge.com/tea-coffee-list/

create table coffeecart (coffee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, coffee_name TEXT, coffee_description TEXT, category TEXT, price TEXT, quantity INT);

-- Arumba Coffee Selection
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Espresso', 'A Short, Intensely Flavoursome and Rich Coffee', 'Arumba Coffee Selection', '$1.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Espresso Make A Double', 'A Short, Intensely Flavoursome and Rich Coffee', 'Arumba Coffee Selection', '$2.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Caffe Americano', 'A Rich, Full bodied Espresso with Hot Water', 'Arumba Coffee Selection', '$2.20', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('White Coffee', 'A Shot of Coffee topped with Warm Milk', 'Arumba Coffee Selection', '$2.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Caffe Latte', 'Espresso topped with Velvety Smooth Steamed Milk', 'Arumba Coffee Selection', '$2.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Cappuccino', 'Espresso with Smooth Steamed Milk & finished with a Light Dusting of Chocolate', 'Arumba Coffee Selection', '$2.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Mocha', 'An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk', 'Arumba Coffee Selection', '$2.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Flat White', 'Steamed Milk, poured over two Shots of Coffee, topped with Foam', 'Arumba Coffee Selection', '$2.95', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Espresso Macchiato', 'An Espresso Shot, topped with a Foam Cap', 'Arumba Coffee Selection', '$2.25', 0);

-- Teas & Hot Chocolate
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Breakfast Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Egyptian Mint Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Sapphire Earl Grey Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Citrus Chamomille Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Dragonwell Green Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Wild Encounter Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Hot Chocolate', 'A classic hot chocolate drink, topped with foamed milk', 'Teas & Hot Chocolate', '$2.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Marshmallow Hot Chocolate', 'Our Classic hot chocolate, topped with whipped cream, chocolate, and marshmallows', 'Teas & Hot Chocolate', '$2.75', 0);

-- Liqueur Coffees
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Irish (Jamiesons)', 'With Jamesons Irish Whiskey', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('French (Martell Cognac)', 'With Martell Cognac', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Italian (Disaronno)', 'With Disaronno', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Gaelic', 'With Drambuie', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Calypso', 'With Tia Maria', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Seville', 'With Cointreau', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Russian', 'With Smirnoff Vodka', 'Liqueur Coffees', '$5.50', 0);
insert into coffeecart (coffee_name, coffee_description, category, price, quantity) values ('Baileys Irish Coffee', 'With Baileys Irish Cream', 'Liqueur Coffees', '$5.50', 0);