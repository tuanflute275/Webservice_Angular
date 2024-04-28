create database DB_Webservice;
go
use DB_Webservice;
go

create table categories
(
	categoryId int primary key identity,
	name nvarchar(200)
);
go

insert into categories(name) values(N'Áo');
insert into categories(name) values(N'Quần');
insert into categories(name) values(N'Giày');
insert into categories(name) values(N'Dép');
insert into categories(name) values(N'Túi Xách');
go

create table products
(
	productId int primary key identity,
	name nvarchar(200),
	price float,
	sale_price float,
	image nvarchar(200),
	date_product date null default GETDATE(),
	status int,
	category_id int,
	foreign key (category_id) references categories(categoryId)
);
go

insert into products values 
(N'Áo thun basic unisex cotton 100% - màu đen - chodole', 456000, 123000, N'https://dosi-in.com/images/detailed/42/CDL10_1.jpg','2000-1-1',1, 1);
insert into products values 
(N'ÁO ĐẤU MANCHESTER CITY', 120000, 99000, N'https://keepersport.vn/wp-content/uploads/2023/09/770438-01.png','2001-2-2',1, 1);
insert into products values 
(N'Quần short nam AKST283-3', 150000, 110000, 
N'https://product.hstatic.net/1000312752/product/akst283-3l__1__f92b48c4efbc4564ba305ea1cea62392.jpg','2002-5-2',1, 2);
insert into products values 
(N'Giày thể thao độn đế T60', 390000, 0, 
N'https://product.hstatic.net/1000312752/product/akst283-3l__1__f92b48c4efbc4564ba305ea1cea62392.jpg','2018-12-9',1, 3);
insert into products values 
(N'Dép trendy 4 in chữ Shondo hồng phối quai xanh da trời', 50000, 0, N'https://pos.nvncdn.com/04f7ff-92233/ps/20230629_WPkqHcQ1c8.jpeg','2021-10-5',1, 4);
insert into products values 
(N'Túi xách nữ cao cấp VLS 911', 980000, 0, N'https://www.gento.vn/wp-content/uploads/2023/05/tui-xach-nu-6-600x600.jpg','2024-3-8',1, 5);

select * from products