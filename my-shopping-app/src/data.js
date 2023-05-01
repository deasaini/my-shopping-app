const data = [
	{
		id: '1',
		name: 'Japanese Traditional Robe',
		price: 55,
		image:
			'https://litb-cgis.rightinthebox.com/images/640x640/202206/bps/product/inc/gtbtqc1655117481567.jpg',
		backImage:
			'https://litb-cgis.rightinthebox.com/images/640x640/202206/bps/product/inc/qkcate1655117485025.jpg?fmt=webp&v=1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Casual',
		shipping: true,
		amount: 1,
		stock: 4
	},
	{
		id: '2',
		name: 'Traditional Kimono',
		price: 40,
		image:
			'https://litb-cgis.rightinthebox.com/images/640x640/201908/exovna1565942211979.jpg',
		backImage:
			'https://litb-cgis.rightinthebox.com/images/640x640/201908/qjzaqf1565942222098.jpg?fmt=webp&v=1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Office',
		shipping: true,
		amount: 1,
		stock: 6
	},
	{
		id: '3',
		name: 'Philippines Ethnic Sweatshirt',
		price: 50,
		image:
			'https://cdn11.bigcommerce.com/s-q6xsfp1zsy/images/stencil/1280x1280/attribute_rule_images/188945_source_1671715596.jpg',
		backImage:
			'https://cdn11.bigcommerce.com/s-q6xsfp1zsy/images/stencil/1280x1280/products/114687/441618/Template-Polynesian-Print__36113.1671715803.jpg?c=1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Casual',
		amount: 1,
		stock: 4
	},
	{
		id: '4',
		name: 'Pink suit',
		price: 70,
		image:
			'https://assets0.mirraw.com/images/9112853/VAR1194011-1_bbb915eb-4c1a-4432-b1bc-e1842063757a_zoom.jpg?1623500292',
		backImage:
			'https://assets0.mirraw.com/images/9112858/VAR1194011-3_d87e4c2d-8212-4bf1-bb34-837d1fd2bb4f_zoom.jpg?1623500315',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Office',
		shipping: true,
		amount: 1,
		stock: 4
	},
	{
		id: '5',
		name: 'Teal Embroidered Lehenga Set',
		price: 100,
		image:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/LAS177_FRONT_1680x.jpg?v=1631739761',
		backImage:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/LAS177_BACK_1680x.jpg?v=1631739845',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Office',
		shipping: true,
		amount: 1,
		stock: 4
	},
	{
		id: '6',
		name: 'Lehenga set',
		price: 200,
		image:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/LAS198FRONT_1680x.jpg?v=1585927338',
		backImage:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/LAS198BACK_1680x.jpg?v=1631729913',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Casual',
		shipping: true,
		amount: 1,
		stock: 4
	},
	{
		id: '7',
		name: 'Silk Saree',
		price: 80,
		image:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/DAJ02614_1680x.jpg?v=1672334007',
		backImage:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/DAJ02617_1680x.jpg?v=1672334004',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Casual',
		shipping: true,
		amount: 1,
		stock: 2
	},
	{
		id: '8',
		name: 'Kimono',
		price: 90,
		image:
			'https://cdn.shopify.com/s/files/1/0037/0927/2137/products/SILKKIMONOFLORALDRESSINGGOWNBLACKHELENLOVEDAYWORNBYMODEL11_1512x.jpg?v=1659960827',
		backImage:
			'https://cdn.shopify.com/s/files/1/0037/0927/2137/products/SILKKIMONOFLORALDRESSINGGOWNBLACKHELENLOVEDAYWORNBYMODEL10_2048x.jpg?v=1659960827',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Office',
		shipping: true,
		amount: 1,
		stock: 3
	},
	{
		id: '9',
		name: 'Embroidered Saree',
		price: 100,
		image:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/DAJ03434_11cf1f04-91db-452c-b485-427bbfedc2c2.jpg?v=1672330449',
		backImage:
			'https://cdn.shopify.com/s/files/1/1147/1276/products/DAJ03461_1680x.jpg?v=1672328680',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Office',
		shipping: true,
		amount: 1,
		stock: 4
	},
	{
		id: '10',
		name: 'Yukata Robe Kimono',
		price: 80,
		image: 'https://m.media-amazon.com/images/I/81ctoIxzT6L._AC_SY879_.jpg',
		backImage: 'https://m.media-amazon.com/images/I/71RGDXIFnrL._AC_SY879_.jpg',

		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		category: 'Casual',
		amount: 1,
		stock: 5
	}
];
export default data;
