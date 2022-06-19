-- table contents are from https://mondocoatbridge.com/tea-coffee-list/

create table directory (coffee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, coffee_name TEXT, coffee_description TEXT, category TEXT, price TEXT);

-- Arumba Coffee Selection
insert into directory (coffee_name, coffee_description, category, price) values ('Espresso', 'A Short, Intensely Flavoursome and Rich Coffee', 'Arumba Coffee Selection', '$1.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Espresso Make A Double', 'A Short, Intensely Flavoursome and Rich Coffee', 'Arumba Coffee Selection', '$2.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Caffe Americano', 'A Rich, Full bodied Espresso with Hot Water', 'Arumba Coffee Selection', '$2.20');
insert into directory (coffee_name, coffee_description, category, price) values ('White Coffee', 'A Shot of Coffee topped with Warm Milk', 'Arumba Coffee Selection', '$2.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Caffe Latte', 'Espresso topped with Velvety Smooth Steamed Milk', 'Arumba Coffee Selection', '$2.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Cappuccino', 'Espresso with Smooth Steamed Milk & finished with a Light Dusting of Chocolate', 'Arumba Coffee Selection', '$2.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Mocha', 'An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk', 'Arumba Coffee Selection', '$2.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Flat White', 'Steamed Milk, poured over two Shots of Coffee, topped with Foam', 'Arumba Coffee Selection', '$2.95');
insert into directory (coffee_name, coffee_description, category, price) values ('Espresso Macchiato', 'An Espresso Shot, topped with a Foam Cap', 'Arumba Coffee Selection', '$2.25');

-- Teas & Hot Chocolate
insert into directory (coffee_name, coffee_description, category, price) values ('Breakfast Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Egyptian Mint Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Sapphire Earl Grey Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75');
insert into directory (coffee_name, coffee_description, category, price) values ('Citrus Chamomille Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75');
insert into directory (coffee_name, coffee_description, category, price) values ('Dragonwell Green Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75');
insert into directory (coffee_name, coffee_description, category, price) values ('Wild Encounter Tea (Pot)', '', 'Teas & Hot Chocolate', '$2.75');
insert into directory (coffee_name, coffee_description, category, price) values ('Hot Chocolate', 'A classic hot chocolate drink, topped with foamed milk', 'Teas & Hot Chocolate', '$2.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Marshmallow Hot Chocolate', 'Our Classic hot chocolate, topped with whipped cream, chocolate, and marshmallows', 'Teas & Hot Chocolate', '$2.75');

-- Liqueur Coffees
insert into directory (coffee_name, coffee_description, category, price) values ('Irish (Jamiesons)', 'With Jamesons Irish Whiskey', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('French (Martell Cognac)', 'With Martell Cognac', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Italian (Disaronno)', 'With Disaronno', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Gaelic', 'With Drambuie', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Calypso', 'With Tia Maria', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Seville', 'With Cointreau', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Russian', 'With Smirnoff Vodka', 'Liqueur Coffees', '$5.50');
insert into directory (coffee_name, coffee_description, category, price) values ('Baileys Irish Coffee', 'With Baileys Irish Cream', 'Liqueur Coffees', '$5.50');