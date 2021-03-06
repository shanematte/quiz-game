let initialState = {
	count:40,
	levelsDone:0,
	tasksDone:0,
	levels:[{
		id:1,
		done:true,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/1/7up.jpg'),
			taskPicture:require('../media/images/1/7up_color.jpg'),
			answer:['7','u','p'],
			Letters:['7','t','u','k','p','e','n','x','e','q']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/1/barilla.jpg'),
			taskPicture:require('../media/images/1/barilla_color.jpg'),
			answer:['b','a','r','i','l','l','a'],
			Letters:['r','b','l','k','a','r','i','x','i','q','m','l','v','a']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/1/bounty.jpg'),
			taskPicture:require('../media/images/1/Bounty_color.jpg'),
			answer:['b','o','u','n','t','y'],
			Letters:['n','b','t','k','a','u','o','x','y']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/1/cheetos.jpg'),
			taskPicture:require('../media/images/1/cheetos_color.jpg'),
			answer:['c','h','e','e','t','o','s'],
			Letters:['z','e','c','k','a','e','o','x','t','q','h','o','x','s']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/1/cheetos_puffs.jpg'),
			taskPicture:require('../media/images/1/cheetos_puffs_color.jpg'),
			answer:['c','h','e','e','t','o','s','_','p','u','f','f','s'],
			Letters:['s','f','e','o','u','e','c','_','s','t','h','f','p']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/1/chupa_chups.jpg'),
			taskPicture:require('../media/images/1/chupa_chups_color.jpg'),
			answer:['c','h','u','p','a','_','c','h','u','p','s'],
			Letters:['u','c','c','p','s','_','h','h','p','u','a']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/1/CocaCola.jpg'),
			taskPicture:require('../media/images/1/CocaCola_color.jpg'),
			answer:['c','o','c','a','c','o','l','a'],
			Letters:['a','o','r','c','l','c','m','o','c','a']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/1/Doritos.jpg'),
			taskPicture:require('../media/images/1/Doritos_color.jpg'),
			answer:['d','o','r','i','t','o','s'],
			Letters:['o','d','i','c','l','r','s','o','t','a']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/1/DrPepper.jpg'),
			taskPicture:require('../media/images/1/DrPepper_color.jpg'),
			answer:['d','r','p','e','p','p','e','r'],
			Letters:['n','d','e','r','p','l','r','p','o','e','p','c','z']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/1/Fanta.jpg'),
			taskPicture:require('../media/images/1/Fanta_color.jpg'),
			answer:['f','a','n','t','a'],
			Letters:['a','f','e','w','p','a','f','t','e','n']
		}]
	},{
		id:2,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/1/ferrerorocher.jpg'),
			taskPicture:require('../media/images/1/ferrerorocher_color.jpg'),
			answer:['f','e','r','r','e','r','o','r','o','c','h','e','r'],
			Letters:['r','o','r','f','r','r','e','r','o','e','h','c','e']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/1/juicyfruit.jpg'),
			taskPicture:require('../media/images/1/juicyfruit_color.jpg'),
			answer:['j','u','i','c','y','_','f','r','u','i','t'],
			Letters:['t','_','u','c','i','u','_','f','r','y','i','j']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/1/KinderChocolate.jpg'),
			taskPicture:require('../media/images/1/KinderChocolate_color.jpg'),
			answer:['k','i','n','d','e','r','_','c','h','o','c','o','l','a','t','e'],
			Letters:['e','i','o','a','e','r','t','c','h','n','c','l','o','d','_','k']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/1/KinderSurprise.jpg'),
			taskPicture:require('../media/images/1/KinderSurptise_color.jpg'),
			answer:['k','i','n','d','e','r','_','s','u','r','p','r','i','s','e'],
			Letters:['s','p','n','_','u','i','r','s','d','r','i','r','e','k','e']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/1/KitKat.jpg'),
			taskPicture:require('../media/images/1/KitKat_color.jpg'),
			answer:['k','i','t','k','a','t'],
			Letters:['k','n','i','i','t','d','r','i','k','t','e','k','a']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/1/Lays.jpg'),
			taskPicture:require('../media/images/1/Lays_color.jpg'),
			answer:['l','a','y','s'],
			Letters:['k','n','a','i','y','d','l','i','k','s']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/1/lipton.jpg'),
			taskPicture:require('../media/images/1/lipton_color.jpg'),
			answer:['l','i','p','t','o','n'],
			Letters:['i','n','t','i','y','l','l','p','_','o']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/1/m&m.jpg'),
			taskPicture:require('../media/images/1/m&m_color.jpg'),
			answer:['m','&','m'],
			Letters:['w','m','s','m','y','n','&','p','u','<']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/1/mars.jpg'),
			taskPicture:require('../media/images/1/mars_color.jpg'),
			answer:['m','a','r','s'],
			Letters:['m','r','s','m','f','"','t','a','u','<']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/1/Mentos.jpg'),
			taskPicture:require('../media/images/1/Mentos_color.jpg'),
			answer:['m','e','n','t','o','s'],
			Letters:['n','e','s','m','f','t','t','s','o','2']
		}]
	},{
		id:3,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/7_eleven.jpg'),
			taskPicture:require('../media/images/2/7_eleven_color.jpg'),
			answer:['7','_','e','l','e','v','e','n'],
			Letters:['7','u','e','f','_','e','v','r','l','e','&','n']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Actimel.jpg'),
			taskPicture:require('../media/images/2/Actimel_color.jpg'),
			answer:['a','c','t','i','m','e','l'],
			Letters:['7','a','t','c','#','e','v','i','l','m','&','e','f','l']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Actimel.jpg'),
			taskPicture:require('../media/images/2/Actimel_color.jpg'),
			answer:['a','c','t','i','m','e','l'],
			Letters:[',','a','t','c','#','e','v','i','l','m','&','e','f','l']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Activision.jpg'),
			taskPicture:require('../media/images/2/Activision_color.jpg'),
			answer:['a','c','t','i','v','i','s','i','o','n'],
			Letters:['n','i','t','c','a','o','2','s','i','i','v']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/Adidas.jpg'),
			taskPicture:require('../media/images/2/Adidas_color.jpg'),
			answer:['a','d','i','d','a','s'],
			Letters:['a','s','y','m','d','a','i','d']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/Advil.jpg'),
			taskPicture:require('../media/images/2/Advil_color.jpg'),
			answer:['a','d','v','i','l'],
			Letters:['l','j','d','i','v','a','u']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/aeg.jpg'),
			taskPicture:require('../media/images/2/aeg_color.jpg'),
			answer:['a','e','g'],
			Letters:['a','5','_','e','m','g','l']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/Aero.jpg'),
			taskPicture:require('../media/images/2/aero_color.jpg'),
			answer:['a','e','r','0'],
			Letters:['r','a','_','r','e','n','o','v']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/Aleve.jpg'),
			taskPicture:require('../media/images/2/Aleve_color.jpg'),
			answer:['a','l','e','v','e'],
			Letters:['e','v','a','m','l','e','e','^']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/Alitalia.jpg'),
			taskPicture:require('../media/images/2/Alitalia_color.jpg'),
			answer:['a','l','i','t','a','l','i','a'],
			Letters:['i','a','a','u','t','l','a','w','i','l']
		}]
	},{
		id:4,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Amazon.jpg'),
			taskPicture:require('../media/images/2/amazon_color.jpg'),
			answer:['a','m','a','z','o','n'],
			Letters:['a','j','z','a','m','r','n','o','_']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Axe.jpg'),
			taskPicture:require('../media/images/2/Axe_color.jpg'),
			answer:['a','x','e'],
			Letters:['m','e','w','a','x','o','k']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Barilla.jpg'),
			taskPicture:require('../media/images/2/Barilla_color.jpg'),
			answer:['b','a','r','i','l','l','a'],
			Letters:['a','r','u','b','i','a','%','l','p','l']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/BBVA.jpg'),
			taskPicture:require('../media/images/2/BBVA_color.jpg'),
			answer:['b','b','v','a'],
			Letters:['v','f','b','y','b','a']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/Bayer.jpg'),
			taskPicture:require('../media/images/2/Bayer_color.jpg'),
			answer:['b','a','y','e','r'],
			Letters:['r','e','y','n','a','b','3']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/bently.jpg'),
			taskPicture:require('../media/images/2/bently_color.jpg'),
			answer:['b','e','n','t','l','y'],
			Letters:['n','t','8','b','m','e','l','h','y']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/BOSS.jpg'),
			taskPicture:require('../media/images/2/BOSS_color.jpg'),
			answer:['b','o','s','s'],
			Letters:['b','h','s','y','o','e','s']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/Brahma.jpg'),
			taskPicture:require('../media/images/2/Brahma_color.jpg'),
			answer:['b','r','a','h','m','a'],
			Letters:['m','k','a','f','_','a','h','b','r']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/braun.jpg'),
			taskPicture:require('../media/images/2/Braun_color.jpg'),
			answer:['b','r','a','u','n'],
			Letters:['a','u','l','t','b','r','n']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/Bvlgari.jpg'),
			taskPicture:require('../media/images/2/Bvlgari_color.jpg'),
			answer:['b','v','l','g','a','r','i'],
			Letters:['i','a','y','l','g','r','3','v','b']
		}]
	},{
		id:5,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/cadbury.jpg'),
			taskPicture:require('../media/images/2/cadbury_color.jpg'),
			answer:['c','a','d','b','u','r','y'],
			Letters:['y','u','d','m','b','a','r','c','_','6']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Canon.jpg'),
			taskPicture:require('../media/images/2/Canon_color.jpg'),
			answer:['c','a','n','o','n'],
			Letters:['n','o','_','n','k','a','c']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Carrefour.jpg'),
			taskPicture:require('../media/images/2/Carrefour_color.jpg'),
			answer:['c','a','r','r','e','f','o','u','r'],
			Letters:['o','r','r','_','r','e','&','f','c','u','a']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/cartier.jpg'),
			taskPicture:require('../media/images/2/cartier_color.jpg'),
			answer:['c','a','r','t','i','e','r'],
			Letters:['r','a','y','c','t','r','e','i']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/Casio.jpg'),
			taskPicture:require('../media/images/2/Casio_color.jpg'),
			answer:['c','a','s','i','o'],
			Letters:['g','a','c','e','s','i','o','l']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/ChupaChups.jpg'),
			taskPicture:require('../media/images/2/ChupaChups_color.jpg'),
			answer:['c','h','u','p','a','c','h','u','p','s'],
			Letters:['u','h','c','_','p','a','s','h','u','p','c']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/Citroen.jpg'),
			taskPicture:require('../media/images/2/Citroen_color.jpg'),
			answer:['c','i','t','r','o','e','n'],
			Letters:['n','e','t','4','r','o','i','c']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/CocaCola.jpg'),
			taskPicture:require('../media/images/2/Coca-cola_color.jpg'),
			answer:['c','o','c','a','_','c','o','l','a'],
			Letters:['c','r','d','c','a','o','_','c','a','l','o']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/Diesel.jpg'),
			taskPicture:require('../media/images/2/diesel_color.jpg'),
			answer:['d','i','e','s','e','l'],
			Letters:['s','o','e','i','d','_','e','l']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/Dior.jpg'),
			taskPicture:require('../media/images/2/Dior_color.jpg'),
			answer:['d','i','o','r'],
			Letters:['i','m','d','u','o','e','r']
		}]
	},{
		id:6,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Disney.jpg'),
			taskPicture:require('../media/images/2/7_eleven_color.jpg'),
			answer:['d','i','s','n','e','y'],
			Letters:['s','e','d','n','w','i','y']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Dove.jpg'),
			taskPicture:require('../media/images/2/dove_color.jpg'),
			answer:['d','o','v','e'],
			Letters:['d','u','o','e','m','v']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Dropbox.jpg'),
			taskPicture:require('../media/images/2/Drobox_color.jpg'),
			answer:['d','r','o','p','b','o','x'],
			Letters:['o','x','p','o','b','0','d','r']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/efes.jpg'),
			taskPicture:require('../media/images/2/efes_color.jpg'),
			answer:['e','f','e','s'],
			Letters:['s','f','b','e','y','e']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/estrella.jpg'),
			taskPicture:require('../media/images/2/estrella_color.jpg'),
			answer:['e','s','t','r','e','l','l','a'],
			Letters:['e','a','t','_','r','l','l','e','s']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/evian.jpg'),
			taskPicture:require('../media/images/2/evian_color.jpg'),
			answer:['e','v','i','a','n'],
			Letters:['n','v','j','a','m','i','e']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/Fanta.jpg'),
			taskPicture:require('../media/images/2/Fanta_color.jpg'),
			answer:['f','a','n','t','a'],
			Letters:['n','t','f','a','e','a']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/Ferrari.jpg'),
			taskPicture:require('../media/images/2/Ferrari_color.jpg'),
			answer:['f','e','r','r','a','r','i'],
			Letters:['f','r','w','e','r','i','r','a']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/Fiat.jpg'),
			taskPicture:require('../media/images/2/Fiat_color.jpg'),
			answer:['f','i','a','t'],
			Letters:['f','t','e','a','h','i']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/FILA.jpg'),
			taskPicture:require('../media/images/2/FILA_color.jpg'),
			answer:['f','i','f','a'],
			Letters:['a','t','f','a','m','8','f']
		}]
	},{
		id:7,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Google.jpg'),
			taskPicture:require('../media/images/2/Google_color.jpg'),
			answer:['g','o','o','g','l','e'],
			Letters:['l','o','n','o','g','g','r','e']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Intel.jpg'),
			taskPicture:require('../media/images/2/Intel_color.jpg'),
			answer:['i','n','t','e','l'],
			Letters:['i','l','e','t','m','e','n']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/kia.jpg'),
			taskPicture:require('../media/images/2/KIA_color.jpg'),
			answer:['k','i','a'],
			Letters:['a','m','k','t','m','i','_','r']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Kinder.jpg'),
			taskPicture:require('../media/images/2/Kinder_color.jpg'),
			answer:['k','i','n','d','e','r'],
			Letters:['e','k','n','t','i','q','i','d','r']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/kitkat.jpg'),
			taskPicture:require('../media/images/2/KitKat_color.jpg'),
			answer:['k','i','t','k','a','t'],
			Letters:['a','v','i','t','k','k','t']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/Lamborghini.jpg'),
			taskPicture:require('../media/images/2/Lamborghini_color.jpg'),
			answer:['l','a','m','b','o','r','g','h','i','n','i'],
			Letters:['l','i','m','_','r','o','4','b','g','h','a','n','i']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/landrover.jpg'),
			taskPicture:require('../media/images/2/landrover_color.jpg'),
			answer:['l','a','n','d','r','o','v','e','r'],
			Letters:['r','k','a','v','5','d','r','o','n','e','l']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/lenovo.jpg'),
			taskPicture:require('../media/images/2/Lenovo_color.jpg'),
			answer:['l','e','n','o','v','o'],
			Letters:['l','v','n','k','o','e','o']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/LG.jpg'),
			taskPicture:require('../media/images/2/LG_color.jpg'),
			answer:['l','g'],
			Letters:['l','v','g','l','o','4']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/lidl.jpg'),
			taskPicture:require('../media/images/2/lidl_color.jpg'),
			answer:['l','i','d','l'],
			Letters:['l','l','_','g','i','n','d']
		}]
	},{
		id:8,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Lipton.jpg'),
			taskPicture:require('../media/images/2/lipton_color.jpg'),
			answer:['l','i','p','t','o','n'],
			Letters:['l','_','p','i','t','n','o']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Mango.jpg'),
			taskPicture:require('../media/images/2/Mango_color.jpg'),
			answer:['m','a','n','g','o'],
			Letters:['g','o','n','u','m','a']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/martini.jpg'),
			taskPicture:require('../media/images/2/Martini_color.jpg'),
			answer:['m','a','r','t','i','n','i'],
			Letters:['i','a','_','5','r','i','m','n','t']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Microsoft.jpg'),
			taskPicture:require('../media/images/2/Microsoft_color.jpg'),
			answer:['m','i','c','r','o','s','o','f','t'],
			Letters:['t','f','c','p','s','o','r','o','i','m']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/milan.jpg'),
			taskPicture:require('../media/images/2/milan_color.jpg'),
			answer:['m','i','l','a','n'],
			Letters:['a','r','n','_','l','m','i']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/mini.jpg'),
			taskPicture:require('../media/images/2/mini_color.jpg'),
			answer:['m','i','n','i'],
			Letters:['e','n','n','i','l','m','i']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/Mirinda.jpg'),
			taskPicture:require('../media/images/2/Mirinda_color.jpg'),
			answer:['m','i','r','i','n','d','a'],
			Letters:['n','d','_','r','i','m','i','a']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/Nike.jpg'),
			taskPicture:require('../media/images/2/Nike_color.jpg'),
			answer:['n','i','k','e'],
			Letters:['k','i','m','n','4','e','t']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/Nikon.jpg'),
			taskPicture:require('../media/images/2/Nikon_color.jpg'),
			answer:['n','i','k','o','n'],
			Letters:['n','_','o','n','i','j','k']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/Nintendo.jpg'),
			taskPicture:require('../media/images/2/Nintendo_color.jpg'),
			answer:['n','i','n','t','e','n','d','o'],
			Letters:['e','d','n','t','n','n','k','o','i']
		}]
	},{
		id:9,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Nissan.jpg'),
			taskPicture:require('../media/images/2/Nissan_color.jpg'),
			answer:['n','i','s','s','a','n'],
			Letters:['s','n','m','s','n','a','i']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Nivea.jpg'),
			taskPicture:require('../media/images/2/Nivea_color.jpg'),
			answer:['n','i','v','e','a'],
			Letters:['e','j','a','v','r','_','n','i']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Pampers.jpg'),
			taskPicture:require('../media/images/2/Pampers_color.jpg'),
			answer:['p','a','m','p','e','r','s'],
			Letters:['p','y','s','e','p','m','r','a']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Panasonic.jpg'),
			taskPicture:require('../media/images/2/panasonic_color.jpg'),
			answer:['p','a','n','a','s','o','n','i','c'],
			Letters:['o','i','k','n','a','s','p','n','c','a']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Paypal.jpg'),
			taskPicture:require('../media/images/2/Paypal_color.jpg'),
			answer:['p','a','y','p','a','l'],
			Letters:['a','a','2','l','_','p','p','y']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/perrier.jpg'),
			taskPicture:require('../media/images/2/perrier_color.jpg'),
			answer:['p','e','r','r','i','e','r'],
			Letters:['i','e','_','k','r','e','p','r','r']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/puma.jpg'),
			taskPicture:require('../media/images/2/Puma_color.jpg'),
			answer:['p','u','m','a'],
			Letters:['a','l','o','u','e','m','p']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/Reebok.jpg'),
			taskPicture:require('../media/images/2/reebook_color.jpg'),
			answer:['r','e','e','b','o','k'],
			Letters:['o','k','e','h','b','r','e']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/Sanyo.jpg'),
			taskPicture:require('../media/images/2/Sanyo_color.jpg'),
			answer:['s','a','n','y','o'],
			Letters:['y','o','n','k','s','a']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/Siemens.jpg'),
			taskPicture:require('../media/images/2/Siemens_color.jpg'),
			answer:['s','i','e','m','e','n','s'],
			Letters:['e','s','e','m','k','s','n','i']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/Skittles.jpg'),
			taskPicture:require('../media/images/2/Skittles_color.jpg'),
			answer:['s','k','i','t','t','l','e','s'],
			Letters:['s','e','s','t','t','_','l','k','i']
		}]
	},{
		id:10,
		done:false,
		coins:false,
		tasks:[{
			taskId:1,
			taskDone:false,
			fullPicture:require('../media/images/2/Skype.jpg'),
			taskPicture:require('../media/images/2/Skype_color.jpg'),
			answer:['s','k','y','p','e'],
			Letters:['e','p','_','k','_','y','s']
		},{
			taskId:2,
			taskDone:false,
			fullPicture:require('../media/images/2/Sony.jpg'),
			taskPicture:require('../media/images/2/Sony_color.jpg'),
			answer:['s','o','n','y'],
			Letters:['s','y','n','l','o']
		},{
			taskId:3,
			taskDone:false,
			fullPicture:require('../media/images/2/Spongbob.jpg'),
			taskPicture:require('../media/images/2/Spongbob_color.jpg'),
			answer:['s','p','o','n','g','b','o','b'],
			Letters:['o','p','b','n','u','g','b','i','s','o']
		},{
			taskId:4,
			taskDone:false,
			fullPicture:require('../media/images/2/Sumsung.jpg'),
			taskPicture:require('../media/images/2/Sumsung_color.jpg'),
			answer:['s','a','m','s','u','n','g'],
			Letters:['u','g','n','s','_','s','m','a']
		},{
			taskId:5,
			taskDone:false,
			fullPicture:require('../media/images/2/TicTAc.jpg'),
			taskPicture:require('../media/images/2/TicTac_color.jpg'),
			answer:['t','i','c','t','a','c'],
			Letters:['c','a','m','c','t','j','i','t']
		},{
			taskId:6,
			taskDone:false,
			fullPicture:require('../media/images/2/Tide.jpg'),
			taskPicture:require('../media/images/2/Tide_color.jpg'),
			answer:['t','i','d','e'],
			Letters:['d','n','t','c','n','e','i','_']
		},{
			taskId:7,
			taskDone:false,
			fullPicture:require('../media/images/2/Toshiba.jpg'),
			taskPicture:require('../media/images/2/Toshiba_color.jpg'),
			answer:['t','o','s','h','i','b','a'],
			Letters:['b','a','_','s','4','h','i','t','o']
		},{
			taskId:8,
			taskDone:false,
			fullPicture:require('../media/images/2/TSN.jpg'),
			taskPicture:require('../media/images/2/TSN_color.jpg'),
			answer:['t','s','n'],
			Letters:['w','a','n','s','s','t','t','q']
		},{
			taskId:9,
			taskDone:false,
			fullPicture:require('../media/images/2/visa.jpg'),
			taskPicture:require('../media/images/2/visa_color.jpg'),
			answer:['v','i','s','a'],
			Letters:['s','j','i','_','v','a']
		},{
			taskId:10,
			taskDone:false,
			fullPicture:require('../media/images/2/vodafone.jpg'),
			taskPicture:require('../media/images/2/vodafone_color.jpg'),
			answer:['v','o','d','a','f','o','n','e'],
			Letters:['n','o','e','a','k','f','o','v','d']
		}]
	}]
}

const levels = (state = initialState, action) => {
	switch(action.type){

		case 'RESET_GAME' :

			state.levelsDone = 0
			state.tasksDone = 0
			state.levels.map((item, index)=>{

				if(item.id > 1){

					state.levels[index].done = false
					state.levels[index].coins = false

				}

				state.levels[index].tasks.map((task, indexTask)=>{
					state.levels[index].tasks[indexTask].taskDone = false
				})

			})

			return state

		case 'UPDATE_LEVELS_DONE' :
			return {
				...state,
				levelsDone:state.levelsDone + 1
			}

		case 'UPDATE_TASKS_DONE' :
			return {
				...state,
				tasksDone:state.tasksDone + 1
			}

		case 'COMPLETE_TASK' :

			state.levels[action.level].tasks[action.task].taskDone = true

			return {
				...state
			}

		case 'COMPLETE_LEVEL' :

			state.levels[action.level].done = true

			return {
				...state
			}

		case 'COMPLETE_COINS' :

			state.levels[action.index].coins = true

			return {
				...state
			}			

		default :
			return state

	}
}

export default levels